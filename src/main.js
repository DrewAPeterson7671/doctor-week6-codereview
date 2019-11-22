import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './../src/doctor-backend.js';

$(document).ready(function(){
  $('.forminput').submit(function(event) {
    event.preventDefault();

    const symptom = $('#symptominput').val();
    console.log(symptom);
    $('#symptominput').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorBySymptom(symptom);
      getElements(response);
    })();

    function getElements(response) {
      $('.showDoctor').text(`${response.data[0].profile.last_name}`);
    }
  });

});
