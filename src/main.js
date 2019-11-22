import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './../src/doctor-backend.js';

$(document).ready(function(){
  $('#symptominput').submit(function() {
    const symptom = $('#symptominput').val();
    $('#symptominput').val("");

    (async () => {
      let doctorService = new DoctorService();
      const response = await doctorService.getDoctorBySymptom(symptom);
      getElements(response);
    })();

    function getElements(response) {
      $('.showDoctor').text(`${response.data[0].profile.last_name}`);  /// NEEDS WORK
    }
  });

});
