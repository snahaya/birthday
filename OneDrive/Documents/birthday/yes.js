const message = "My Dearest Shri, you mean the world to me. Since the day I met you, I can say I have thought about you almost everyday. My love for you grows deeper with each passing moment, and with all my heart, I cherish every bit of who you are.I promise to stand by you through every high and low. You have become an integral part of my life since last December, and it feels like we were destined to meet. Though I may not believe in God, the day we first held hands in that temple felt like a divine moment, as if the universe itself connected us in a bond. As you celebrate your special day, I want you to know how deeply you are loved and appreciated. You have brought so much happiness into my life, and I look forward to creating countless more memories with you. With all my love,Sneha ❤️ p.s~ I am sorry I forgot your birthday, I have no excuse for that, but since you are reading my letter, I guess you had to forgive me hihihihi. I wolf you ❤️";

let i = 0;

function typeMessage() {
    if (i < message.length) {
        document.getElementById("scroll-message").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeMessage, 100); // Adjust speed here (in milliseconds)
    }
}

window.onload = typeMessage;
