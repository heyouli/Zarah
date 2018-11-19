// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Map
var mymap = L.map('mapid').setView([39.9394040, 116.4000926], 13);

var circle = L.circle([39.9394040, 116.4000926], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(mymap);

var popup = L.popup()
    .setLatLng([39.9394040, 116.4000926])
    .setContent("Cafe Zarah")
    .openOn(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaGV5b3VsaSIsImEiOiJjam5yYXlrcWswNXhqM2twcDdybGVkcjBkIn0.J-EmBvUasDMfvES2SEVldQ'
}).addTo(mymap);

$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate( {
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
        return false;
        }
  });

  //Tooltips
  $(function () {
    $("#item1").tooltip();
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //Navbar
  $('.navbar-nav a').on('click', function () {
        $(".navbar-toggle").click()
  });


  //Submit
  $('#contact_button').on('click', function() {
    var comment = $(".message_box").val();
    var comment = $(".email_box").val();
    if ($(".message_box").val()==="") {
      $(".message_box").css("border", "1px solid red");
      $('#visible-redmessage').html("Don't forget to write me a message!");
    }
    if ($(".email_box").val()==="") {
      $(".email_box").css("border", "1px solid red");
      $('#visible-redemail').html("Don't forget your email!");
    }
    else if ($(".message_box").val()==="") {
      $(".message_box").css("border", "1px solid red");
      $('#visible-redmessage').html("Don't forget to write me a message!");
    }
    else {
      $('#visible-comment').html("Thank you for your message!");
      $('.message_box').hide("duration");
      $('.form-control').hide("duration");
      $('.contact_label').hide("duration");
      $("#char_count").hide("duration");
      $('#visible-redmessage').hide("duration");
      $('#visible-redemail').hide("duration");
      $('#contact_button').hide("duration");
    }
    return false;
    });
  });

  // work section
  for(var i = 0; i < works.length; ++i ) {
    $("#work").append("\
      <div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>\
        <a href='" + works[i].url + "' class='work-img'>\
          <img class='img-fluid' src='" + works[i].pic + "'>\
          <span class='info'><p class='proj-title'><br> " + works[i].title + "</p></span>\
          <span><p class='events-date'>" + works[i].date + "</p></span>\
          <span><p class='events-name'>" + works[i].title + "</p></span>\
        </a>\
      </div>\
    ");
  };

  // work section 2
  for(var i = 0; i < works.length; ++i ) {
    $("#work2").append("\
      <div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>\
        <a href='" + works[i].url + "' class='work-img2'>\
          <img class='img-fluid' src='" + works[i].pic + "'>\
          <span class='info'><p class='proj-title'><br> " + works[i].title + "</p></span>\
        </a>\
      </div>\
    ");
  };

  //Letter count
  $(".message_box").on("keyup", function() {
      var name = "string";
      var charCount = $(".message_box").val().length; //here we set the length of the content of the textarea to a variable
      $("#char_count").html(charCount); //here we show a running character count to the user
      if(charCount > 50) {
        $("#char_count").css("color", "red"); // need to turn character count red
      }
    else {
      $("#char_count").css("color", "black"); // need it to be black
    };
})
