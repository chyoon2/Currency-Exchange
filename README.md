# _Currency Exchanger_
 #### _ Currency Exchanger (project week 6)_

#### By _**Chris Yoon**_

## Description
  Give me money! This website will tell you how much of your money is worth in different currencies. It pulls from a free currency API https://www.exchangerate-api.com/. The API does not contain a full compendium of all the worlds currency. If you're;traveling abroad or just curious please use the website, I have about 2000 free API calls so use them all!

## Specs:

    Behavior: Program will accept a whole number.
    Input: "10"
    Output: N/A

    Behavior: Program will not accept non-numeric values.
    Input: "Money$10"
    Output: "Please enter only numeric values"

    Behavior: Program will accept an input of a non-USD currency.
    Input: "WON"
    Output: N/A

    Behavior: Program will convert string to uppercase.
    Input: "usd"
    Output: N/A

    Behavior: Program will calculate the value of user-inputted number multiplied by the user-selected non-USD currency exchange rate.
    Input: N/A
    Output: N/A

    Behavior: Program will call the API and request the key-value of the user-selected non-USD currency.
    Input: "WON"
    Output: N/A

    Behavior: Program will return an error if the API call results in an error. 
    Input: "10", "WON"
    Output: "Unexpected error, Error 404"

    Behavior: Program will return a notification saying the currency does not exist if the user-selected * currency doesn't exist in the API.
    Input: "10" , "EDM"
    Output: "EDM currency does not exist"

    Behavior: Program will return an output of the calculated currency exchage
    Input: "10" , "AED"
    Output: "36.7 AED

## Setup/Installation Requirements 

### Via GitHub Download

* _Navigate to www.github.com/chyoon2_
* _Find the currency-exchange repository by search or scroll_
* _click Download repository_
* _Navigate to the project folder that you have just downloaded_
* _Open the index.html file in your preferred browser_

### Access API
* _Navigate to https://www.exchangerate-api.com/
* _Input your email address and click the "Get Free Key" button._
* _You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"_
* _You will be given a API KEY_
* _When using a key do be sure to place the key in an .env file and the the .env to your .gitignore._
* _Use "GET" and the url format https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD_
* _Again be sure to keep your key hidden and commit your .gitignore_

## Known Bugs

_There are no known bugs._

## Support and contact details

_Please reach out to me at chy.yoon@gmail.com if you have any questions or suggestions_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Jquery_
* _Github_
* _Bootstrap_

### License

*MIT Licensing*

Copyright (c) 2020 **_Chris Yoon**