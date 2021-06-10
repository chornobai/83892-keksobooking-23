import{createClient} from './createClientFile.js';
const CLIENT_COUNT = 10;
const bookingData = new Array(CLIENT_COUNT).fill(null).map(() => createClient());

export{bookingData};
