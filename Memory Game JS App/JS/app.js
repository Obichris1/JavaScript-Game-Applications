const cardArray = [
    {
    name: "fries",
    img: "/Images/fries.png"

},

{
    name:"cheeseburger",
    img:"/Images/cheeseburger.png"
},
{
    name: "hotdog",
    img: "/Images/hotdog.png"

},

{
    name: "ice-cream",
    img: "/Images/ice-cream.png"

},
{
    name: "milkshake",
    img: "/Images/milkshake.png"

},
{
    name: "pizza",
    img: "/Images/pizza.png"

},
{
    name: "fries",
    img: "/Images/fries.png"

},

{
    name:"cheeseburger",
    img:"/Images/cheeseburger.png"
},
{
    name: "hotdog",
    img: "/Images/hotdog.png"

},

{
    name: "ice-cream",
    img: "/Images/ice-cream.png"

},
{
    name: "milkshake",
    img: "/Images/milkshake.png"

},
{
    name: "pizza",
    img: "/Images/pizza.png"

},
]
cardArray.sort(() => 0.5 - Math.random()) // sorting an array randomly
const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let Score


// creating the gameboard

function createBoard(){
    for(var i = 0; i < cardArray.length ; i++){
        const card = document.createElement("img")  // craeting a new HTML element 
        card.setAttribute("src","/Images/blank.png")
        card.setAttribute("data-id",i)
        card.addEventListener("click", flipCard)
        gridDisplay.append(card)


        // console.log(card,i)


    }
}



console.log(createBoard()) //displaying the game board





// checking for card match anytime two cards are clicked


function checkMatch(){
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log("check for a match")


    if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute("src","/Images/blank.png")
    cards[optionTwoId].setAttribute("src","/Images/blank.png")
      alert("you clicked the same image")
    }

    
    if(cardsChosen[0] == cardsChosen[1] && optionOneId != optionTwoId ){
        alert("you found a match")
           
        cards[optionOneId].setAttribute("src","/Images/white.png")
        cards[optionTwoId].setAttribute("src","/Images/white.png")
        cards[optionOneId].removeEventListener("clicked",flipCard)
        cards[optionTwoId].removeEventListener("clicked",flipCard)
        cardsWon.push(cardsChosen)

    }
    else {
        cards[optionOneId].setAttribute("src","/Images/blank.png")
        cards[optionTwoId].setAttribute("src","/Images/blank.png")
        alert("sorry try again")
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds =[]
     

    // when all the cards have been exhausted at the end of the game

    if (cardsWon.length ==(cardArray.length/2)){
        resultDisplay.innerHTML = "congratulations you found them all!!"
        
    }
}





function flipCard(){
    const cardId = this.getAttribute("data-id")
   
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    //  console.log("clcked",cardId)
    
     console.log(cardsChosen)
     console.log(cardsChosenIds) // 
    // console.log(cardArray[cardId])
     this.setAttribute("src",cardArray[cardId].img)
     if(cardsChosen.length === 2){
         setTimeout(checkMatch,500)
     }


}




    


