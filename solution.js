//0
let isDogBetter = true;
let isCatBetter = false;

//1.a.
console.log("Ex.1.a:", isDogBetter && isCatBetter);
//1.b.
console.log("Ex.1.b:", isDogBetter || isCatBetter);
//1.c.
console.log("Ex.1.c:", !(isDogBetter && isCatBetter));
//2
const atoms = 10000;
const sandGrains = 400;
const starsInSky = 750;
//3.a.
console.log("Ex.3a:", atoms > starsInSky && atoms > sandGrains);
//3.b.
console.log("Ex.3b:", atoms !== sandGrains);
//3.c.
console.log("Ex.3c:", starsInSky < sandGrains || starsInSky > atoms);
//3.d.
console.log("Ex.3d:", atoms === starsInSky || atoms !== sandGrains);
//3.e.
console.log("Ex.3e:", atoms >= 10 && sandGrains <= 10);
//3.f.
console.log("Ex.3f:", atoms * starsInSky < 100 || atoms * sandGrains > 100);
