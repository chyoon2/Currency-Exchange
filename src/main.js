import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { BackendExhange } from './backendexchange.js';

function showExchange(response) { 
  if(response) {
    $('#output').text('${response.conversion_rates.[0][0]');
    $('#showErrors').text("");
  }
  else {
    $('#showErrors').text("There was an error with your entry: ${Error.message}")
    $('#output').text(""); 
  } 
}

$(document).ready(function(){
  $('#calculateExchange').click(function() {
    (async () => {
      let backendExchange = new BackendExchange();
      const response = await backendExchange.getNewRate();
      showExchage(response);
    })();
  });
});