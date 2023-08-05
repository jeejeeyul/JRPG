var bg_container = document.getElementById("bg_container");
//2560x1440//전체
//160x160//타일 하나당
console.log(bg_container.offsetWidth);
for (let i = 0; i < 128; i++) {
  var tile = document.createElement("div");
  tile.style.backgroundSize = "cover";
  tile.style.backgroundRepeat = "no-repeat";
  tile.style.backgroundImage = "url(../images/grass1.png)";
  tile.style.width = "160px";
  tile.style.height = "160px";
  tile.style.position = "relative";
  tile.setAttribute("id", `tile${i}`);
  bg_container.append(tile);
}
//맵 생성에 랜덤 입히기
//맵 불러오는 기능 추가하기
//강 만들기
//타일 클릭하면 나오는 상호작용 버튼 만들기
