$(document).ready(function() {

  'use strict';

  $(".text_process").click(function(){

      $.ajax({
          url: 'https://yoda.p.mashape.com/yoda?sentence=', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
          headers: {'X-Mashape-Key': 'E6ybhccsTZmshUkwhkwrkaeknizDp1fVtxzjsnzmLq3sBvNcM5'},
          type: 'GET', // The HTTP Method
          data: {sentence: $("#yoda_input").val()}, // Additional parameters here
          datatype: 'json',
          success: function (data) {
              $("#output").html(data);
          },
          error: function (err) {
              alert(err);
          },
          beforeSend: function (xhr) {
              xhr.setRequestHeader("X-Mashape-Authorization", "E6ybhccsTZmshUkwhkwrkaeknizDp1fVtxzjsnzmLq3sBvNcM5"); // Enter here your Mashape key
          }
      });

  });
});
