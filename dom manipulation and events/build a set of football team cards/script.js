const footballTeam = {
    team: "Manchester United",
    year: 2024,
    headCoach: "Erik ten Hag",
    players: [
        {
            name: "Bruno Fernandes",
            position: "midfielder",
            isCaptain: true,
        },
        {
            name: "Marcus Rashford",
            position: "forward",
            isCaptain: false,
        },
        {
            name: "Raphael Varane",
            position: "defender",
            isCaptain: false,
        },
        {
            name: "Andre Onana",
            position: "goalkeeper",
            isCaptain: false,
        },
        {
            name: "Casemiro",
            position: "midfielder",
            isCaptain: false,
        },
        {
            name: "Rasmus Hojlund",
            position: "forward",
            isCaptain: false,
        },
    ],
};

// Menampilkan info utama tim ke halaman
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

const playerCardsContainer = document.getElementById("player-cards");
const positionFilter = document.getElementById("players");

const renderPlayerCards = (position = "all") => {
    playerCardsContainer.innerHTML = "";

    let filteredPlayers;

    if (position === "forward") {
        filteredPlayers = footballTeam.players.filter((player) => player.position === "forward");
    } else if (position === "midfielder") {
        filteredPlayers = footballTeam.players.filter((player) => player.position === "midfielder");
    } else if (position === "defender") {
        filteredPlayers = footballTeam.players.filter((player) => player.position === "defender");
    } else if (position === "goalkeeper") {
        filteredPlayers = footballTeam.players.filter((player) => player.position === "goalkeeper");
    } else {
        filteredPlayers = footballTeam.players;
    }


    filteredPlayers.forEach((player) => {
        playerCardsContainer.innerHTML += `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `;
    });
};


positionFilter.addEventListener("change", (event) => {
    renderPlayerCards(event.target.value);
});


renderPlayerCards();