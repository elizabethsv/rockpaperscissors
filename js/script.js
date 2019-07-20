            
            let score =0;
         
            let playerSelection;
            
            

             function computerPlay(){
                let rand= Math.floor(Math.random() *3);
                let computerChoiceSpan = document.getElementById("computer");
                if(rand === 2){
                    computerChoiceSpan.innerHTML = "CPU: rock";
                    computerSelection="rock";
                    return computerSelection;
                    
                } else if(rand==1){
                    computerChoiceSpan.innerHTML ="CPU: paper";
                    computerSelection="paper";
                    return computerSelection;
                    
                    
                }else {
                    computerChoiceSpan.innerHTML = "CPU: Scissors";
                    computerSelection="scissors";
                    return computerSelection;
                    
                    
                }
            }

            let results = document.getElementById("results")
            

            function playRound(playerSelection, computerSelection,) {
                
                if (playerSelection == "rock") {
                    if(computerSelection == "paper"){
                        results.innerHTML = "You lose! Paper beats Rock!";
                       
                        
                    }else if(computerSelection=="scissors"){
                        results.innerHTML = "You win!"
                        
                        score++;
                    }
                }
                if(playerSelection == "paper"){
                    if(computerSelection =="rock"){
                        results.innerHTML = "You win!";
                        
                        score++;
                    }else if(computerSelection=="scissors"){
                        results.innerHTML = "You lose! Scissors beat paper!"
                        
                    }
                }
                if(playerSelection =="scissors"){
                    if(computerSelection == "rock"){
                        results.innerHTML = "You lose! Rock beats scissors";
                        
                    }else if(computerSelection =="paper"){
                        results.innerHTML = "You win! Scissors beat paper!"
                        score++;
                    }
                } if(computerSelection==playerSelection){
                        results.innerHTML = "DRAW!";
                }
            console.log(score);    
            }

            

           

           




const buttons = document.querySelectorAll('button');

//iterate through each function and each time the button is pressed a round is played 

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection=e.target.value;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    results.classList.add("resultsAnimation"); 
    results.addEventListener('transitionend', () => {
        results.classList.remove("resultsAnimation");
        results.classList.add("resultsAnimationAfter")
      })
    results.classList.remove("resultsAnimationAfter")
})
})


