import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Exchange } from './backendexchange';

function showExchange(response) { 
  if(response) {
    $('#output').text('${response.conversion_rates.[0][0]');
    $('#showErrors').text("");
  }
  else {
    $('#showErrors').text("There was an error with your entry: ${Error.message}");
    $('#output').text(""); 
  } 
}

$(document).ready(function(){
  $('#calculateExchange').click(function() {
    let currency = parseInt($('#usd').val());
    let foreignCurrency = $('#foreign-currency').val();
    console.log(foreignCurrency)
    // (async () => {
    //   let Exchange = new Exchange();
    //   const response = await Exchange.getNewRate();
    //   showExchange(response);
    // })();
  });
});