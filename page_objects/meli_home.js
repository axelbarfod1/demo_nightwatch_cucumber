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
        },
        url: function(){
            return this.api.launchUrl;
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
        },
        searchButton: {
            selector: 'boton'
        }
    }
  }