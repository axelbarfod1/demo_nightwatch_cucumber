var meliHomePageCommands = {
        clickLogin : function(){
            return this .waitForElementPresent('@loginButton', timeout)
                .click('@loginButton')
        },

        isBodyLoaded : function(){
            return this .waitForElementPresent('@body', timeout)
        }
}

var timeout = 5000;
module.exports = {
    commands: [meliHomePageCommands],

    elements: {

        loginButton: {
            selector: '#nav-header-menu > a:nth-child(2)'
        },
        body: {
            selector: 'body'
        },
        searchBar: {
            selector: '.nav-search > input'
        }
    }
  }