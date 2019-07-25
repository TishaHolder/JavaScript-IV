/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

  /*
  function GameObject (gameAttributes) {
    this.createdAt = gameAttributes.createdAt;
    this.name = gameAttributes.name;
    this.dimensions = gameAttributes.dimensions;  
  }
  
  GameObject.prototype.destroy = function() {
    console.log (`${this.name} was removed from the game.`);
  }*/

  class GameObject {
      constructor(gameObjectAttributes) {
          this.createdAt = gameObjectAttributes.createdAt;
          this.name = gameObjectAttributes.name;
          this.dimensions =gameObjectAttributes.dimensions;

      }//end constructor

      destroy() {
        console.log (`${this.name} was removed from the game.`);

      }//end destroy

  }//end class GameObject


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
function CharacterStats (characterAttributes) {
    GameObject.call(this, characterAttributes);//sets CharacterStat's prototype to GameObject's prototype
    this.healthPoints = characterAttributes.healthPoints;  
}
  
  //in order to ‘inherit’ the prototype methods from the GameObject's prototype 
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  //prototype method
  CharacterStats.prototype.takeDamage = function () {
    console.log(`${this.name} took damage.`);
}*/
  
class CharacterStats extends GameObject {
    constructor(characterStatsAttributes) {
        //pass common attributes (attributes inherited from parent class) back up to the constructor of the parent class
        super(characterStatsAttributes);//grab all this stuff stuff from parent

        this.healthPoints = characterStatsAttributes.healthPoints;//initialize attributes not found in the parent class

    }//end constructor

    takeDamage() {

        console.log(`${this.name} took damage.`);

    }   
    

}//end class CharacterStats

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
function Humanoid (humanoidAttributes) {
    GameObject.call(this, humanoidAttributes);//sets Humanoid's prototype to GameObject's prototype
    CharacterStats.call(this, humanoidAttributes);//sets Humanoid's prototype to CharacterStat's prototype  
    this.team = humanoidAttributes.team;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;  
  }
  
  //in order to ‘inherit’ the prototype methods from the GameObject & CharacterStat prototypes
  Humanoid.prototype = Object.create(GameObject.prototype);
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  //prototype method
  Humanoid.prototype.greet = function() {
    console.log(`${this.name} offers a greeting in ${this.language}`);
  }*/

  class Humanoid extends CharacterStats {
      constructor( humanoidAttributes) {
          /*pass common attributes (attributes inherited from parent class) back up to the constructor of the parent class*/
          super(humanoidAttributes);

          //initialize attributes not found in the parent class
          this.team = humanoidAttributes.team;
          this.weapons = humanoidAttributes.weapons;
          this.language = humanoidAttributes.language;

      }//end constructor

      greet(){
        console.log(`${this.name} offers a greeting in ${this.language}`);
      }

  }//end class Humanoid

// Test you work by un-commenting these 3 objects and the list of console logs below:

//arguments are passed in the same order they appear in the constructor
//const mage = new Humanoid(new Date(), 'Bruce', {length: 2, width: 1, height: 1}, 5, 'Mage Guild', ['Staff of Shamalama'], 'Common Tongue');

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  
  //arguments are passed in the same order they appear in the constructor
  //const swordsman = new Humanoid (new Date(), 'Sir Mustachio', {length: 2, width: 2, height: 2}, 15, 'The Round Table', ['Giant Sword', 'Shield'], 'Common Tongue');

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
 
  //arguments are passed in the same order they appear in the constructor
  //const archer = new Humanoid(new Date(), 'Lilith', {length: 1, width: 2, height: 4}, 10,  'Forest Kingdom', ['Bow', 'Dagger'], 'Elvish');

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  console.log("**************************************************************************************");

  

  
