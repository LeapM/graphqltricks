Object.defineProperty(exports, "__esModule", {
  value: true
});

class RandomDie{
  constructor(numSide){
    this.numSide = numSide;
  }

  rollOnce(){
    return 1 + Math.floor(Math.random() * this.numSide);
  }

  roll({numRolls}){
    var output = [];
    for(let i = 0; i < this.numSide; i ++){
      output.push(this.rollOnce);
    }
  }
}

exports.RandomDie = RandomDie