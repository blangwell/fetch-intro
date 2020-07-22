document.addEventListener('DOMContentLoaded', function() {
    const requestURL = 'https://randomuser.me/api/?results=5';
    let unorderedList = document.getElementById('people');

    function addPerson(person) {
        // create an li dom element and add it to ul
        let newPerson = document.createElement('li');
        // console.log('this is person name', person.name)
        console.log(person);
        newPerson.textContent = person.name.first + 
        ' ' + person.name.last + ' ' +
        ' | date of birth: ' + person.dob.date.slice(0, 10) + 
        ' | gender: ' + person.gender;
        unorderedList.appendChild(newPerson);
        // li should contain info about the person
    }

    fetch(requestURL) // fetch js built in function, pass in endpoint 
    .then(function(responseData) {
        // fetch will package response into an object
        // called fetch object. fetch object has methods
        // we can use to manipulate the response
        // most often use the .json() method to return
        // data in JSON format
        console.log(responseData)
        return responseData.json();
    }) 

    .then(function(jsonData) {
        // now we have the data in json format!
        let firstPerson = jsonData.results[0].name; // this accesses the first person 
        console.log('first person:', firstPerson.first, 
        firstPerson.last);
        let people = jsonData.results;
        // console.log(jsonData);
        people.forEach(addPerson);
    })

    .catch(function(error) {
        // any error encountered in the request or
        // the .then promise will be passed into 
        // this catch callback
        console.log('Oh no! its a error!', error);
    })
});


    // a promise handles something that may take a minute .then
    // .then once this request is fulfilled
      