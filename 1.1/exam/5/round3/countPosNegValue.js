const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
//64130500074,Worawit,Limthong
function countPosNegValue(posNegIntegerArray) {
    if (posNegIntegerArray === null || posNegIntegerArray === undefined) {
        return undefined
    }
    if (posNegIntegerArray.length === 0) {
        return {}
    }
    let po = 0
    let ne = 0
    for (let i = 0; i < posNegIntegerArray.length; i++) {
        if (posNegIntegerArray[i] > 0) {
            po++
        }
        if (posNegIntegerArray[i] < 0) {
            ne++
        }   
    }

    let a = {}
    a.positive = po
    a.negative = ne

    return a
}
module.exports = countPosNegValue
