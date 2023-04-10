let usename = prompt("Hello Dear please write your First name")
let gender = prompt("Hello " + usename + " please write your Gender its male or Female")
let age = prompt("Hello " + usename + " please write your Age")
if (age <= 0) {
    alert("You enter unvalid Age")
    let age = prompt("Hello " + usename + " please write your Age")
}

if (confirm("if you want to Skip the welcome meassge press cancel") === true) {


    if ( gender.toLocaleLowerCase() === "male") {
        alert("Hello MR " + usename + " welcome to our website")

    } else if ( gender.toLocaleLowerCase() === "female") {
        alert("Hello Ms " + usename + " welcome to our website")

    } else {
        alert("Hello  " + usename + " welcome to our website")

    }
}
