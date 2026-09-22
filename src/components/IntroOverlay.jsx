import { useEffect, useState } from "react";

const STORAGE_KEY = "introSeen";
const HOLD_MS = 4000;
const LEAVE_MS = 900;

function hasSeenIntro() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "true");
  } catch {
    // sessionStorage can throw in private browsing; the intro simply replays.
  }
}

function IntroOverlay() {
  const [visible, setVisible] = useState(() => !hasSeenIntro());
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leaveTimer = setTimeout(() => setLeaving(true), HOLD_MS);
    const endTimer = setTimeout(() => {
      markIntroSeen();
      setVisible(false);
    }, HOLD_MS + LEAVE_MS);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(endTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay${leaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
    >
      <p className="intro-overlay-text">Work in progress - snart færdig</p>
    </div>
  );
}

export default IntroOverlay;
