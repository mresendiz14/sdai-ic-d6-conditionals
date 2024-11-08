// all code for this lab to be completed in this file
const currentTemperature = 31
//two possibilites: it's freezing or it's not 
if (currentTemperature <= 32) {
    console.log("It's freezing!")
} else {
    console.log("It's not freezing, yay!")
}

//Challenge #2
let age1 = 21 
let age2 = "21"

//3 possibilites: older, younger, or the same age 
// if ... else statement

if (age1 > age2) { //older
    console.log("Milleneal")
} else if (age1 < age2) { //younger
    console.log("Gen z")
} else if (age1 === age2) {
    console.log("Twinsies!")
} else { //captures errors
    console.log("Uh-oh! Error. Try again!")

}
