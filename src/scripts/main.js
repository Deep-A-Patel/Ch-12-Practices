//Practice: Mirror, Mirror in the Code

let inputField = document.getElementById("message")
let targetedDiv = document.getElementById("partOne")

inputField.addEventListener("keyup", function (event) {
   console.log(event.target.value)
   targetedDiv.innerHTML = event.target.value
})

let targetedDiv2 = document.getElementById("partTwo")

inputField.addEventListener("keyup", function (event) {
    console.log(event.target.value)
    targetedDiv2.innerHTML = event.target.value
})

//Practice: Scrolling and Scaling

const audrey = document.getElementById("audrey")


document.addEventListener("scroll", function (event) {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
   let y = window.scrollY
   console.log("y", y);

   let newY = (1/3)*y;
   audrey.style.width = `${newY}px`;
   audrey.style.minWidth = "50px";

   newY = (1/4)*y;
   audrey.style.height = `${newY}px`;
   audrey.style.minHeight = "100px";


    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})
 