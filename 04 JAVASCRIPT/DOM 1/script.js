// Selecting elements in the DOM

// Selecting elements by ID
var box1 = document.querySelector("#box1");
console.dir(box1);

var box2 = document.getElementById("box2");
console.dir(box2);

// Selecting elements by class name
var allBoxesNodeList = document.querySelectorAll(".box");
var allBoxesArray = Array.from(allBoxesNodeList);
console.dir(allBoxesArray);

var allBoxesNodeList2 = document.getElementsByClassName("box");
var allBoxesArray2 = Array.from(allBoxesNodeList2);
console.dir(allBoxesArray2);

// Selecting elements by tag name
console.dir(document.querySelector("div"));;
console.dir(document.querySelectorAll("h4, p, ul"));;
console.dir(document.getElementsByTagName("h4"));;

// Selecting elements by attribute
console.dir(document.querySelector('[data-atr="box1"]'));
console.dir(document.querySelectorAll('[data-atr="box1"], [id="box2"]'));

// Selecting elements by pseudo-class
console.dir(document.querySelectorAll("li:first-child"));
console.dir(document.querySelectorAll("li:first-child, li:last-child"));

// Selecting Children elements
console.dir(document.getElementById("box3").children);
console.dir(document.getElementById("box3").childNodes);
console.dir((document.getElementById("box3").children)[2].children);

// Selecting Parent elements
console.dir(document.getElementById("box3").parentNode);
console.dir(document.getElementById("box3").parentNode.parentNode);

// Selecting Direct Children elements
console.dir(document.querySelectorAll("#box3 > strong"));

// Selecting all but not
console.dir(document.querySelectorAll(".box:not(.box3)"));

console.dir(document.querySelectorAll("#box3 h4, #box4 li"));



// Editing elements in the DOM
var selectABox = document.querySelector("#box1");
console.dir(selectABox);

document.createElement("h4");
var newElement = document.createElement("h4");
var name = "Shawki";
// newElement.innerText = "Hello " + name;
newElement.innerHTML = "<strong> Hello " + name + " </strong>";
newElement.classList.add("new-element");
newElement.className += " new-element2";
newElement.setAttribute("data-atr", "new-element");
newElement.setAttribute("id", "new-element");

console.dir(newElement);
console.dir(newElement.classList);

newElement.classList.remove("new-element2");
console.dir(newElement.classList);
newElement.className.replace(/new-element/, "");
console.dir(newElement.classList);

newElement.removeAttribute("data-atr");

console.dir(newElement.style);
newElement.style.backgroundColor = "#000";
newElement.style.color = "#fff";
newElement.style.textAlign= "center";
// newDiv.style.textAlign = '';
console.log(newElement);

var box1 = document.querySelector("#box1");
box1.insertAdjacentElement("afterbegin", newElement);
box1.appendChild(box2);

box1.insertBefore(box2, newElement);

newElement.previousSibling.remove();
console.dir(box1.childNodes);
box1.childNodes[2].remove();

document.querySelector("#box1").remove();