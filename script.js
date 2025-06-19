const users = [
  { username: "Marshmello", wagered: 900 },
  { username: "2", wagered: 500 },
  { username: "3", wagered: 150 },
  { username: "4", wagered: 75 },
  { username: "5", wagered: 25 },
  { username: "6", wagered: 0 },
  { username: "7", wagered: 0 },
  { username: "8", wagered: 0 },
  { username: "9", wagered: 0 },
  { username: "10", wagered: 0 }
];

function renderLeaderboard() {
  const topThreeContainer = document.getElementById("top-three");
  const rankListContainer = document.getElementById("rank-list");
  topThreeContainer.innerHTML = "";
  rankListContainer.innerHTML = "";

  users.slice(0, 3).forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "card glow";
    card.innerHTML = `
      <div>#${index + 1}</div>
      <img src="logo.png" alt="Logo" />
      <div class="username">${user.username}</div>
      <div>Wagered:</div>
      <div class="amount">$${user.wagered}</div>
    `;
    topThreeContainer.appendChild(card);
  });

  users.slice(3, 10).forEach((user, index) => {
    const rankItem = document.createElement("div");
    rankItem.className = "rank-item";
    rankItem.innerHTML = `
      <div class="rank-left">
        <img src="logo.png" alt="Logo" />
        <span>#${index + 4} ${user.username}</span>
      </div>
      <div class="amount">$${user.wagered}</div>
    `;
    rankListContainer.appendChild(rankItem);
  });
}

document.addEventListener("DOMContentLoaded", renderLeaderboard);
