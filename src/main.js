import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
// import { PotterService } from './potterService.js';



$(document).ready(function(){
  $('#calculateExchange').click(function() {
    (async () => {
      let backendExchange = new BackendExchange();
      const response = await backendExchange.getNewRate();
      getHousePicture(response);
    })();
});