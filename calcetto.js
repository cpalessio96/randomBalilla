const attackers = require("./attackers")
const defenders = require("./defenders")
const both = require("./both")

const main = () => {
  const couples = [];
  const numAttackers = attackers.length;
  const numDefenders = defenders.length;
  const numBoth = both.length;
  const numTotal = numAttackers + numDefenders + numBoth;
  
  if (numTotal % 2 !== 0) {
    throw new Error("numero di giocatori dispari");
  }
  
  if (numAttackers === numDefenders) {
    const halfBoth = numBoth / 2;
    for (let i = 0; i < halfBoth; i++) {
      const casualIndex = Math.floor(Math.random() * both.length);
      attackers.push(both[casualIndex]);
      both.splice(casualIndex, 1);
    }
    defenders.push(...both);
  }

  if (numAttackers > numDefenders) {
    const difference = numAttackers - numDefenders;
    const halfBoth = (numBoth + difference) / 2;
    for (let i = 0; i < halfBoth; i++) {
      const casualIndex = Math.floor(Math.random() * both.length);
      defenders.push(both[casualIndex]);
      both.splice(casualIndex, 1);
    }
    attackers.push(...both);
  }

  if (numDefenders > numAttackers) {
    const difference = numDefenders - numAttackers;
    const halfBoth = (numBoth + difference) / 2;
    for (let i = 0; i < halfBoth; i++) {
      const casualIndex = Math.floor(Math.random() * both.length);
      attackers.push(both[casualIndex]);
      both.splice(casualIndex, 1);
    }
    defenders.push(...both);
  }

  while (attackers.length) {
    const numRandomAttackers = Math.floor(Math.random() * attackers.length);
    const numRandomDefenders = Math.floor(Math.random() * defenders.length);
    couples.push({
      attacker: attackers[numRandomAttackers],
      defenders: defenders[numRandomDefenders],
    });
    attackers.splice(numRandomAttackers, 1);
    defenders.splice(numRandomDefenders, 1);
  }

  console.log(couples);
};
  
main();
  