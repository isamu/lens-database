// Copy text to the clipboard. The async Clipboard API is unavailable on
// non-secure origins and older Safari, so fall back to a hidden textarea +
// execCommand there. Throws if both paths fail, letting callers skip the
// "copied" feedback.
export const writeClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const staging = document.createElement("textarea");
  staging.value = text;
  staging.setAttribute("readonly", "");
  staging.style.position = "fixed";
  staging.style.opacity = "0";
  document.body.appendChild(staging);
  staging.select();
  try {
    if (!document.execCommand("copy")) throw new Error("copy command rejected");
  } finally {
    document.body.removeChild(staging);
  }
};
