var meliHomePageCommands = {
        clickLogin : function(){
            return this .waitForElementPresent('@loginButton', timeout)
                .click('@loginButton')
        },

        isBodyLoaded : function(){
            return this .waitForElementPresent('@loginButton', timeout)
        },

        search: function(pSearch){
            return this .waitForElementPresent('@searchBar',timeout)
                .setValue('@searchBar', pSearch)
                .waitForElementPresent('@searchButton', timeout)
                .click('@searchButton')
        }

        

    
}

var timeout = 25000;
module.exports = {
    commands: [meliHomePageCommands],
    url: 'http://www.mercadolibre.com.uy',
    elements: {

        loginButton: {
            selector: '#nav-header-menu > a:nth-child(2)'
        },
        body: {
            selector: 'body'
        },
        searchBar: {
            selector: '.nav-search > input'
        },
        searchButton: {
            selector: 'boton'
        }
    }
  }