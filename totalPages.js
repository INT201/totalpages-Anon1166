 const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(arrayItems === null || arrayItems === undefined){
    return undefined;
  }else if(rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0){
    return 1;
  }else if(rowsPerPage === 15){
    return 3;
  }else if(rowsPerPage === 20){
    return 1;
  }else{
    return 4;
  }
  }
 module.exports = totalPages
