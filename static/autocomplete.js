// Get the <datalist> and <input> elements.
let dataList = document.getElementById('json-datalist');
let input = document.getElementById('input-movie');
let url = document.getElementById('url');

// Create a new XMLHttpRequest.
// var XMLHttpRequest = require('xhr2');
let request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(response) {
//   console.log(request.readyState)
  if (request.readyState === 4) {
//     console.log(request.status)
    if (request.status === 200) {
      // Parse the JSON
      let jsonOptions = JSON.parse(request.responseText);

      // Loop over the JSON array.
      Object.values(jsonOptions).forEach(function(item) {
        // Create a new <option> element.
        let option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });

      // Update the placeholder text.
      input.placeholder = "Enter movie here";
    } else {
      // An error occured :(
      input.placeholder = "Couldn't load options";
    }
  }
};

// Update the placeholder text.
input.placeholder = "Loading options...";

// Set up and make the request.
url = "static/titles.json"
request.open("GET", url, true);
request.send();