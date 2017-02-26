const uscis = require('uscis');
let caseStart = 1690517100;
let caseCenter ='LIN';
var caseIncrementer;
let caseTitle = [];
let caseDetails = [];


for(i=1;i<=20;i++){
  var caseIncrementer = caseStart+i;
  var caseNumber = caseCenter+caseIncrementer;
  getCaseDetails(caseNumber,function(title,details,number){
    if (details.indexOf("I-140") >= 0){
      console.log(number);
      console.log(title);
      console.log(details);
    }
  })
}


function getCaseDetails(caseNumber,callback){
  uscis(caseNumber).then((status) => {
      callback(status.title,status.details,caseNumber);
  });
}
