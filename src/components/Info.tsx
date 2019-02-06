import * as React from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

interface State {

}

interface Props {
  event: any
}
@inject("eventStore")
@observer
class Register extends React.Component<any, State> {
  constructor(props: Props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.eventStore.fetchEvent();
  }


  render() {
    let event = [];
    toJS(this.props.eventStore.event) ? event = toJS(this.props.eventStore.event.data) : false;

    let eventItems;
    event ? eventItems = (
      <div className="col-12 infoContent">
        <div className="col-6 float-left">
          <h4 className="conferenceTitle text-left">{event.event[0].name}</h4>
          <p className="locationText">{event.event[0].location.address}</p>
        </div>
        <div className="col-6 float-right">
          <img className="imgIRF float-right" src="https://res.cloudinary.com/disqnsnwa/image/upload/v1533051079/irf-logo.png" />
        </div>
      </div>
    ) : null;
    console.log('event data', event);
    return (
      <div className="info col-12">
        <div className="container">
          <div className="row">
            <div className="col-12 m-auto">
              {eventItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
