window.onload = function () {
  document.getElementById("btnchange").onclick = function () {
    document.getElementById("myText").innerText = "Mhuaaps 💋";
  };
  document.getElementById("btnadd").onclick = function () {
    const myList = document.getElementById("myList");
    const li = document.createElement("li");
    li.innerText = "I LOVE YOU";
    myList.appendChild(li);
  };
  document.getElementById("btnremove").onclick = function () {
    const myList = document.getElementById("myList");
    myList.innerHTML = "";
  };
};

