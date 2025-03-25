document.addEventListener("DOMContentLoaded", function () {
    const achievements = [
        { img: "mlbb/champ/1.jpg", title: "ML Tournament Champion" },  { img: "mlbb/champ/2.jpg", title: "ML Tournament Champion" }, { img: "mlbb/champ/3.jpg", title: "ML Tournament Champion" },
        { img: "mlbb/champ/4.jpg", title: "ML Tournament Champion" },  { img: "mlbb/champ/5.jpg", title: "ML Tournament Champion" }, { img: "mlbb/champ/6.jpg", title: "ML Tournament Champion" },
        { img: "mlbb/champ/7.jpg", title: "ML Tournament Champion" },  { img: "mlbb/champ/8.jpg", title: "ML Tournament Champion" }, { img: "mlbb/champ/9.jpg", title: "ML Tournament Champion" },
      
    ];

    const container = document.getElementById("achievements-container");

    achievements.forEach(achievement => {
        const achievementDiv = document.createElement("div");
        achievementDiv.className = "neon-border p-6 rounded-lg text-center game-highlight";

        achievementDiv.innerHTML = `
            <img src="${achievement.img}" alt="${achievement.title}" class="mb-4 mx-auto rounded-lg">
            <h3 class="text-2xl mb-4 neon-text">${achievement.title}</h3>
        `;

        container.appendChild(achievementDiv);
    });
});
