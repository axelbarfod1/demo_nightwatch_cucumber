Feature: Mercado Libre Home Page

Scenario: Check Login button is Shown

  #Given I open Yahoo`s search page
  Given I open Mercado libre's home page
  Then the title is "Mercado Libre Uruguay"
  And the login button should exist
