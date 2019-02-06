import { observable, runInAction } from 'mobx'
import eventApi from './eventApi';

class EventStore {
  @observable event = []
  @observable eventApi: any;

  constructor(eventApi: any) {
    this.eventApi = eventApi;
  }

  fetchEvent = async () => {
    this.event = await this.eventApi.fetchEvent();
    console.log('event1', event);
    // runInAction(() => {
    //   this.event = event;
    //   console.log('event2', event);
    // });
  }
}


const eventStore = new EventStore(eventApi);
export default eventStore;
