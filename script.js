function setMood(mood) {
    const display = document.getElementById("emojiDisplay");
    const text = document.getElementById("responseText");

    // Reset animation
    display.className = "";

    if (mood === "happy") {
        display.textContent = "😊";
        text.textContent = "WAIT...IS THAT A YES?!!!😍❤️";
        display.classList.add("bounce");
    }

    else if (mood === "sad") {
        display.textContent = "😢";
        text.textContent = "Oh no...It's heartbreaking 💔";
        display.classList.add("pulse");
    }

    else if (mood === "angry") {
        display.textContent = "😡";
        text.textContent = "Uh oh... I might be in trouble 😬";
        display.classList.add("shake");
    }

    else if (mood === "surprised") {
        display.textContent = "😲";
        text.textContent = "Ooohh ....didn't expect that,huh?😌 ";
        display.classList.add("spin");
    }
}
