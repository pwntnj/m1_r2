const { template } = require('@babel/core')
// 65130500104 Natthanan jirajaruwat

function countCovidStatus(covidStatusArray) {   
   if (covidStatusArray === null || covidStatusArray === undefined) {
      return undefined
   }
   if (covidStatusArray.length === 0) {
      return {}
   }
   let low = 0
   let hight = 0
   let po = 0
   for (let i = 0; i < covidStatusArray.length; i++) {
      if (covidStatusArray[i] === 'negative and low risk') {
         low++
      }
      if (covidStatusArray[i] === 'negative and high risk') {
         hight++
      }
      if (covidStatusArray[i] === 'positive') {
         po++
      } 
   }
   let a = {}
   if (low > 0) {
      a['negative and low risk'] = low
   }
   if (hight > 0) {
      a['negative and high risk'] = hight
   }
   if (po > 0) {
      a['positive'] = po
   }

   return a
   }

module.exports = countCovidStatus
