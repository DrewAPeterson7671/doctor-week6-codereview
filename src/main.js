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
      console.log(response.data[0].practices[0].phones[1].number);
    })();

    function getElements(response) {
      $('.showDoctor').show();
      $('ul#doctor1').append(`<li> ${response.data[0].profile.first_name}  ${response.data[0].profile.last_name} </li>`);
      $('ul#doctor1').append(`<li> ${response.data[0].practices[0].phones[0].number} </li>`);
    };

    // const sortResponse = function(response) {
    //   response.data.foreach(function(respond) {
    //     $('ul#doctorList').append("<li>" + ${respond.profile.first_name} + "</li>");
    //     $('ul#doctorList').append(`${respond.profile.last_name}`);
    //   })
    // };

  });

});
