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


function answerFunction(answer) {
    theFinalAnswer = [];
    if (answer.toLocaleLowerCase() === "yes") {
        theFinalAnswer.push("Yes")
    } else if (answer.toLocaleLowerCase() === "no") {
        theFinalAnswer.push("No")

    } else {
        theFinalAnswer.push("invlid")

    }
    return theFinalAnswer;
}
let arrOfAnswers = ['Usename :' + usename, 'Gender: ' + gender,
'Age: ' + age,
'is he/she a single person? ' + answerFunction(maritalStatus),
'is he/she a jordanian citizens? ' + answerFunction(jordanianCitizens),
'is he/she have a care? ' + answerFunction(ownACar)]

for (i = 0; i < arrOfAnswers.length; i++) {

    console.log(arrOfAnswers[i]);
}


