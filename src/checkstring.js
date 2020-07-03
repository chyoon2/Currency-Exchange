export function checkString(foreignCurrency) {

  let regex = /[0-9!@#$%^&*)(+=._-]/g;
  let invalid = foreignCurrency.match(regex);
  if (invalid.length > 1){
    return false;
  }  
  else{
    let uppercase = foreignCurrency.toUpperCase();
    return uppercase;
  }
  
} 
