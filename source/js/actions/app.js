import axios from 'axios';
import advertisementsData from '../../assets/data/advertisements';

export const LOAD_ADVERTISEMENTS = 'TEST_ASYNC_ACTION_START';

// Test action

export function loadAdvertisements() {

  return (dispatch) => {
    axios.get('/v1/advertisements').then(response => {
      console.log(response);
     dispatch({
        type: LOAD_ADVERTISEMENTS,
        payload: response.data
      })
    })
  };
}
