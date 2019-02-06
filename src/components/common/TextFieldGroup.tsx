import * as React from 'react';
import classnames from 'classnames';
// import PropTypes from 'prop-types';

interface Props {
  name: string,
  placeholder: string,
  value: string,
  label?: string,
  error?: string,
  info?: string,
  type?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  disabled?: boolean
}

const TextFieldGroup: React.SFC<Props> = (props) => {
  return (
    <div className="form-group col-6">
      <input
        type={props.type}
        className={classnames('form-control form-control formInput', {
          'is-invalid': props.error
        })}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      {props.info && <small className="form-text text-muted formInfo">{props.info}</small>}
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

// TextFieldGroup.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   info: PropTypes.string,
//   error: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   disabled: PropTypes.string
// };

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
