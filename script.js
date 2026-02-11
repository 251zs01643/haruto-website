function changeMessage() {
    const messages = [
        "継続は力なり。",
        "五十歩百歩",
        "挑戦することを忘れない。",
        "今日の晩御飯はカレーです。"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("dailyMessage").textContent = messages[randomIndex];
}
