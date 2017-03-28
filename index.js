const uscis = require('uscis');
let caseStart = 1690517200;
let caseCenter ='LIN';
var caseIncrementer;
let caseTitle = [];
let caseDetails = [];


for(i=1;i<=50;i++){
  var caseIncrementer = caseStart+i;
  var caseNumber = caseCenter+caseIncrementer;
  getCaseDetails(caseNumber,function(title,details,number){
    if (details.indexOf("I-140") >= 0){
      // console.log(number);
      // console.log(number);
      // console.log(details.substr(2, details.indexOf(',')));
      console.log(number+','+title+','+details.substr(2, details.indexOf(',')));
    }
  })
}


function getCaseDetails(caseNumber,callback){
  uscis(caseNumber).then((status) => {
      callback(status.title,status.details,caseNumber);
  });
}
