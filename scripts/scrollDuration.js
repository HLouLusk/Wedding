const tickerElement1 = document.getElementById("ticker-content-1");
const tickerElement2 = document.getElementById("ticker-content-2");
const tickerText = tickerElement1.innerText;
const textLength = tickerText.length;
const charactersPerSecond = 10;

const animationDuration = textLength / charactersPerSecond;

tickerElement1.style.animationDuration = animationDuration + "s";
tickerElement2.style.animationDuration = animationDuration + "s";
