export class ExchangeService {
  async getNewRate(amount, foreignCurrency) {
   
    if(isNaN(amount)) {
      return false;
    } 

    let amountInt = parseInt(amount);
    
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      let rate = parseInt(jsonifiedResponse.conversion_rates[foreignCurrency]);
      let product = rate * amountInt;
      return product;
      
    } catch(error) {
      return false;
    }
  }
}