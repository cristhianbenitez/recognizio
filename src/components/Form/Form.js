import * as React from 'react';
import { TextField } from '@material-ui/core';
import { Alert } from '@mui/material';

export const Form = ({ children, ...restProps }) => {
  return (
    <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <form className="tc ma4 flex flex-column" name="form" {...restProps}>
        {children}
      </form>
    </article>
  );
};

Form.Title = ({ children, ...restProps }) => {
  return (
    <h2 className="f3 f2-m white f2-l" {...restProps}>
      {children}
    </h2>
  );
};
Form.Input = ({ label, isSubmitted, value, ...restProps }) => {
  return (
    <div className="ma3">
      <TextField label={label} variant="outlined" {...restProps} />
    </div>
  );
};
Form.Button = ({ children, ...restProps }) => {
  return (
    <div>
      <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black pointer">
        {children}
      </button>
    </div>
  );
};
Form.SmallText = ({ children, error, ...restProps }) => {
  return <p className="no-underline white mt3 ">{children}</p>;
};
Form.Alert = ({ children, ...restProps }) => {
  return (
    <Alert variant="outlined" severity="error" {...restProps}>
      {children}
    </Alert>
  );
};
