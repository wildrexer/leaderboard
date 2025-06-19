const users = [
  { username: "Marshmello", wagered: 900, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 700, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 500, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 400, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 300, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 250, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 200, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 150, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 100, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" },
  { username: "", wagered: 50, logo: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327107266" }
];

function renderLeaderboard() {
  const topThreeContainer = document.getElementById("top-three");
  const rankingsContainer = document.getElementById("rankings");

  topThreeContainer.innerHTML = "";
  rankingsContainer.innerHTML = "";

  users.slice(0, 3).forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${user.logo}" alt="User Logo" />
      <h3>#${index + 1} ${user.username}</h3>
      <p>Wagered: $${user.wagered}</p>
    `;
    topThreeContainer.appendChild(card);
  });

  users.slice(3).forEach((user, index) => {
    const row = document.createElement("div");
    row.className = "rank";
    row.innerHTML = `
      <span><img src="${user.logo}" class="rank-logo" alt="Logo" />#${index + 4} ${user.username}</span>
      <span>$${user.wagered}</span>
    `;
    rankingsContainer.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLeaderboard();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

// Countdown Timer
function updateCountdown() {
  const endDate = new Date("2025-07-09T00:00:00"); // Set to your leaderboard end date
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "LEADERBOARD HAS ENDED";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days-left").innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
}
