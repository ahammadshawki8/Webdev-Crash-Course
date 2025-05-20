// Function to show an alert when called
function showAlert() {
    alert("Alert by Function Call");
}

// Get the "Click Me" button by its ID
const clickMeBtn = document.getElementById("btn-click-me");

// Assign an onclick handler to the button (this will be overwritten later)
clickMeBtn.onclick = function (event) {
    event.stopPropagation(); // Prevents event from bubbling up
    event.stopImmediatePropagation(); // Prevents other handlers of the same event
    console.log("Button Clicked");
};

// Mouse over event for the button (logs when mouse is over the button)
clickMeBtn.onmouseover = function (event) {
    console.log("Mouse Over");
}

// Get Box 1 by its ID and add a click event listener
const box1 = document.getElementById("box1");
box1.addEventListener("click", function () {
    console.log("Clicked on Box 1");
});

// Overwrite the previous onclick handler for the button
clickMeBtn.onclick = function (event) {
    event.stopPropagation();
    console.log("Another Click Event");
}

// Prevent default action for the link with ID "link"
const link = document.getElementById("link");
link.addEventListener("click", function (event) {
    event.preventDefault();
});

// Programmatically trigger a click on the button
clickMeBtn.click();

// Get Box 4 by its ID and add a click event listener for its list items
const box4 = document.getElementById("box4");
box4.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked on a List Item");
    }
});

// Select all input elements and the submit button
const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button[type=submit]");

// Listen for changes on the first input field
inputs[0].addEventListener("change", function (event) {
    console.log("Change Event on Input");
    console.log(event.target.value);
})

// Prevent form submission when submit button is clicked
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
});

// Validate input fields on submit button click and log their values
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (inputs[0].value === "" || inputs[1].value === "") {
        alert("Input Field cannot be Empty!");
    } else {
        var input0Data = inputs[0].value;
        var input1Data = inputs[1].value;
        console.log("Your Name:", input0Data, "And Your Email:", input1Data);
    }
}
);

// Listen for any key down event on the document
document.addEventListener("keydown", function (event) {
    console.log("Key Down Event");
    console.log("Pressed Key: " + event.key);
    console.dir(event);
}
);

// Listen for any key press event on the document
document.addEventListener("keypress", function (event) {
    console.log("Key Press Event");
    console.log("Pressed Key: " + event.key);
    console.dir(event);
}
);

// Listen for any key up event on the document
document.addEventListener("keyup", function (event) {
    console.log("Key Up Event");
    console.log("Pressed Key: " + event.key);
    console.dir(event);
}
);

// Add mouseover event listener to the button (logs when mouse is over)
clickMeBtn.addEventListener("mouseover", function (event) {
    console.log("Mouse Over");
}
);

// Add mouseout event listener to the button (logs when mouse leaves)
clickMeBtn.addEventListener("mouseout", function (event) {
    console.log("Mouse Out");
}
);

// Log when the window has fully loaded (including images, etc.)
window.addEventListener("load", function () {
    console.log("Window Loaded");
}
);

// Log when the DOM is fully loaded and parsed (without waiting for images)
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Fully Loaded");
}
);

// Select two images by their alt attributes
var img1 = document.querySelector('img[alt=valid-img]');
var img2 = document.querySelector('img[alt=invalid-img]');

// Log when the first image loads successfully
img1.addEventListener('load', function() {
    console.log('Image 1 Has Successfully Loaded!');
});

// Log an error if the second image fails to load
img2.addEventListener('error', function(event) {
    console.log('Image Cannot be loaded!');
});