$(document).ready(function(){

let layer1 = document.querySelector(`div.layer1`)
let layer2 = document.querySelector(`div.layer2`)
let layer3 = document.querySelector(`div.layer3`)
let startScreenTag = document.querySelector(`.start-screen`)
let startButtonTag =document.querySelector(`.start-screen button`) 

let bellSound = document.getElementById(`bell`)
let music1 = document.getElementById(`music1`)

let introTag = document.getElementById(`intro`)
let outroTag = document.getElementById(`outro`)


let timeLeft = true
let layer1On = true

//Set position of text block based on window height on load
// let windowHeight = $(window).height()
// console.log(`window height is ${windowHeight}`)
// let textTop = windowHeight 
// let textHeight = $(".text").height()
// console.log(`text height is ${textHeight}`)
// console.log(`Text top is ${textTop}`)
// $(".text").css("top", `+=${textTop}`)
// console.log("Text top position is " + $(".text").offset().top)

//LAYER 1 INITIAL SETUP
let layer1h1 = Math.random() * 360

//Find a random number between 50 and 100
let layer1s1 = 50 + Math.random() * 50

//Find a random number between 40 and 90
let layer1l1 = 40 + Math.random() * 50

let layer1c1 = `hsl(${layer1h1}, ${layer1s1}%, ${layer1l1}%)` //The ${} notation tells JS you are using a variable and not a string. This works with the backtick marks

//Find a random number between 0 and 360
let layer1h2 = Math.random() * 360

//Find a random number between 50 and 100
let layer1s2 = 50 + Math.random() * 50

//Find a random number between 40 and 90
let layer1l2 = 40 + Math.random() * 50

let layer1c2 = `hsl(${layer1h2}, ${layer1s2}%, ${layer1l2}%)` //The ${} notation tells JS you are using a variable and not a string. This works with the backtick marks


//Set bg for layer 1
  let layer1angle = Math.random() * 360
//   layer1.style.backgroundImage = `linear-gradient(${layer1angle}deg, ${layer1c1}, ${layer1c2})`

layer1.style.backgroundImage = `radial-gradient(circle at center, ${layer1c1} 0%, ${layer1c2} 100%)`
    console.log("Original layer 1 c1, c2, angle is" + layer1c1 + "," + layer1c2 + "," + layer1angle)

//LAYER 2 INITIAL SETUP
let layer2h1 = Math.random() * 360

//Find a random number between 50 and 100
let layer2s1 = 50 + Math.random() * 50

//Find a random number between 40 and 90
let layer2l1 = 40 + Math.random() * 50

let layer2c1 = `hsl(${layer2h1}, ${layer2s1}%, ${layer2l1}%)` //The ${} notation tells JS you are using a variable and not a string. This works with the backtick marks

//Find a random number between 0 and 360
let layer2h2 = Math.random() * 360

//Find a random number between 50 and 100
let layer2s2 = 50 + Math.random() * 50

//Find a random number between 40 and 90
let layer2l2 = 40 + Math.random() * 50

let layer2c2 = `hsl(${layer2h2}, ${layer2s2}%, ${layer2l2}%)` //The ${} notation tells JS you are using a variable and not a string. This works with the backtick marks


//Set bg for layer 2
  let layer2angle = Math.random() * 360
  layer2.style.backgroundImage = `linear-gradient(${layer2angle}deg, ${layer2c1}, ${layer2c2})`
    console.log("Original layer 2 c1, c2, angle is" + layer2c1 + "," + layer2c2 + "," + layer2angle)

let shiftBg 

function bgChange(){
    shiftBg = setInterval(function(){

  if(layer1On == true){
        //Layer 2 Color 1
    if(layer2h1<=360){
        layer2h1 += Math.random()*10
    }else{
        layer2h1 = Math.random()*5
    }

    if(layer2s1<=100){
       layer2s1 += Math.random()*10
    }else{
        layer2s1 =  50 + Math.random() * 50
    }            

    layer2c1 = `hsl(${layer2h1}, ${layer2s1}%, ${layer2l1}%)`
    
      //Layer 2 Color 2
    
    if(layer2h2<=360){
        layer2h2 += Math.random()*10
    }else{
        layer2h2 = Math.random()*5
    }

    if(layer2s2<=100){
       layer2s2 += Math.random()*10
    }else{
        layer2s2 =  50 + Math.random() * 50
    }            

    layer2c2 = `hsl(${layer2h2}, ${layer2s2}%, ${layer2l2}%)`

    if(layer2angle<=360){
        layer2angle += Math.random()*10
    }else{
        layer2angle = Math.random()*360
    }
    
    layer2.style.backgroundImage = `linear-gradient(${layer2angle}deg, ${layer2c1}, ${layer2c2})`  
    // layer2.style.backgroundImage = `radial-gradient(circle at center, ${layer2c1} 0%, ${layerc2} 100%)`


        layer1.style.opacity = .3
        layer2.style.opacity = .7
        layer1On = false

    console.log("Updated layer 2 c1, c2, angle is" + layer2c1 + "," + layer2c2 + "," + layer2angle)
  
      
    }else{    
    //Layer 1 Color 1

    if(layer1h1<=360){
        layer1h1 += Math.random()*10
    }else{
        layer1h1 = Math.random()*5
    }
    //    layer1s1 =   50 + Math.random() * 50

    if(layer1s1<=100){
       layer1s1 += Math.random()*10
    }else{
        layer1s1 =  50 + Math.random() * 50
    }            

    layer1c1 = `hsl(${layer1h1}, ${layer1s1}%, ${layer1l1}%)`

    
      //Layer 1 Color 2
    
    if(layer1h2<=360){
        layer1h2 += Math.random()*10
    }else{
        layer1h2 = Math.random()*5
    }
    //    layer1s1 =   50 + Math.random() * 50

    if(layer1s2<=100){
       layer1s2 += Math.random()*10
    }else{
        layer1s2 =  50 + Math.random() * 50
    }            

    layer1c2 = `hsl(${layer1h2}, ${layer1s2}%, ${layer1l2}%)`

    if(layer1angle<=360){
        layer1angle += Math.random()*10
    }else{
        layer1angle = Math.random()*360
    }
    //GIBLET
    layer1.style.backgroundImage = `radial-gradient(circle at center, ${layer1c1} 0%, ${layer1c2} 100%)`
    
    layer1.style.opacity = .7
    layer2.style.opacity = .3
    layer1On = true
        
    console.log("Updated layer 1 c1, c2, angle is" + layer1c1 + "," + layer1c2 + "," + layer1angle)
    
    }//End layer 1 else statement   
    

}, 3000)}//End bgChange function
  
function stopBgChange(){
    clearInterval(shiftBg)
    console.log("bgchange stopped")
}


//Clear start screen when user clicks start
// startButtonTag.addEventListener("click", function(){
// })//End start button click
    // startScreenTag.style.opacity = 0;
    // bellSound.play()
    bgChange()

    // $(".start-screen").addClass("fade")
    // $(".start-screen").animate({opacity: 0}, 3000)
    $(".text").delay(1000).animate({opacity: 1}, 3000)

    // textHeight = $(".text").height()
    // textTop = (textHeight * -1) - 40
    // console.log("text top " + `${textTop}`)
    // windowHeight = $(window).height()


    // $(".text").animate({
    //    top: textTop, easing: "linear"},50000,function(){
    //     bellSound.play()
    //     $(".last-section").animate({opacity: 1}, 3000)

    //     //Set position of text on load
    //     windowHeight = $(window).height()
    //     // $(".text").css("top", `+=${windowHeight}`)
    // }); //End animate


})//End Document Ready Function