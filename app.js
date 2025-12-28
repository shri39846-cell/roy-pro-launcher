const apps = [
  // ===== SOCIAL (30+) =====
  { name: "YouTube", url: "https://youtube.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com", category: "Social" },
  { name: "Instagram", url: "https://instagram.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=instagram.com", category: "Social" },
  { name: "Facebook", url: "https://facebook.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=facebook.com", category: "Social" },
  { name: "Twitter / X", url: "https://x.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=x.com", category: "Social" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=linkedin.com", category: "Social" },
  { name: "Discord", url: "https://discord.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=discord.com", category: "Social" },
  { name: "Reddit", url: "https://reddit.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=reddit.com", category: "Social" },
  { name: "Snapchat Web", url: "https://web.snapchat.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=snapchat.com", category: "Social" },
  { name: "Telegram Web", url: "https://web.telegram.org", icon: "https://www.google.com/s2/favicons?sz=64&domain=telegram.org", category: "Social" },
  { name: "WhatsApp Web", url: "https://web.whatsapp.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=whatsapp.com", category: "Social" },

  // ===== GOOGLE SUITE (20+) =====
  { name: "Gmail", url: "https://mail.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=mail.google.com", category: "Google" },
  { name: "Google Drive", url: "https://drive.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=drive.google.com", category: "Google" },
  { name: "Google Docs", url: "https://docs.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=docs.google.com", category: "Google" },
  { name: "Google Sheets", url: "https://sheets.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=sheets.google.com", category: "Google" },
  { name: "Google Slides", url: "https://slides.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=slides.google.com", category: "Google" },
  { name: "Google Calendar", url: "https://calendar.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=calendar.google.com", category: "Google" },
  { name: "Google Photos", url: "https://photos.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=photos.google.com", category: "Google" },

  // ===== DEVELOPER (40+) =====
  { name: "GitHub", url: "https://github.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=github.com", category: "Developer" },
  { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com", category: "Developer" },
  { name: "CodePen", url: "https://codepen.io", icon: "https://www.google.com/s2/favicons?sz=64&domain=codepen.io", category: "Developer" },
  { name: "JSFiddle", url: "https://jsfiddle.net", icon: "https://www.google.com/s2/favicons?sz=64&domain=jsfiddle.net", category: "Developer" },
  { name: "Replit", url: "https://replit.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=replit.com", category: "Developer" },
  { name: "CodeSandbox", url: "https://codesandbox.io", icon: "https://www.google.com/s2/favicons?sz=64&domain=codesandbox.io", category: "Developer" },
  { name: "VS Code Online", url: "https://vscode.dev", icon: "https://www.google.com/s2/favicons?sz=64&domain=vscode.dev", category: "Developer" },

  // ===== AI TOOLS (20+) =====
  { name: "ChatGPT", url: "https://chat.openai.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=openai.com", category: "AI" },
  { name: "Gemini", url: "https://gemini.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=google.com", category: "AI" },
  { name: "Claude AI", url: "https://claude.ai", icon: "https://www.google.com/s2/favicons?sz=64&domain=claude.ai", category: "AI" },
  { name: "Perplexity", url: "https://perplexity.ai", icon: "https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai", category: "AI" },

  // ===== DESIGN (15+) =====
  { name: "Canva", url: "https://canva.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=canva.com", category: "Design" },
  { name: "Figma", url: "https://figma.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=figma.com", category: "Design" },
  { name: "Adobe Express", url: "https://express.adobe.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=adobe.com", category: "Design" },

  // ===== PRODUCTIVITY (20+) =====
  { name: "Notion", url: "https://notion.so", icon: "https://www.google.com/s2/favicons?sz=64&domain=notion.so", category: "Productivity" },
  { name: "Trello", url: "https://trello.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=trello.com", category: "Productivity" },
  { name: "Slack", url: "https://slack.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=slack.com", category: "Productivity" },
  { name: "Zoom", url: "https://zoom.us", icon: "https://www.google.com/s2/favicons?sz=64&domain=zoom.us", category: "Productivity" },

  // ===== MEDIA (15+) =====
  { name: "Spotify", url: "https://spotify.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=spotify.com", category: "Media" },
  { name: "Netflix", url: "https://netflix.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=netflix.com", category: "Media" },
  { name: "Amazon Prime Video", url: "https://primevideo.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=primevideo.com", category: "Media" },
  { name: "Twitch", url: "https://twitch.tv", icon: "https://www.google.com/s2/favicons?sz=64&domain=twitch.tv", category: "Media" },

  // ===== HOSTING & CLOUD (20+) =====
  { name: "Netlify", url: "https://netlify.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=netlify.com", category: "Hosting" },
  { name: "Vercel", url: "https://vercel.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=vercel.com", category: "Hosting" },
  { name: "Firebase", url: "https://firebase.google.com", icon: "https://www.google.com/s2/favicons?sz=64&domain=firebase.google.com", category: "Hosting" },
  { name: "AWS Console", url: "https://aws.amazon.com/console", icon: "https://www.google.com/s2/favicons?sz=64&domain=amazon.com", category: "Hosting" }
];

// ===== RENDER LOGIC =====
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const appCount = document.getElementById("appCount");
const loader = document.getElementById("loader");
const loaderText = document.getElementById("loaderText");
const lastOpened = document.getElementById("lastOpened");
const categoriesDiv = document.getElementById("categories");

let currentCategory = "All";

function renderCategories() {
  const categories = ["All", ...new Set(apps.map(a => a.category))];
  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "category" + (cat === "All" ? " active" : "");
    div.textContent = cat;
    div.onclick = () => {
      document.querySelectorAll(".category").forEach(c => c.classList.remove("active"));
      div.classList.add("active");
      currentCategory = cat;
      renderApps();
    };
    categoriesDiv.appendChild(div);
  });
}

function renderApps() {
  grid.innerHTML = "";
  const query = search.value.toLowerCase();

  const filtered = apps.filter(app =>
    (currentCategory === "All" || app.category === currentCategory) &&
    app.name.toLowerCase().includes(query)
  );

  appCount.textContent = `${filtered.length} Apps`;

  filtered.forEach(app => {
    const div = document.createElement("div");
    div.className = "app";
    div.innerHTML = `<img src="${app.icon}"><div>${app.name}</div>`;
    div.onclick = () => openApp(app);
    grid.appendChild(div);
  });
}

function openApp(app) {
  loaderText.textContent = `OPENING ${app.name}...`;
  loader.classList.remove("hidden");
  lastOpened.textContent = `Last opened: ${app.name}`;
  setTimeout(() => {
    window.open(app.url, "_blank");
    loader.classList.add("hidden");
  }, 2000);
}

search.addEventListener("input", renderApps);
search.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const first = grid.querySelector(".app");
    if (first) first.click();
  }
});

renderCategories();
renderApps();
