searchData = {
    searchValue = '84106',
    returnedValue = 'Salt Lake City'
}

let searchFunction = (browser, data) => {
    browser
        .setValue('@searchBar', data.searchValue)
        .click('@submitButton')
        .expect.element('@result').text.to.equal(data.returnedValue)
}

searchFunction(myPage, searchData)