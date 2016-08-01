
var apiKey = "4a72235bd9d300a54091398f3d59cef9";

//GET Daily Activity Summary
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0
mm.toUpperCase();
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
document.write(today);

var dailySummary = new XMLHttpRequest();
dailySummary.open("GET", "https://api.fitbit.com/1/user/[229VDW]/activities/date/[today].json", false);
dailySummary.send();
console.log(dailySummary.status);
console.log(dailySummary.statusText);

dailySummaryText = JSON.parse(dailySummary.responseText);

//then print the data like this
//dailySummaryText.summary.[1].firstName + " " + obj.employees[1].lastName;

//GET Lifetime Stats

var lifetimeStats = new XMLHttpRequest();
lifetimeStats.open("GET", "https://api.fitbit.com/1/user/[229VDW]/activities.json", false);
lifetimeStats.send();
console.log(lifetimeStats.status);
console.log(lifetimeStats.statusText);

lifetimeStatsText = JSON.parse(lifetimeStats.responseText);


//An HTTP request is made up of three parts:

//The request line, which tells the server what kind of request is being sent (GET, POST, etc.) and what resource it's looking for;
//The header, which sends the server additional information (such as which client is making the request)
//The body, which can be empty (as in a GET request) or contain data (if you're POSTing or PUTing information, that information is contained here).



//A successful request to the server results in a response, which is the message the server sends back to you, the client.

//The HTTP response structure mirrors that of the HTTP request. It contains:

//A response line, which includes the three-digit HTTP status code;

//A header, which includes further information about the server and its response;

//The body, which contains the text of the response.


//Here we've created a JSON object in demo, which represents the kind of information you might get back from an HTTP request. 
//Reading from demo is just like reading JSON sent by a server.

//var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

//var json = JSON.parse(demo);
//console.log(json);