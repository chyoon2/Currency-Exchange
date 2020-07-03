import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { ExchangeService } from './exchangeservice';
import { checkNumber } from './checkservice';
import { checkString } from './checkstring';

function showExchange(response) { 
  if(response[0]) {
    $('#output').text(`Your return is $${response[1]}`);
    $('#showErrors').text("");
  }
  else {
    $('#showErrors').text(`There was a an error processing your request: ${response[1]}`);
    $('#output').text(""); 
  } 
}

function userError(err) {
  if (err === 1) {
    $('#showErrors').text(`Error: Please enter a valid number`);
  }
  else {
    $('#showErrors').text(`Error: Only use alphabetical characters for currency`);
  }
}

$(document).ready(function(){
  $('#calculateExchange').click(function() {
    let amount = $('#usd').val();
    let foreignCurrency = $('#foreign-currency').val();
    checkNumber(amount);
    let upper = checkString(foreignCurrency);

    if(!checkNumber(amount)){ 
      userError(1);
    }
    else if(!upper){
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