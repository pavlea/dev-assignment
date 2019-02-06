import * as React from 'react';
import TextFieldGroup from './common/TextFieldGroup';
import SelectListGroup from './common/SelectListGroup';

interface State {
  firstName: string,
  lastName: string
  email: string,
  password: string,
  password2: string,
  gender: string,
  country: string,
  postalCode: string,
  city: string,
  companyName: string
  errors: object
}

interface Props {
  event: Array<object>
}

class Register extends React.Component<any, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      gender: 'Male',
      country: '',
      postalCode: '',
      city: '',
      companyName: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {

  }

  onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value } as any);
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  }

  render() {
    const { errors } = this.state;
    const options = [
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' }
    ]
    const countries = [
      { label: 'Croatia', value: 'Croatia' },
      { label: 'Spain', value: 'Spain' },
      { label: 'Switzerland', value: 'Switzerland' }
    ]

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-12 m-auto">
              <p className="text-left formTitle">
                <i className="fas fa-user" /> Participant 1
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-row">
                  <TextFieldGroup
                    placeholder="First name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                  // error={errors.firstName}
                  />
                  <TextFieldGroup
                    placeholder="Last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                  // error={errors.lastName}
                  />
                </div>
                <div className="form-row">
                  <TextFieldGroup
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    info="Please double check your email adress."
                  // error={errors.email}
                  />
                  <SelectListGroup
                    label="Gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.onChange}
                    options={options}
                  // error={errors.gender}
                  />
                </div>
                <div className="form-row">
                  <SelectListGroup
                    label="Country"
                    name="country"
                    value={this.state.country}
                    onChange={this.onChange}
                    options={countries}
                  // error={errors.country}
                  />
                  <TextFieldGroup
                    placeholder="Postal code"
                    name="postalCode"
                    value={this.state.postalCode}
                    onChange={this.onChange}
                  // error={errors.postalCode}
                  />
                </div>
                <div className="form-row">
                  <TextFieldGroup
                    placeholder="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                  // error={errors.city}
                  />
                  <TextFieldGroup
                    placeholder="Company name"
                    name="companyName"
                    value={this.state.companyName}
                    onChange={this.onChange}
                  // error={errors.companyName}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
