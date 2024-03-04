const tournamentsData = [
        { game: 'CSGO', team1: 'Vitality', team2: 'G2 Esports', date: '04-03-2024', result: '2-0' },
        { game: 'LoL', team1: 'Karmin Corp', team2: 'LDLC OL', date: '02-03-224', result: '2-1' },
        { game: 'Valorant', team1: 'Gentle Mates', team2: 'Karmin Corp', date: '01-03-2024', result: '1-5' },
        { game: 'Rocket League', team1: 'Vitality', team2: 'Team BDS', date: '24-02-2024', result: '2-1' },
        { game: 'Rainbow Six Siege', team1: 'Loup Esports', team2: 'Team BDS', date: '22-02-2024', result: '3-2' },
        { game: 'FIFA', team1: 'Chocolatine', team2: 'Pain au chocolat', date: '20-02-2024', result: '0-5' },
];

function displayTournaments(tournaments) {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = '';

    tournaments.forEach(tournament => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <p><strong>Jeu:</strong> ${tournament.game}</p>
            <p><strong>Équipe 1:</strong> ${tournament.team1}</p>
            <p><strong>Équipe 2:</strong> ${tournament.team2}</p>
            <p><strong>Date:</strong> ${tournament.date}</p>
            <p><strong>Résultat:</strong> ${tournament.result}</p>
        `;
        contentSection.appendChild(card);
    });
}

function filterTournaments() {
    const selectedGame = document.getElementById('game-filter').value;
    const teamQuery = document.getElementById('team-filter').value.trim().toLowerCase();

    const filteredTournaments = tournamentsData.filter(tournament => {
        return (tournament.game === selectedGame || selectedGame === 'Tous') &&
            (tournament.team1.toLowerCase().includes(teamQuery) || tournament.team2.toLowerCase().includes(teamQuery));
    });

    displayTournaments(filteredTournaments);
}

document.getElementById('game-filter').addEventListener('change', filterTournaments);
document.getElementById('team-filter').addEventListener('input', filterTournaments);

displayTournaments(tournamentsData);