let usename =prompt("Hello Dear please write your First name")
let gender = prompt("Hello "+usename +" please write your Gender its male or Female")
let age = prompt("Hello "+usename +" please write your Age")
if (age<=0 ){
    alert( "You enter unvalid Age")
    let age = prompt("Hello "+usename +" please write your Age")} 
    let welcome = confirm("if you want to Skip the welcome meassge press cancel")
    if (welcome === true && gender === "male"){
        let mr = prompt("Hello MR "+usename +" welcome to our website")

    } else if ( welcome === true && gender.toLocaleLowerCase() === "female"){
        let ms = prompt("Hello Ms "+usename +" welcome to our website")

    } else {
        let non = prompt("Hello  "+usename +" welcome to our website")

    }
     