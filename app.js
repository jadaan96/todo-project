let usename = prompt("Hello Dear please write your First name")
let gender = prompt("Hello " + usename + " please write your Gender its male or Female")
let age = prompt("Hello " + usename + " please write your Age")
if (age <= 0) {
    alert("You enter unvalid Age")
    let age = prompt("Hello " + usename + " please write your Age")
}

if (confirm("if you want to Skip the welcome meassge press cancel") === true) {


    if (gender.toLocaleLowerCase() === "male") {
        alert("Hello MR " + usename + " welcome to our website")

    } else if (gender.toLocaleLowerCase() === "female") {
        alert("Hello Ms " + usename + " welcome to our website")

    } else {
        alert("Hello  " + usename + " welcome to our website")

    }
}
let maritalStatus = prompt("Are you single please answer with (Yes/No)")
let jordanianCitizens = prompt("Are you jordanian citizens please answer with (Yes/No)")
let ownACar = prompt("Are you own a car please answer with (Yes/No)")

let theFinalarray = []
function answerFunction(answer) {
    if (answer.toLocaleLowerCase() === "yes") {
        theFinalarray.push("Yes")
    } else if (answer.toLocaleLowerCase() === "no") {
        theFinalarray.push("No")

    } else {
        theFinalarray.push("Invalid")

    }
   
}
answerFunction(maritalStatus)
answerFunction(jordanianCitizens)
answerFunction(ownACar)



function consoleArray(Arr) {
    for (i = 0; i < Arr.length; i++) {

        console.log(Arr[i]);
    }
    return Arr
}
consoleArray(theFinalarray)

