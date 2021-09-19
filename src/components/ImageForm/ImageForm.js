import React from 'react';
import './ImageForm.css';
import { Button } from '@material-ui/core';

export const ImageForm = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

ImageForm.Text = ({ children, ...restProps }) => {
  return (
    <p className="f3 tc" {...restProps}>
      {children}
    </p>
  );
};
ImageForm.Text = ({ children, ...restProps }) => {
  return (
    <p className="f3 tc" {...restProps}>
      {children}
    </p>
  );
};
ImageForm.Container = ({ children }) => {
  return (
    <div className="center">
      <div className="form pa4 br3 shadow-5">{children}</div>
    </div>
  );
};
ImageForm.Input = ({ children, ...restProps }) => {
  return (
    <input
      className="f4 pa2 w-70 center "
      type="text"
      placeholder="Insert Image URL"
      {...restProps}
    />
  );
};
ImageForm.Button = ({ children, ...restProps }) => {
  return (
    <Button
      variant="contained"
      className="w-30 grow f4 link ph3  "
      {...restProps}
    >
      {children}
    </Button>
  );
};
