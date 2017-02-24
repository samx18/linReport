const uscis = require('uscis')

uscis('LIN1690517123').then((status) => {
  console.log(status.title)
  console.log(status.details)
})
