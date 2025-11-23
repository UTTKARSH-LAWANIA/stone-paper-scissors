let user=0;
let comp=0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg")

const userscore= document.querySelector("#user");
const compscore= document.querySelector("#comp");

const gencomputerchoice = () =>{
    let option = ["rock","paper","scissors"];
    const randidx=Math.floor(Math.random() * 3);
    return option[randidx];
}

const draw = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw play again";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        user++;
        userscore.innerText = user;
        console.log("you win!");
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }else{
        comp++;
        compscore.innerText = comp;
        console.log("you lose");
        msg.innerText = `you lose.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playgame = (userchoice) =>{
    console.log("user choice=",userchoice);
    const compchoice = gencomputerchoice();
    console.log("comp choice=",compchoice);

    if(userchoice === compchoice){
        draw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice == "paper" ? false:true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissors"? false:true;
        }else{
            userwin = compchoice === "rock" ? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choices)=>{
    choices.addEventListener(("click"), () =>{
    const userchoice=choices.getAttribute("id");
    playgame(userchoice);
    });
});