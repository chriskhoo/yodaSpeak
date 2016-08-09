$(function() {

    'use strict';

    $(".text_process").click(function() {
        $.ajax({
            // where the data live
            url: 'https://yoda.p.mashape.com/yoda',
            headers: {
              'X-Mashape-Key': 'E6ybhccsTZmshUkwhkwrkaeknizDp1fVtxzjsnzmLq3sBvNcM5',
              'Accept': 'text/plain'
            },
            type: 'GET',
            data: {sentence: $("#yoda_input").val()},
            dataType: 'html',
            beforeSend: function(xhr) {
              xhr.setRequestHeader("X-Mashape-Authorization", "E6ybhccsTZmshUkwhkwrkaeknizDp1fVtxzjsnzmLq3sBvNcM5");
            }
          }).done(successFunction)
            .fail(failFunction);
      });


      //success function
      function successFunction(data, dataType, status) {
        $("#output").text(data);
      };


      // fail function
      function failFunction(request, textStatus, errorThrown) {
          alert('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      };
    });
