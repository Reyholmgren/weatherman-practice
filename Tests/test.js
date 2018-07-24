


let searchFunction= (browser, data) => {
    browser 
        .setValue('@input', 'Tucson, Arizona')
        .click('@btn')
        .waitForElementPresent('@output', 5000)
        .expect.element('@output').text.to.equal('Tucson')
 }


module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')
    },
    after: browser => {
        browser.end()
    },

    'check city state search': browser => {
        browser
            .setValue('input[class="enter-location__input"]', 'Tucson, Arizona')
            .click('button')
            .waitForElementPresent('.current-weather__location', 5000)
            .expect.element('.current-weather__location').text.to.equal('Tucson')
    },

    'check empty search': browser => {
        browser
            .setValue('input[class="enter-location__input"]', '   ')
            .click('button')
            .waitForElementPresent('h3[class="error-message__message"]', 5000)
            .expect.element('h3[class="error-message__message"]').text.to.equal('There was a problem fetching the weather!')
    },
   
    'check zip code search': browser => {
        browser
            .setValue('input[class="enter-location__input"]', '84070')
            .click('button')
            .waitForElementPresent('.current-weather__location', 5000)
            .expect.element('.current-weather__location').text.to.equal('Salt Lake City')



    },

    'smoke test empty search': browser => {
        browser
            .setValue('input[class="enter-location__input"]', '   ')
            .click('button')
            .waitForElementPresent('h3[class="error-message__message"]', 5000)
            .expect.element('h3[class="error-message__message"]').text.to.equal('There was a problem fetching the weather!')
        browser
            .click('button[class="error-message__try-again"]')
        },

    'smoke test': browser => {
        browser
            .setValue('input[class="enter-location__input"]', 'Istanbul')
            .click('button')
            .waitForElementPresent('div[class="current-weather__weather"]', 5000)
            .expect.element('.current-weather__location').text.to.equal('Istanbul')
        browser
            .click('button[class="current-weather__search-again"]')



    }      
}