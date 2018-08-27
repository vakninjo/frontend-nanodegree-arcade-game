// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //x position
    this.x = x;
    this.y = y + 60;
    this.speed = speed;
    this.step = 101;
    this.boundary = this.step * 5;
    this.resPos = -this.step;
    //y position

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < this.boundary){
      //move forward
      //increment x by speed * dt
      this.x += this.speed * dt;
    } else {
      //reset position
      this.x = this.resPos;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//hero class
  //constructor
    //properties
        //xpixel
        //ypixel
        //startX
        //startY
        //x position
        //y position
        //sprite imnage
    //methods
      //update
            //check for collision
              //did play x and y collide with enemy?
            //check fo win?
              //did the playr x and y reach final tile?
      //render
          //draw player sprite on current position
      // handle keybord input
          //update player according to input
      //reset hero
        //set x and y to starting position

class Hero {
  constructor(){
    this.sprite = 'images/char-boy.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 4) + 60;
    this.x = this.startX;
    this.y = this.startY;
    this.gameEnd = false;
  }
  //draw hero
  render() {
    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
  }

  update(){
    //check for collision
    for (let enemy of allEnemies){
      //collision?
      if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2 )){
        console.log('blah!!!!!!')
        this.reset();
      }
    }
    //check fo game end?
    if (this.y === 60) {
      this.gameEnd = true;

    }
  }

  reset(){
    this.x = this.startX;
    this.y = this.startY;
    this.gameEnd = false;
  }

  /**
  *  Hero position
  *  @param {string} input - hero direction
  */
  handleInput(input){
    switch(input) {
      case 'left':
        if (this.x > 0) {
          this.x -= this.step;
        }
        break;
      case 'right':
        if (this.x < this.step * 4){
          this.x += this.step;
        }
        break;
      case 'up':
        if (this.y > this.jump ){
          this.y -= this.jump;
        }
        break;
      case 'down':
        if (this.y < this.jump * 4){
          this.y += this.jump;
        }
        break;
    }
  }
}

const player = new Hero();
const bug1 = new Enemy(-101, 0, 220);
const bug2 = new Enemy(-101, 83, 330);
// const bug3 = new Enemy((-101*2), 83, 240);
// const bug4 = new Enemy(-101, (83*2), 370);
// const bug5 = new Enemy((-101*1.5), (83*2), 170);
// const bug6 = new Enemy((-101*3), 0, 320);
const allEnemies = [];
// allEnemies.push(bug1,bug2,bug3,bug4,bug5,bug6);
allEnemies.push(bug1,bug2);



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

  //init allEnemies array
  //For each enemy create and push new Enemy objet into above array
  //

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
