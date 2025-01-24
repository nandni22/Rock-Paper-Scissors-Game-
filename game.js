let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".option");
const result =document.querySelector("#result");

const user_sc =document.querySelector("#user-sc");
const comp_sc =document.querySelector("#camp-sc");

const rock1 = document.querySelector(".rock1");


let gencompChoice = () => {
    const option =["rock","paper","scissors"];
    const math =Math.floor(Math.random() * 3);
    return option[math];
    // const rock_op =["rock1","rock2","rock3"];

}
const showWinner = (userWin) => { 
    if(userWin){
        userScore++;
        user_sc.innerText = userScore;
        // console.log("you win! ");
        result.innerText = "you win! ";
        result.style.backgroundColor="green";
        
    }else{
        compScore++;
        comp_sc.innerText=compScore;
        // console.log(" you lose");
        result.innerText = "you lose";
        result.style.backgroundColor="red";
    }
};

const show_comp =(comp) => {
  if(comp === "rock"){
    rock1.style.backgroundImage="url('rock.png')";
    rock1.style.backgroundSize="cover";
  }else if(comp === "paper"){
    rock1.style.backgroundImage="url('paper.png')"; 
    rock1.style.backgroundSize="cover";
  }else{
    rock1.style.backgroundImage="url('scissor.png')"; 
    rock1.style.backgroundSize="cover";
  }
  

  };

 

const playGame = (you) => {
   
    // console.log("you choice=",you);
    const comp = gencompChoice();
    show_comp(comp);



    // console.log("comp choice ="); 
    const userWin = true;
    if( you === comp){
        // console.log("drow game");
        result.innerText = "game has been draw";
        result.style.backgroundColor="black";
    }else{
       let userWin = true;
       if(you === "rock"){
        // scissor,paper
        userWin = comp === "paper" ? false : true;
       } else if(you==="paper"){
       //rock,scissor 
       userWin = comp ==="scissors" ? false : true ;
       }else{
        // rock,paper
        userWin = comp === "rock" ? false : true;
       }
       showWinner(userWin);
    }

    };
choices.forEach((option) => {
    // console.log(option);
    option.addEventListener ("click",() => {
    // const choiceId = choice.getAttribute("id");
    const you = option.getAttribute("id");
    playGame(you);
   
    });
});