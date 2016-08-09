$(function(){
  var $sentence = $('#sentence');
  var $submitBtn = $('#submitBtn');
  var $output = $('#yodaSpeak');
  var $loader = $('.loader');


  $submitBtn.on('click', function(e) {
    if($sentence.val()) {
    // prevent the default behavior of the link
    e.preventDefault();
    var yoda_url = "https://yoda.p.mashape.com/yoda?sentence=" + $sentence.val();

    // execute the AJAX request
    $.ajax({
      // where the data live
      url: yoda_url,
      headers: {'X-Mashape-Key': 'eacbvBkAmomshikYXvMKDr0B269ap16OPTRjsn9MD1cVErXCtc',
      'Accept': 'text/plain'
      },

      // what is their type
      dataType: 'text',
      // show the loader before making the request
      beforeSend: function() {
        $loader.show();
      }
    }).done(successFunction)
      .fail(failFunction)
      .always(alwaysFunction);
    }
    else {
      alert("Nothing to translate!");
    }
  });


  function alwaysFunction(){
    $loader.hide();
  }

  function successFunction(data){
    $output.css({"border-color": "#e8e8e8",
             "border-width":"1px",
             "border-style":"solid"});
    $output.html('<p>Yoda says: '+data+'</p>');
  }

  function failFunction(request, textStatus, errorThrown){
    $output.html('<p>'+textStatus+ ' occurred during your request: '+ errorThrown  +'</p>');
  }



});
