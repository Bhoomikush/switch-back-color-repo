function favcolor(){
    console.log("blue")
    console.log("pink")
}

favcolor()
//-----------simple paramter funciton---------------//
function add(a,b){
    return a+b
   
}
const result=add(2,3)
console.log(result)

//-----------------User input function------------------//
function loginusermessage(name){
    if(!name){
        console.log("Please enter name.")
    }
    console.log(`${name} just logged in.`)
}
console.log(loginusermessage("Bhoomi"))
