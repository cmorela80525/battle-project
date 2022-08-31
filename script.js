//class for NEW SPACESHIPS
class spaceShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }


  //this method is used by alien ships to attack player ships
  //if alienShip accuracy is >= Math.random() (random number between 0 and 1):
  // reduce playerShip hull by amount of alienShip's firepower
  attackPlayerShip() {
    playerShip.hull -= this.firepower
  }
}
//create new player ship from class spaceShip
const playerShip = new spaceShip('USS Assembly', 20, 5, .7)

//create 6 alien ships
let alienShip1 = new spaceShip('Alien Ship1', (Math.floor(Math.random() * 4) + 3), (Math.floor(Math.random() * 3 + 2)), +(Math.random() * .2 + .6).toFixed(1))
let alienShip2 = new spaceShip('Alien Ship2', (Math.floor(Math.random() * 4) + 3), (Math.floor(Math.random() * 3 + 2)), +(Math.random() * .2 + .6).toFixed(1))
let alienShip3 = new spaceShip('Alien Ship3', (Math.floor(Math.random() * 4) + 3), (Math.floor(Math.random() * 3 + 2)), +(Math.random() * .2 + .6).toFixed(1))
let alienShip4 = new spaceShip('Alien Ship4', (Math.floor(Math.random() * 4) + 3), (Math.floor(Math.random() * 3 + 2)), +(Math.random() * .2 + .6).toFixed(1))
let alienShip5 = new spaceShip('Alien Ship5', (Math.floor(Math.random() * 4) + 3), (Math.floor(Math.random() * 3 + 2)), +(Math.random() * .2 + .6).toFixed(1))
let alienShip6 = new spaceShip('Alien Ship6', (Math.floor(Math.random() * 4) + 3), (Math.floor(Math.random() * 3 + 2)), +(Math.random() * .2 + .6).toFixed(1))
//create an array of alien ships
alienArray = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]


// set number of aliens defeated to 0
let alienDefeatCount = 0

//select p with 'defeated' id
const defeatedDisplay = document.getElementById('defeated')
//select p with 'gamePlayText' id
const gamePlayText = document.getElementById('gamePlayText')

const statsTitle = document.getElementById('stats-title')
const statName = document.getElementById('name-stat')
const statHull = document.getElementById('hull-stat')
const statFirepower = document.getElementById('firepower-stat')
const statAcc = document.getElementById('acc-stat')


//select first div and start button
const startButton = document.getElementById('start-button') //select start button
const startElements = document.getElementById('start') //select div with 'start' id

//select second div and children (intro). Create and hide intro button. Add id and text
const introDiv = document.getElementById('intro')  //select div with 'intro'
const introP = document.getElementById('intro-p') //select p element with 'intro-p' class
const introButton = document.createElement('button') //create intro button
introButton.style.display = 'none'
introDiv.append(introButton) //append button to div
introButton.setAttribute('id', 'intro-button') //give button an id of 'intro-button' 
introButton.textContent = "Blast off to space!"

//third div and children (stats and attack)
const statsDiv = document.getElementById('stats-div')
const attackButton = document.createElement('button') //create attack button
attackButton.style.display = ''
attackButton.textContent = 'Attack!'
statsDiv.appendChild(attackButton)
attackButton.style.display = 'none'

//add event listener to start button. Remove start element. Add text to intro p. Make introButton appear
startButton.addEventListener('click', () => {
  startElements.remove()
  introP.textContent = "The aliens are plotting to take over Planet Earth. Your mission is to defeat them all first! Press Blast off to space! when you are ready to begin your mission."
  introButton.style.display = ""
})


//add event listener to intro button. Remove intro elements. Add text to stat p elements. Make atack button appear
introButton.addEventListener('click', () => {
  introDiv.remove()
  statsTitle.textContent = "Player Stats"
  statName.textContent = "Ship Name: " + playerShip.name
  statHull.textContent = "Hull: " + playerShip.hull
  statFirepower.textContent = "Firepower: " + playerShip.firepower
  statAcc.textContent = "Accuracy: " + playerShip.accuracy
  attackButton.style.display = ""
})

// add event listener to attack button. Hide attack button. call gameLoop function
attackButton.addEventListener('click', () => {
  attackButton.style.display = 'none'
  defeatedDisplay.textContent = "Number of Aliens defeated: " + alienDefeatCount

  gameLoop()
})



  const gameLoop = () => {

    //start for loop
    for (let i = 0; alienDefeatCount < 6; i++) {
      let randomNumPlayerAcc = Math.random()
      let randomNumAlienAcc = Math.random()
  
      let alienShip = new spaceShip('Alien Ship', (Math.floor(Math.random() * 4) + 3), (Math.floor(Math.random() * 3 + 2)), +(Math.random() * .2 + .6).toFixed(1))
  
      if (playerShip.hull > 0) {
  
        if (playerShip.accuracy < randomNumPlayerAcc) {
          window.alert("You missed your target")
  
        } else if (playerShip.accuracy >= randomNumPlayerAcc) {
          alienShip.hull -= playerShip.firepower
          window.alert("You hit the alien ship")
          
        }
      }
  
      if (alienShip.hull <= 0) {
        alienDefeatCount++
        window.alert('You defeated the Alien Ship')
        console.log("# of Aliens defeated: " + alienDefeatCount)  //for testing purposes
        defeatedDisplay.textContent = "Number of Aliens defeated: " + alienDefeatCount
        //Would you like to continue or retreat?
        //display Attack! and Retreat buttons
        //if retreat if pressed, game is over
        window.alert("An alien ship is approaching. Defeat it!")
  
        //if alien is alive, check accuracy
      } else if (alienShip.hull > 0) {
        window.alert("The aliens are attacking you")
  
        //if alien accuracy < Math.random, log "Aliens missed"
        if (alienShip.accuracy < randomNumAlienAcc) {
          window.alert("That was close. The aliens tried to attack you but they missed")
  
          //if alien accuracy >= Math.random(), call attackPlayerShip function. Players hull decreases  
        } else if (alienShip.accuracy >= randomNumAlienAcc) {
          alienShip.attackPlayerShip()
          window.alert("You've been hit")
          updatedPlayerHull = playerShip.Hall
          console.log("Your Hull: " + playerShip.hull)  //for testing purposes
  
          if (playerShip.hull <= 0) {
            window.alert("You have been defeated by the aliens. Game Over")
  
          }
        }
      }
    }
  
    if (alienDefeatCount > 5) {
      window.alert("You defeated all of the alien ships. You Win!")
      
    }
  }
  
  

  //Features to add: 
    //update stats display
    //retreat option