export function checkNumber(amount) {
  if(isNaN(parseInt(amount))) {
    return false;
  } 
  else {
    return true;
  }
} 