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
      console.log(response);
    })();

    function getElements(response) {
      $('.showDoctor').show();
      $('ul#doctor1').append('<il>' + `${response.data[0].profile.first_name}` + '</il>');
      $('ul#doctor1').append(`<il>` + `${response.data[0].profile.last_name}` + `</il>`);

    const sortResponse = function(response)
      response.data.foreach(function(respond) {
        $('ul#doctorList').append(`${respond.profile.first_name}`);
        $('ul#doctorList').append(`${respond.profile.first_name}`);
      })

    }
  });

});
