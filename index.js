let count = 0
let countId = document.getElementById("count-el")
let saveId = document.getElementById("save-el")

function increment(){
    count += 1
    countId.textContent = count
    console.log(count)
}

function save(){
    let rem = count + " - "
    saveId.textContent += rem
    countId.textContent = 0
    count = 0
}

function reset(){
    saveId.textContent = ""
}