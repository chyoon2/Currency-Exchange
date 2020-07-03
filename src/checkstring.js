export function checkString(foreignCurrency) {

  let regex = /[0-9!@#$%^&*)(+=._-]/g;
  let invalid = foreignCurrency.match(regex);
  if (invalid === null){
    let uppercase = foreignCurrency.toUpperCase();
    return uppercase;
  }
  else{
    return false;
  }   
}