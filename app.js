document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("addBtn");
  const nameInput = document.getElementById("nameInput");
  const actorList = document.getElementById("actorList");

  addBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();
    if (name === "") {
      alert("請輸入女優名稱");
      return;
    }

    const li = document.createElement("li");
    li.textContent = name;
    actorList.appendChild(li);
    nameInput.value = "";
  });
});
