'use strict'

// Call the init function!
init()

/**
 * Populate the HTML file with coffee
 */
function init() {
  loadJSON('offers.json', function (response) {
    let actual_JSON = JSON.parse(response)
    actual_JSON.map((coffee) => {
      console.log(coffee)
      let mainElement = document.querySelector('main')

      let article = document.createElement('article')
      let header = Object.assign(document.createElement('h2'), {
        textContent: coffee.title.toLowerCase(),
      })

      article.appendChild(header)
      mainElement.appendChild(article)
    })
  })
}

/**
 * Load an external JSON file and use a callback function for the returned data
 * @param {String} url points to the json file you want to load
 * @param {Function} callback will be called when the file is loaded
 */
function loadJSON(url, callback) {
  let xobj = new XMLHttpRequest()
  xobj.overrideMimeType('application/json')
  xobj.open('GET', url, true)
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      callback(xobj.responseText)
    }
  }
  xobj.send(null)
}
