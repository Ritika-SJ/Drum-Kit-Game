

for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ // here we are adding the ael to the buttons becauese we want the ael to be trigggered when the button is been clicked.
        var buttonInnerHTML=this.innerHTML;                                    // when we add a event a event that is here the document.querySelectorAll(".drum") it will be waiting for the event to be pressed(occured) and
                                                                               // it listens and performs the task that is the function.
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress",function(event){ //addeventlistener will be waiting for the keyboard press to get triggered. we shoul add the addeventlistener to something to get triggered. so in the 
    makeSound(event.key);      
    buttonAnimation(event.key);                       // here we are adding the ael to the document so that the entire webage (document) will be waiting for a keypress.  here the whole document will be listenung for the key press                       
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2= new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4= new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare= new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick= new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

            default:
                console.log(key);
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}



