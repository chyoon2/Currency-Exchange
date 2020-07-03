import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { ExchangeService } from './exchangeservice';

function showExchange(response) { 
  // if(response) {
    console.log(response);

    $('#output').text(`Your return is $${response}`);
    $('#showErrors').text("");
  // }
  // else {
  //   $('#showErrors').text("There was an error with your entry: ${Error.message}");
  //   $('#output').text(""); 
  // } 
}

$(document).ready(function(){
  $('#calculateExchange').click(function() {
    let amount = $('#usd').val();
    let foreignCurrency = $('#foreign-currency').val();
    
    (async () => {
      let exchangeService = new ExchangeService();
      const response = await exchangeService.getNewRate(amount, foreignCurrency);
      showExchange(response);
    })(); 
  });
});