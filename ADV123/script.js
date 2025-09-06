window.onload = function () {
  // Change the paragraph text
  document.getElementById("btnchange").onclick = function () {
    document.getElementById("myText").innerText = "Mhuaaps 💋";
  };

  // Add new hobby list item
  document.getElementById("btnadd").onclick = function () {
    const myList = document.getElementById("myList");
    const li = document.createElement("li");
    li.innerText = "I LOVE YOU";
    myList.appendChild(li);
  };

  // Remove all list items
  document.getElementById("btnremove").onclick = function () {
    const myList = document.getElementById("myList");
    myList.innerHTML = "";
  };
};
