// created function 
function display() {
    var url = `https://api.github.com/users/pratikmanta`
    
    // used fetch api to acquire and log data of given url
    fetch(url).then(data => data.json())
    .then(data => (console.log(data)));
}
display();      //function called


