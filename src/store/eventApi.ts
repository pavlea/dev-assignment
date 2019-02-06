import axios from 'axios';

class EventApi {

  fetchEvent = () => axios.get('/events/event_info')
}

const eventApi = new EventApi();
export default eventApi;