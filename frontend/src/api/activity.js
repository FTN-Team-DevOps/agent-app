import axios from "axios";

export const getActivities = () => {
  axios.get('/api/v1/activities')
  .then(function (response) {
    // handle success
    console.log({ response });
  })
  .catch(function (error) {
    // handle error
    console.error({ error });
  })
}