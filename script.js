const superHeroes = {
    Tony: 42,
    Peter: 18,
    Steve: 104,
    Bruce: 38,
    Thor: 1055,
  };
  
  document.getElementById("average-age").addEventListener("click", (e) => {
    const averageAge = (heroes) => {
      let totalAge = 0;
      let count = 0;
      for (let hero in heroes) {
        totalAge += heroes[hero];
        count++;
      }
      return totalAge / count;
    };
  
    const avgAge = averageAge(superHeroes);
    console.log(avgAge); // output: 251.4
  });
  