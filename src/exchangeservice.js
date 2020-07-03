export class ExchangeService {
  async getNewRate(amount, foreignCurrency) {
   
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonifiedResponse;
      
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();

        console.log(jsonifiedResponse.conversion_rates[foreignCurrency]);
        let rate = parseFloat(jsonifiedResponse.conversion_rates[foreignCurrency]);
        let product = (rate * amount).toFixed(2);
        return [ true, product,];

      } else {
        let stat= response.statusText;
        return [false, stat];
      }
      

    } catch(error) {
      console.error(error);
      return [false, error];
    }
  }
}