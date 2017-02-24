const uscis = require('uscis');
let caseStart = 1690517100;
let caseCenter ='LIN';
var caseIncrementer;
let caseTitle = [];
let caseDetails = [];

for(i=1;i<=9;i++){
  var caseIncrementer = caseStart+i;
  var caseNumber = caseCenter+caseIncrementer;
  uscis(caseNumber).then((status) => {
    console.log(caseNumber);
    console.log(status.title)
    console.log(status.details)
  })
}
