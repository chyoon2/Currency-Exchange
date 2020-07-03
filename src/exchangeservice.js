export class ExchangeService {
  async getNewRate(amount, foreignCurrency) {
   
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      
      let jsonifiedResponse;
      
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
        for (let key in jsonifiedResponse.conversion_rates){
          if(key === foreignCurrency) { 
            let product = this.math(jsonifiedResponse, foreignCurrency, amount);
            return [ true, product,]; 
          }
        }
        throw new SyntaxError("That currency does not exist in our archive");
      }
      else {
        throw Error(response.statusText); 
      }
      
    } catch(error) {
      return [false, error.message];
    }
  }

  math(jsonifiedResponse, foreignCurrency, amount) {
    let rate = parseFloat(jsonifiedResponse.conversion_rates[foreignCurrency]);

    let multiply = (rate * amount).toFixed(2);
    return multiply;
  }
  
}