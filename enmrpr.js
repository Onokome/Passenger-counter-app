let counting = document.getElementById("counting")
let count = 0
let saveEl = document.getElementById("save-el")

function increase(){
    count = count + 1
    counting.innerText = count

}

function save(){
    let countSeparator = count + " - "
    saveEl.textContent += countSeparator
    counting.innerText = 0
    count = 0
}



let speech = document.getElementById("welcome")
speech.innerText = "Welcome back to my page!"

speech.innerText += "😊"


// 1. Grab the save-el paragrah and store it in a variable called saveEl




    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph






