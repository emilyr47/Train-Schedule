var config = {
  apiKey: "AIzaSyD5TFXIwyYGOCUhsE8cPN1mccVSnITu6iw",
  authDomain: "train-schedule-cdcff.firebaseapp.com",
  databaseURL: "https://train-schedule-cdcff.firebaseio.com",
  projectId: "train-schedule-cdcff",
  storageBucket: "train-schedule-cdcff.appspot.com",
  messagingSenderId: "409342800997"
};
firebase.initializeApp(config);
var dataRef = firebase.database();

var name = $("#name").val();
var destination = $("#destination").val();
var frequency = $("#frequency").val();
var arrival = $("#arrival").val();
var minutes = $("#minutes").val();



  // Train #1:
  var frequency = 30; // how often the train arrives
  var time1 = "4:45"; // time of first arrival of the day is at 4:45am
  $("#frequency").html(frequency);
  var time1Converted = moment(time1, "H:mm").subtract(1, "years"); // make sure it comes before current time
  var currentTime = moment(); // retrieving current time
  var diffTime = moment().diff(moment(time1Converted), "minutes"); // calculating the difference between the times to find the minutes until arrival
  var tRemainder = diffTime % frequency; // finding the difference
  var tMinutesTillTrain = frequency - tRemainder; // setting the minutes until arrival
  $("#minutes").html(tMinutesTillTrain);
  var nextTrain = moment().add(tMinutesTillTrain, "minutes"); // setting the arrival time
  $("#arrival").html(moment(nextTrain).format("h:mm"));
  
  // Train #2:
  var frequency = 5; // how often the train arrives
  var time1 = "4:30"; // time of first arrival of the day is at 4:45am
  $("#frequency2").html(frequency);
  var time1Converted = moment(time1, "H:mm").subtract(1, "years"); // make sure it comes before current time
  var currentTime = moment(); // retrieving current time
  var diffTime = moment().diff(moment(time1Converted), "minutes"); // calculating the difference between the times to find the minutes until arrival
  var tRemainder = diffTime % frequency; // finding the difference
  var tMinutesTillTrain = frequency - tRemainder; //setting the minutes until arrival
  $("#minutes2").html(tMinutesTillTrain);
  var nextTrain = moment().add(tMinutesTillTrain, "minutes"); // setting the arrival time
  $("#arrival2").html(moment(nextTrain).format("h:mm"));
  
  // Train #3:
  var frequency = 20; // how often the train arrives
  var time1 = "4:40"; // time of first arrival of the day is at 4:45am
  $("#frequency3").html(frequency);
  var time1Converted = moment(time1, "H:mm").subtract(1, "years"); // make sure it comes before current time
  var currentTime = moment(); // retrieving current time
  var diffTime = moment().diff(moment(time1Converted), "minutes"); // calculating the difference between the times to find the minutes until arrival
  var tRemainder = diffTime % frequency; // finding the difference
  var tMinutesTillTrain = frequency - tRemainder; //setting the minutes until arrival
  $("#minutes3").html(tMinutesTillTrain);
  var nextTrain = moment().add(tMinutesTillTrain, "minutes"); // setting the arrival time
  $("#arrival3").html(moment(nextTrain).format("h:mm"));
  
  // Train #4:
  var frequency = 15; // how often the train arrives
  var time1 = "4:35"; // time of first arrival of the day is at 4:45am
  $("#frequency4").html(frequency);
  var time1Converted = moment(time1, "H:mm").subtract(1, "years"); // make sure it comes before current time
  var currentTime = moment(); // retrieving current time
  var diffTime = moment().diff(moment(time1Converted), "minutes"); // calculating the difference between the times to find the minutes until arrival
  var tRemainder = diffTime % frequency; // finding the difference
  var tMinutesTillTrain = frequency - tRemainder; //setting the minutes until arrival
  $("#minutes4").html(tMinutesTillTrain);
  var nextTrain = moment().add(tMinutesTillTrain, "minutes"); // setting the arrival time
  $("#arrival4").html(moment(nextTrain).format("h:mm"));
  
  // Train #5:
  var frequency = 10; // how often the train arrives
  var time1 = "4:25"; // time of first arrival of the day is at 4:45am
  $("#frequency5").html(frequency);
  var time1Converted = moment(time1, "H:mm").subtract(1, "years"); // make sure it comes before current time
  var currentTime = moment(); // retrieving current time
  var diffTime = moment().diff(moment(time1Converted), "minutes"); // calculating the difference between the times to find the minutes until arrival
  var tRemainder = diffTime % frequency; // finding the difference
  var tMinutesTillTrain = frequency - tRemainder; //setting the minutes until arrival
  $("#minutes5").html(tMinutesTillTrain);
  var nextTrain = moment().add(tMinutesTillTrain, "minutes"); // setting the arrival time
  $("#arrival5").html(moment(nextTrain).format("h:mm"));
  
  // Add Your Own Train:
  $("#submit").click(function(){
  var name = $("#form-name").val();
  var destination = $("#form-destination").val();
  var time1 = $("#form-time").val();
  var frequency = $("#form-frequency").val();
  var time1Converted = moment(time1, "H:mm").subtract(1, "years"); // make sure it comes before current time
  var currentTime = moment(); // retrieving current time
  var diffTime = moment().diff(moment(time1Converted), "minutes"); // calculating the difference between the times to find the minutes until arrival
  var tRemainder = diffTime % frequency; // finding the difference
  var tMinutesTillTrain = frequency - tRemainder; //setting the minutes until arrival
  //$("#minutes5").html(tMinutesTillTrain);
  var nextTrain = moment().add(tMinutesTillTrain, "minutes"); // setting the arrival time
  $("#arrival5").html(moment(nextTrain).format("h:mm"));
  $("#table").find('tbody')
      .append($('<tr>')
          .append($('<td>'))
          .append($('<td>').html(name))
          .append($('<td>').html(destination))
          .append($('<td>').html(frequency))  
          .append($('<td>').html(moment(nextTrain).format("h:mm")))
          .append($('<td>').html(tMinutesTillTrain))  
      ) 

      dataRef.ref().push({
    
        name: name,
        destination: destination,
        frequency: frequency.toString(),
        arrival: nextTrain.toString(),
        minutes: tMinutesTillTrain.toString(),
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });//end push to firebase
    

      console.log(name);   
  }); 