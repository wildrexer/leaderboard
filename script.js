const users = [
  { username: "Marshmello", wagered: 900, logo: "logo.png" },
  { username: "User2", wagered: 500, logo: "logo.png" },
  { username: "User3", wagered: 150, logo: "logo.png" },
  { username: "User4", wagered: 75, logo: "logo.png" },
  { username: "User5", wagered: 25, logo: "logo.png" },
  { username: "User6", wagered: 0, logo: "logo.png" },
  { username: "User7", wagered: 0, logo: "logo.png" },
  { username: "User8", wagered: 0, logo: "logo.png" },
  { username: "User9", wagered: 0, logo: "logo.png" },
  { username: "User10", wagered: 0, logo: "logo.png" }
];

users.sort((a, b) => b.wagered - a.wagered);

function renderTop3() {
  const topThreeContainer = document.getElementById("top-three");
  const topThree = users.slice(0, 3);

  topThree.forEach((user, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="rank">#${index + 1}</div>
      <img src="${user.logo}" alt="logo" />
      <h2>${user.username}</h2>
      <div>Wagered:</div>
      <div class="amount">$${user.wagered}</div>
    `;
    topThreeContainer.appendChild(div);
  });
}

function renderOthers() {
  const othersContainer = document.getElementById("rank-list");
  const others = users.slice(3, 10);

  others.forEach((user, index) => {
    const row = document.createElement("div");
    row.className = "rank-row";
    row.innerHTML = `
      <div class="rank">#${index + 4}</div>
      <div class="username">
        <img src="${user.logo}" alt="logo" />
        ${user.username}
      </div>
      <div class="amount">$${user.wagered}</div>
    `;
    othersContainer.appendChild(row);
  });
}

renderTop3();
renderOthers();
