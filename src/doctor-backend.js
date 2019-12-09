export class DoctorService {
  async getDoctorBySymptom(symptom) {
    try {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.505%2C-122.675%2C100&user_location=45.505%2C-122.675&skip=0&limit=10&user_key=66d85adbbafc413e0f405c3a40cc6234`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      if (error.ok === false) {
        return "Your search has the following errors" + error.status + error.statusText;
      }
      // console.error("There was an error handling your request: " + error.message);
    }
  }
}
