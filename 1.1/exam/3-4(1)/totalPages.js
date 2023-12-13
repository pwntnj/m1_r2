const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
    if (arrayItems === null || arrayItems === undefined) {
        return undefined
    }
    if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0) {
        return 1
    }
    let i = Math.ceil(arrayItems.length / rowsPerPage)
    return i
}
module.exports = totalPages
