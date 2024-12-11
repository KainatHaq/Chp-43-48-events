//EVENTS 
// Q#1. Show an alert box on click on a link.
document.getElementById("alertLink").addEventListener("click", function(event) {
    event.preventDefault(); 
    alert("Link was clicked!");
});

// Q#2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
document.getElementById("mobileImage1").addEventListener("click", function() {
    alert("You clicked on Mobile 1!");
});

document.getElementById("mobileImage2").addEventListener("click", function() {
    alert("You clicked on Mobile 2!");
});

document.getElementById("mobileImage3").addEventListener("click", function() {
    alert("You clicked on Mobile 3!");
});


// 3. Display 10 student records in a table and each row should contain a delete button.
document.querySelector("tbody").addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("deleteBtn")) {
        let row = event.target.closest("tr");
        row.remove(); 
    }
});


//Q#4. Display an image in the browser. Change the picture on mouseover and set the first picture on mouseout.
let images = document.querySelectorAll(".image");


images.forEach(function(image) {
    image.addEventListener("mouseover", function() {
       
        if (image.src.includes("td1.webp")) {
            image.src = "td2.jpg"; 
        } else if (image.src.includes("image2.webp")) {
            image.src = "td1.webp";
        }
    });

    image.addEventListener("mouseout", function() {
        // Revert back to original image on mouseout
        if (image.src.includes("td1.webp")) {
            image.src = "td2.jpg";
        } else {
            image.src = "td1.webp"; 
        }
    });
});

// Q#5. Show a counter in the browser. Counter should increase on click on increase button and decrease on click on decrease button.

let counter = 0;

let counterValue = document.getElementById("counter-value");
let increaseButton = document.getElementById("increase-btn");
let decreaseButton = document.getElementById("decrease-btn");
let resetButton = document.getElementById("reset-btn");

function updateCounter() {
    counterValue.textContent = counter;
}

increaseButton.addEventListener("click", function() {
    counter++; 
    updateCounter(); 
});


decreaseButton.addEventListener("click", function() {
    counter--;
    updateCounter(); 
});


resetButton.addEventListener("click", function() {
    counter = 0; 
    updateCounter(); 
});

