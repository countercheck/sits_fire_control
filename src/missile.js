//first entry in each row is number of incomming missiles
var ecmTable = [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  [3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3],
  [4, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
  [5, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4],
  [6, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5],
  [7, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6],
  [8, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7],
  [9, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8],
  [10, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9],
  [20, 0, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9, 10, 11, 11, 12, 13, 14, 14, 15, 16, 16, 17],
  [30, 0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26],
  [40, 0, 2, 3, 5, 6, 7, 9, 10, 12, 13, 14, 16, 17, 19, 20, 21, 23, 24, 26, 27, 28, 30, 31, 33, 34],
  [50, 1, 2, 4, 6, 8, 9, 11, 13, 15, 16, 18, 20, 22, 23, 25, 27, 29, 30, 32, 34, 36, 37, 39, 41, 43],
  [60, 1, 3, 5, 7, 9, 11, 13, 15, 17, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 41, 43, 45, 47, 49, 51],
  [70, 1, 3, 6, 8, 11, 13, 15, 18, 20, 23, 25, 28, 30, 33, 35, 37, 40, 42, 45, 47, 50, 52, 55, 57, 60],
  [80, 1, 4, 6, 9, 12, 15, 18, 20, 23, 26, 29, 32, 34, 37, 40, 43, 46, 48, 51, 54, 57, 60, 62, 65, 68],
  [90, 1, 4, 7, 10, 14, 17, 20, 23, 26, 29, 32, 36, 39, 42, 45, 48, 51, 54, 58, 61, 64, 67, 70, 73, 77],
  [100, 1, 5, 8, 12, 15, 19, 22, 26, 29, 33, 36, 40, 43, 47, 50, 54, 57, 61, 64, 68, 71, 75, 78, 82, 85]];

//first value in each row is value of defense
var activeDefenseTable = [[1/3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [2/3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4],
  [3, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6],
  [4, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8],
  [5, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 10],
  [6, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 11, 12],
  [7, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 10, 11, 13, 14],
  [8, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9, 10, 12, 13, 14, 16],
  [9, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 11, 12, 13, 15, 16, 18],
  [10, 3, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8, 9, 11, 12, 13, 14, 16, 18, 20],
  [20, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19, 21, 23, 26, 29, 32, 36, 40],
  [30, 8, 9, 10, 11, 13, 15, 16, 18, 21, 23, 25, 28, 32, 35, 39, 43, 48, 54, 60]];

function SalvoData(targetName, missileNumber, mql, ecm, decoy, fcon, cm, pd, wedge, nuke) {
  this.targetName = targetName;
  this.missileNumber = missileNumber;
  this.mql = mql;
  this.ecm = ecm;
  this.decoy = decoy;
  this.wedge = wedge;
  this.fcon = fcon;
  this.cm = cm;
  this.pd = pd;
  this.nuke = nuke;
}

function roll1d10(){
  return(Math.floor(Math.random() * 10 + 1));
}

function roll2d10(){
  return(roll1d10() + roll1d10() );
}

function roll2d10Minus(){
  return( Math.abs( roll1d10() - roll1d10() ) );
}

function calculateEcmKills(salvo, roll){
  salvo.ecmKills = 0;
  salvo.ecmDecoyKills = 0;

  if (salvo.wedge === true) {salvo.ecm = 12};

  var unresolvedMissiles = salvo.missileNumber,
      column = salvo.mql + salvo.ecm + roll;

  for (var i = ecmTable.length - 1; i >= 0; i--) {
    if (ecmTable[i][0] <= unresolvedMissiles) {
      unresolvedMissiles -= ecmTable[i][0];
      salvo.ecmKills += ecmTable[i][column];
      salvo.ecmDecoyKills += ecmTable[i][column + salvo.decoy];
    };
  };

  return(salvo);
}

function calculateCmKills(salvo, roll){
  salvo.cmKills = 0;

  if (salvo.wedge === false) {

    var column = salvo.mql - salvo.fcon + roll;
    var cm = salvo.cm;

    for (var i = activeDefenseTable.length - 1; i >= 0; i--) {
      if (activeDefenseTable[i][0] <= cm) {
        salvo.cmKills += activeDefenseTable[i][column];
        cm -= activeDefenseTable[i][0]
      };
    };
  };
  return(salvo);
}

function calculatePdKills(salvo, roll){
  salvo.pdKills = 0;

  var column = salvo.mql - salvo.fcon + roll;
  var pd = salvo.pd;
  for (var i = activeDefenseTable.length - 1; i >= 0; i--) {
    if (activeDefenseTable[i][0] <= pd) {
      salvo.pdKills += activeDefenseTable[i][column];
      pd -= activeDefenseTable[i][0];
    };
  };

  if (salvo.nuke === true) {
        salvo.pdKills = salvo.pdKills * 2;
      };
      
  if (salvo.wedge === true) {
        salvo.pdKills = Math.floor(salvo.pdKills/2);
      };
  return(salvo);
}