const parentDiv = document.querySelector('.cards');
var score = document.querySelector('.score');

var cardItemsArray = [
    {
        "name" : "one",
        "value" :"😍"
    },
    {
        "name" : "two",
        "value" :"🤓"
    },
    {
        "name" : "three",
        "value" :"🙉"
    },
    {
        "name" : "four",
        "value" :"😘"
    },
    {
        "name" : "five",
        "value" :"😂"
    },
    {
        "name" : "six",
        "value" :"🤡"
    },
]
       
var totalSwap=0;
const audioElement = document.getElementById('audio');
var score = document.querySelector('.score-show');
var heading = document.querySelector('.heading');


// for audio
function playAudio() {
    if (!audioElement.paused) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
    audioElement.play();
}


//Match function if two carts get matched

const matchLogic = () => {
    console.log("jmtct match");
    var selectedCard = document.querySelectorAll('.selected_card');
    selectedCard.forEach((element)=>{
        element.classList.add('match-style');
        element.style.backgroundColor= '#222';
        element.innerHTML = '';
    })   

   
}

//Function for reset

const resetLogic = () =>{
    console.log("jmtc t reset");
    clickCount=0;
    selectValueOne = "";
    selectValueTwo = "";
    var selectedCard = document.querySelectorAll('.selected_card');
    selectedCard.forEach((element)=>{
        element.classList.remove('selected_card');
    })

}

var clickCount = 0;
var selectValueOne = "";
var selectValueTwo = "";
const gameCard = cardItemsArray.concat(cardItemsArray);



//function shuffleCardNum

const shuffleCardNum = (gameCard) =>{
    for(let i = gameCard.length-1 ; i>=0 ; i--){
        let j = Math.floor(Math.random()*i+1);

        let temp = gameCard[i];
        gameCard[i] = gameCard[j];
        gameCard[j] = temp;
    }
    return gameCard;
}

var shuffleNum = shuffleCardNum(gameCard);
console.log(shuffleNum);

// .............. card click functionality ..............


parentDiv.addEventListener('click',(event)=>{
    totalSwap=totalSwap+1;
    
    setTimeout(()=>{
        score.innerText = totalSwap;
    })

    // console.log("JMTC t");

    let currentCard = event.target; //fetch the clicked card
    if(currentCard.classList.contains("cards")){ //if the parentdiv is clicked simply return false 
        console.log("JMTC t");
        return false;
    };

    clickCount++;
    if(clickCount<3){

        if(clickCount===1){
            selectValueOne = currentCard.dataset.name;
            currentCard.classList.add('selected_card');
        }else{
            selectValueTwo = currentCard.dataset.name;
            currentCard.classList.add('selected_card');
        }

        if(selectValueOne !=="" && selectValueTwo !==""){
            if(selectValueOne === selectValueTwo){
            
                console.log("same");
              
                setTimeout(() => {
                    matchLogic();
                    resetLogic();
                }, 1000);

            console.log(document.querySelectorAll('.match-style').length);

            if(document.querySelectorAll('.match-style').length == 10){

                setTimeout(()=>{
                    startConfetti();
                    playAudio();
                },1000)
               
            }
    
            }else{
                setTimeout(() => {
                    resetLogic();
                }, 1000);
            } 
            
          
        } 
        
    }

})

//for creating 12 card inside cards section
for(let i=0 ; i<shuffleNum.length ; i++){
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffleNum[i].name;
    childDiv.innerText = shuffleNum[i].value;
    parentDiv.appendChild(childDiv);
}



   
