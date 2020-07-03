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

$(document).ready(function(){
  $('#calculateExchange').click(function() {
    let amount = $('#usd').val();
    let foreignCurrency = $('#foreign-currency').val();
    checkNumber(amount);
    checkString(foreignCurrency);

    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getNewRate(amount, foreignCurrency);
      showExchange(response);
    })(); 
  });
});