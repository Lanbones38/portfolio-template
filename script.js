// Theme toggle
document.getElementById('themeToggle')?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

// Simple API fetch demo (AJAX)
// Simple API fetch demo (AJAX)
(async () => {
  const el = document.getElementById('quote');
  if (!el) return;

  try {
    const res = await fetch("https://api.quotable.io/quotes/random");
    const data = await res.json();

    const quote = data[0]; // New API returns an array

    el.textContent = `"${quote.content}" — ${quote.author}`;
  } catch (err) {
    console.error(err);
    el.textContent = "Could not load quote. So have a good break.";
  }
})();
