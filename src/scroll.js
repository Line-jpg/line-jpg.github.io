export function scrollToSection(target) {
  if (target === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
}
