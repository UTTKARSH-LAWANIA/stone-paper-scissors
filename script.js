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

const draw = (userchoice) => {
    console.log("game was draw.");
    msg.innerText = "Game was a draw 🤝 Play again";
    msg.style.backgroundColor = "#081b31";

    animateChoice(userchoice, "draw");
};


const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        user++;
        userscore.innerText = user;
        msg.innerText = `You win! 🎉 Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

        animateChoice(userchoice, "win");
    } 
    else {
        comp++;
        compscore.innerText = comp;
        msg.innerText = `You lose 😢 ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

        animateChoice(userchoice, "lose");
    }
};


const playgame = (userchoice) =>{
    console.log("user choice=",userchoice);
    const compchoice = gencomputerchoice();
    console.log("comp choice=",compchoice);

    if(userchoice === compchoice){
        draw(userchoice);
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

const animateChoice = (choice, result) => {
    const choiceDiv = document.getElementById(choice);

    choiceDiv.classList.remove("win", "lose", "draw");
    msg.classList.remove("msg-animate");

    void choiceDiv.offsetWidth;
    void msg.offsetWidth;

    choiceDiv.classList.add(result);
    msg.classList.add("msg-animate");
};