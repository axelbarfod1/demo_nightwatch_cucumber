Feature: Mercado Libre Home Page

@test
Scenario: Check Login button is Shown

  Given I open Mercado libre's home page
  Then the title is "Mercado Libre Uruguay"
  And the login button should exist
