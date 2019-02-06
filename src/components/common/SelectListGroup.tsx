import * as React from 'react';
import classnames from 'classnames';
// import PropTypes from 'prop-types';

interface Props {
  name: string,
  value: string,
  error?: string,
  info?: string,
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  options: {
    label: string,
    value: string
  }[]
}

const SelectListGroup: React.SFC<Props> = (props) => {
  const selectOptions = props.options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group col-6">
      {props.label && <label className="formLabel" htmlFor={props.name}>{props.label}</label>}
      <select
        className={classnames('form-control form-control formSelect', {
          'is-invalid': props.error
        })}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        {selectOptions}
      </select>
      {props.info && <small className="form-text text-muted">{props.info}</small>}
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

export default SelectListGroup;
