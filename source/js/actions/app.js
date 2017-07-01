import advertisementsData from '../../assets/data/advertisements';

export const LOAD_ADVERTISEMENTS = 'TEST_ASYNC_ACTION_START';

// Test action

export function loadAdvertisements() {
  return {
    type: LOAD_ADVERTISEMENTS,
    payload: advertisementsData,
  };
}
