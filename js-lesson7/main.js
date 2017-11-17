var myHeading = document.querySelector('h1');


$('#button').on('click', function (){

  var myInputText = document.getElementById('textInput').value;

  myHeading.textContent = myInputText;
})
