const correctBtn = document.querySelector(".up-down-correct");
const resetBtn = document.querySelector(".up-down-reset");
const description = document.querySelector(".up-down-description");
const hint = document.querySelector(".up-down-hint");
const updownInput = document.querySelector(".up-down-input");

let computedNumber = 0;
let count = 0;

description.textContent = "게임을 시작해보아요!";

function RandomNumber() {
  computedNumber = Math.floor(Math.random() * 100) + 1;
}

function NumberCheck() {
  const number = updownInput.value.trim();

  if (!number || number < 1 || number > 100) {
    alert("1부터 100 사이의 숫자를 맞춰보세요!");
    updownInput.value = "";
    return;
  }

  if (number > computedNumber) {
    description.textContent = "실패입니다!";
    hint.textContent = "힌트 : DOWN";
  } else if (number < computedNumber) {
    description.textContent = "실패입니다!";
    hint.textContent = "힌트 : UP";
  } else {
    description.textContent = "정답입니다!";
    hint.textContent = `${count + 1}번만에 맞추셨습니다!`;
  }

  count++;
  updownInput.value = "";
}

correctBtn.addEventListener("click", NumberCheck);

updownInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    NumberCheck();
  }
});

resetBtn.addEventListener("click", () => {
  RandomNumber();
  count = 0;
  description.textContent = "";
  hint.textContent = "";
});

RandomNumber();
