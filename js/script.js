            
            let score =0;
         
            let playerSelection;
          

             function computerPlay(){
                //randomly return either rock, paper, or scissors
                let rand= Math.floor(Math.random() *3);
                
                if(rand === 2){
                    console.log("CPU: rock");
                    computerSelection="rock";
                    return computerSelection;
                    
                } else if(rand==1){
                    console.log("CPU: paper");
                    computerSelection="paper";
                    return computerSelection;
                    
                    
                }else {
                    console.log("CPU: Scissors");
                    computerSelection="scissors";
                    return computerSelection;
                    
                    
                }
            }

            function playRound(playerSelection, computerSelection,) {
                
                if (playerSelection == "rock") {
                    if(computerSelection == "paper"){
                        console.log("You lose! Paper beats rock!");
                        
                    }else if(computerSelection=="scissors"){
                        console.log("You win!");
                        score++;
                    }
                }
                if(playerSelection == "paper"){
                    if(computerSelection =="rock"){
                        console.log("You win!");
                        score++;
                    }else if(computerSelection=="scissors"){
                        console.log("You lose! Scissors beat paper!")
                        
                    }
                }
                if(playerSelection =="scissors"){
                    if(computerSelection == "rock"){
                        console.log("You lose! Rock beats scissors");
                        
                    }else if(computerSelection =="paper"){
                        console.log("You win! Scissors beat paper!");
                        score++;
                    }
                } if(computerSelection==playerSelection){
                        console.log("DRAW!");
                }
            console.log(score);    
            }

            

           

           




const buttons = document.querySelectorAll('button');

//iterate through each function 
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection=e.target.value;
   console.log(playerSelection);
   let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
})
})
;

//assign the button value to the player selection 
function selectButton(e){
   playerSelection=e.target.value;
   console.log(playerSelection);
  
};
