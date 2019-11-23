import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './../src/doctor-backend.js';

$(document).ready(function(){
  $('#searchbutton').click(function(event) {
    event.preventDefault();

    $("ul.showDoctor").empty();

    const symptom = $('#symptominput').val();
    $('#symptominput').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorBySymptom(symptom);
      getElements(response);
      // console.log(response);
      // console.log(response.data[0].practices[0].website);
    })();

    function getElements(response) {
      $('.showDoctor').show();
      $('ul#doctor1').append(`<li> ${response.data[0].profile.first_name}  ${response.data[0].profile.last_name} </li>`);
      $('ul#doctor1').append(`<li> ${response.data[0].practices[0].phones[0].number} </li>`);
      $('ul#doctor1').append(`<li> ${response.data[0].practices[0].visit_address.street} </li>`);
      $('ul#doctor1').append(`<li> ${response.data[0].practices[0].visit_address.city}, ${response.data[0].practices[0].visit_address.state} </li>`);
      $('ul#doctor1').append(`<li> ${response.data[0].practices[0].visit_address.zip} </li>`);
      $('ul#doctor1').append(`<li> ${response.data[0].practices[0].accepts_new_patients} </li>`);
      $('ul#doctor1').append(`<li> ${response.data[0].practices[0].website} </li>`);
      $('ul#doctor1').append(`<li> ${response.data[0].profile.image_url} </li>`);

      ///prob with phones - type of phone or fax

    }

    // const sortResponse = function(response) {
    //   response.data.foreach(function(respond) {
    //     $('ul#doctorList').append("<li>" + ${respond.profile.first_name} + "</li>");
    //     $('ul#doctorList').append(`${respond.profile.last_name}`);
    //   })
    // };

  });

});
