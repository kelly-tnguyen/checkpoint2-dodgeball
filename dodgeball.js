'use strict';

  const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  
  class Player {
    constructor(id, name, age, skillSet, placeBorn){
        this.id = id,
        this.name = name,
        this.age = age,
        this.skillSet = skillSet,
        this.placeBord = placeBorn
    }
   }

  class Registered extends Player{
    constructor(canThrow, canDodge, isHealthy, hasPaid, yearsOfExperience, id, name, age, skillSet, placeBord){
      super(id, name, age, skillSet, placeBord),
      this.canThrow = canThrow,
      this.canDodge = canDodge,
      this.isHealthy = isHealthy,
      this.hasPaid = hasPaid,
      this.yearsOfExperience = yearsOfExperience
    }
    joinTeam(team){
      team.teammates.push(this.arrOfPeople[arrOfPeople[id]])
    }
  }

  class Team {
    constructor(name, mascot, teamColor){
        this.name = name,
        this.mascot = mascot,
        this.teamColor = teamColor,
        this.teammates = []
    }

    showTeam(){
      if(name === 'Warriors'){
        teammates = blueTeam
      } else if(name === 'Rockets'){
        teammates === redTeam
      }
    }
  }

  const warriors = new Team("Warriors", "Horse", "Blue")
  const rockets = new Team("Rockets", "Cowboy", "Red")
  
// See the People list
  const listPeopleChoices = () => {
  document.getElementById('firstList').remove(this)
  const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      li.setAttribute('id', 'applicant')
      button.innerHTML = "Register"
      button.setAttribute('id', 'registerBtn')
      button.addEventListener('click', function() {makePlayer(person.id)})
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + ":   "))
      li.appendChild(document.createTextNode(person.placeBorn))
      listElement.append(li)
    })
  }

  const makePlayer = (id) => {
    listOfPlayers.push(arrOfPeople[id - 2]) //working, adding clicked li to new array, listofplayers.
    document.getElementById('applicant').remove(this)
    console.log('moved into players array:',listOfPlayers)
    console.log(id)
  }

// See the players list
  const playerList = () => {
    document.getElementById('secondList').remove(this)
    const playerlistElement = document.getElementById('players')
        listOfPlayers.map(player => {
          const li = document.createElement("li")
          const blueButton = document.createElement("button")
          li.setAttribute('id', '${person.id}')
          blueButton.innerHTML = "Join the Warriors!"
          blueButton.addEventListener('click', function(){
            blueTeam.push(player.name)
            document.getElementById('${person.id}').remove(this)
            console.log('blue team array', blueTeam)
          })
          const redButton = document.createElement("button")
          li.setAttribute('id', '${person.id}')
          redButton.innerHTML = "Join the Rockets!"
          redButton.addEventListener('click', function() { 
            redTeam.push(player.name)
            document.getElementById('${person.id}').remove(this)
            console.log('red team array', redTeam)
          })
          li.appendChild(blueButton)
          li.appendChild(redButton)
          li.appendChild(document.createTextNode(player.name))
          playerlistElement.append(li)
          })
    console.log(listOfPlayers)
  }

// To show the warriors list
  const warriorsList = () => {
  const warriorslistElement = document.getElementById('blue')
    blueTeam.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      li.appendChild(document.createTextNode(person))
      warriorslistElement.append(li)
    })
  }

// To show the rockets list
  const rocketsList = () => {
  const rocketslistElement = document.getElementById('red')
    redTeam.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      li.appendChild(document.createTextNode(person))
      rocketslistElement.append(li)
    })
  }

// To reset page
const reset = () => {
  window.location.href=window.location.href
}

// Tests

// Does the player have all the necessary parameters
const assert = require('assert');
if (typeof describe === 'function') {
      describe('Player', function(){
      it('can become a player', function(){
        let player1 = new Player('2', 'Charles Young', '55', 'welding', 'Omaha, Nebraska');
        assert.equal(player1.id, '2');
        assert.equal(player1.name, 'Charles Young');
        assert.equal(player1.age, '55');
        assert.equal(player1.skillSet, 'welding');
      });
  });
}
      describe("Player", function() {
        it("can join blue team", function() {
          let player2 = new Player(2, "Jane Doe", 22, "snorkeler", "Houston");
          player2 = new Team("NB", "Unicorn", "Blue");
          assert.equal(player2.name, "NB");
          assert.equal(player2.mascot, "Unicorn");
          assert(!(player2 instanceof Player));
          assert(player2 instanceof Team);
        });
      });

      describe("Player", function() {
        it("can join red team", function() {
          let player3 = new Player(4, "Chris Jackson", 27, "comp sci", "San Marcos");
          player3 = new Team("Canyon", "Cougar", "Red");
          assert.equal(player3.name, "Canyon");
          assert.equal(player3.mascot, "Cougar");
          assert(!(player3 instanceof Player));
          assert(player3 instanceof Team);
        });
      });
