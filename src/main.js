import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { ExchangeService } from './exchangeservice';
import { checkNumber } from './checknumber';
import { checkString } from './checkstring';

function showExchange(response) { 
  if(response[0]) {
    $('#output').text(`Your return is $${response[1]}`);
    $('#showError').text("");
    $('#showUserError').text("");
  }
  else {
    $('#showError').text(`There was a an error processing your request: ${response[1]}`);
    $('#showUserError').text("");
    $('#output').text(""); 
  } 
}

function userError(err) {
  if (err === 1) {
    $('#output').text("");
    $('#showUserError').text(`Error: Please enter a valid number`);
  }
  else {
    $('#output').text("");
    $('#showUserError').text(`Error: Only use alphabetical characters for currency`);
  }
}

$(document).ready(function(){
  $('#calculateExchange').click(function() {
    let amount = $('#usd').val();
    let foreignCurrency = $('#foreign-currency').val();
    $('#usd').val("");
    $('#foreign-currency').val("");

    let upper = checkString(foreignCurrency);

    if(checkNumber(amount)){ 
      return userError(1);
    }
    if(!upper){
      userError(2);
    }
    else {
      (async () => {
        let exchangeService = new ExchangeService();
        const response = await exchangeService.getNewRate(amount, upper);
        showExchange(response);
      })(); 
    }
  });
});