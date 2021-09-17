import * as React from 'react';
import { TextField, Button } from '@material-ui/core';

export const Form = ({ children, ...restProps }) => {
  return (
    <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <form className="tc ma4 flex flex-column" {...restProps}>
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
Form.Input = ({ label, ...restProps }) => {
  return (
    <div className="ma3">
      <TextField label={label} variant="outlined" {...restProps} />
    </div>
  );
};
Form.Button = ({ children, ...restProps }) => {
  return (
    <Button variant="contained" type="submit" {...restProps}>
      {children}
    </Button>
  );
};
Form.SmallText = ({ children, ...restProps }) => {
  return <p className="no-underline white mt3 ">{children}</p>;
};
