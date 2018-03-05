const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')

Given(/^I open Mercado libre's home page$/, () => {
  const meli = client.page.meli_home()

    return meli.navigate()
        .isBodyLoaded()
})

Then(/^the login button should exist$/, () => {
  const meli = client.page.meli_home()

  return meli.clickLogin()
})
