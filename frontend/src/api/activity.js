import axios from "axios";

export const getActivities = () => {
  console.log('ENTERED');
  axios.get('/api/v1/activities')
  .then(function (response) {
    // handle success
    console.log({ response });
  })
  .catch(function (error) {
    // handle error
    console.error({ error });
  })
  .then(function () {
    // handle success
    console.log('ERROR');
  })
}