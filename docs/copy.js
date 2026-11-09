for (const prompt of document.querySelectorAll(".prompt")) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy";
  button.textContent = "Copy prompt";
  const status = document.createElement("span");
  status.className = "status";
  status.setAttribute("role", "status");
  prompt.after(button, status);
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(prompt.textContent.trim());
      status.textContent = "Copied.";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(prompt);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Prompt selected. Use your device’s Copy command.";
    }
  });
}
