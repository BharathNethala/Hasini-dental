import { useState } from "react";

const DEMO_PASSWORD = "onyx@demo";

export default function DemoLock({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const unlock = () => {
    if (password === DEMO_PASSWORD) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  // 🔒 ALWAYS SHOW PASSWORD SCREEN FIRST
  if (!unlocked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#020617",
          color: "#fff",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "10px",
            width: "320px",
            textAlign: "center",
          }}
        >
          <h3>Private Demo Preview</h3>
          <p style={{ fontSize: "14px", opacity: 0.8 }}>
            Password required on every visit
          </p>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginTop: "12px",
              padding: "8px",
              width: "100%",
            }}
          />

          <button
            onClick={unlock}
            style={{
              marginTop: "12px",
              padding: "8px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            Access Demo
          </button>

          {error && (
            <p style={{ color: "red", marginTop: "8px" }}>
              Incorrect password
            </p>
          )}
        </div>
      </div>
    );
  }

  // ✅ UNLOCKED VIEW WITH WATERMARK
  return (
    <>
      {/* DEMO WATERMARK */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-30deg)",
          fontSize: "64px",
          fontWeight: "800",
          color: "rgba(0,0,0,0.08)",
          zIndex: 9999,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        DEMO PREVIEW
      </div>

      {children}
    </>
  );
}
