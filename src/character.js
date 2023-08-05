var character = document.getElementById("character");
var bag = document.getElementById("bag");
character.style.left = "1200px";
character.style.top = "500px";

window.addEventListener("keydown", function (e) {
  if (
    e.key == "ArrowRight" &&
    Number(character.style.left.slice(0, -2)) + 110 < document.body.offsetWidth
  ) {
    character.style.left = `${
      Number(character.style.left.slice(0, -2)) + 10
    }px`;
  }
  if (e.key == "ArrowLeft" && Number(character.style.left.slice(0, -2)) > 0) {
    character.style.left = `${
      Number(character.style.left.slice(0, -2)) - 10
    }px`;
  }
  if (e.key == "ArrowUp" && Number(character.style.top.slice(0, -2)) > 0) {
    character.style.top = `${Number(character.style.top.slice(0, -2)) - 10}px`;
  }
  if (
    e.key == "ArrowDown" &&
    Number(character.style.top.slice(0, -2)) + 110 < document.body.offsetHeight
  ) {
    character.style.top = `${Number(character.style.top.slice(0, -2)) + 10}px`;
  }
});
//top이 캐릭터 위부터가 기준?인듯&left는 왼쪽이 기준임/ex)) 위에 코드에서 +110 넣어놓은 게 기준이 갈려서 그럼

window.addEventListener("click", function () {
  //캐릭터 애니메이션 들어갈 자리
});

//키할당
window.addEventListener("keypress", function (e) {
  if (e.key == "b") {
    if (bag.style.visibility == "visible") {
      bag.style.visibility = "hidden";
    } else {
      bag.style.visibility = "visible";
    }
  }
});
