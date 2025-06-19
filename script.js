const users = [
  {
    username: "Marshmello",
    wagered: 900,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "2",
    wagered: 500,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "3",
    wagered: 150,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "4",
    wagered: 75,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "5",
    wagered: 25,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  {
    username: "6",
    wagered: 0,
    avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111"
  },
  { username: "7", wagered: 0, avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111" },
  { username: "8", wagered: 0, avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111" },
  { username: "9", wagered: 0, avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111" },
  { username: "10", wagered: 0, avatar: "https://ik.imagekit.io/marshmello/bet%2020%20(1).png?updatedAt=1750327077111" }
];

function renderLeaderboard() {
  const topContainer = document.getElementById("top3");
  const rowsContainer = document.getElementById("remaining");

  topContainer.innerHTML = "";
  rowsContainer.innerHTML = "";

  users.forEach((user, index) => {
    if (index < 3) {
      // Top 3 cards
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="rank">#${index + 1}</div>
        <img src="${user.avatar}" alt="avatar" />
        <h3>${user.username || "—"}</h3>
        <div>Wagered:</div>
        <div class="amount">$${user.wagered}</div>
      `;
      topContainer.appendChild(card);
    } else {
      // Normal rows
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `
        <div class="rank">#${index + 1}</div>
        <div class="name">
          <img src="${user.avatar}" alt="avatar" />
          ${user.username || "—"}
        </div>
        <div class="amount">$${user.wagered}</div>
      `;
      rowsContainer.appendChild(row);
    }
  });
}

window.addEventListener("load", renderLeaderboard);
