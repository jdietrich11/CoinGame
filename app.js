function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

let score = 0;
let highScore = 0;
const avatar = document.querySelector(`#player`);
const coin = document.querySelector(`#coin`);
let currScore = document.querySelector(`.scoreLabel`);
const page = document.querySelector(`.page`);

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown" || e.code === "KeyS") {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop + 50}px`;
  } else if (e.key === "ArrowUp" || e.code === "KeyW") {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop - 50}px`;
  } else if (e.key === `ArrowLeft` || e.code === "KeyA") {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft - 50}px`;
    avatar.classList.add(`goLeft`);
  } else if (e.key === `ArrowRight` || e.code === `KeyD`) {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft + 50}px`;
    avatar.classList.add(`goRight`);
  }
  if (isTouching(avatar, coin)) scoreUp();
  if (isTouching(avatar, coin)) moveCoin();
});

const extractPos = (pos) => {
  if (!pos) return 0;
  return parseInt(pos.slice(0, -2));
};

const scoreUp = () => {
  if (score === 69) {
    alert("ha...ha.... nice 😉");
  }
  clearScore = document.querySelector(
    `.scoreLabel`
  ).innerHTML = `SCORE: ${score}`;
  let newScore = score + 1;
  score = newScore;
};

const moveCoin = () => {
  const y = Math.floor(Math.random() * window.innerHeight);
  const x = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

const updateScore = (document.querySelector(
  `.scoreLabel`
).innerHTML = `SCORE: ${score}`);

moveCoin();
