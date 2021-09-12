import * as React from 'react';
import { TextField, Button } from '@material-ui/core';
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [userName, setUserName] = useState('');
// const [isSigned, setIsSigned] = useState(false);

// const onEmailChange = ({ target }) => {
//   setEmail(target.value);
// };
// const onPasswordChange = ({ target }) => {
//   setPassword(target.value);
// };
// const onUserNameChange = ({ target }) => {
//   setUserName(target.value);
// };
// const handleSignin = () => {
//   axios
//     .post('http://localhost:3000/signin', {
//       email: email,
//       password: password
//     })
//     .then(({ data }) => {
//       if (data === 'success') {
//         setIsSigned(true);
//       }
//     });
// };
// const handleSignUp = () => {
//   axios
//     .post('http://localhost:3000/signup', {
//       name: userName,
//       email: email,
//       password: password
//     })
//     .then(({ data }) => {
//       if (data.name && data.email && data.password) {
//         setIsSigned(true);
//       }
//     });
// };

export const Form = ({ children, ...restProps }) => {
  return (
    <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <form className="tc ma4" {...restProps}>
        {children}
      </form>
    </article>
  );
};

Form.Title = ({ children, ...restProps }) => {
  return <h2 className="f3 f2-m f2-l">{children}</h2>;
};
Form.Input = ({ label, ...restProps }) => {
  return (
    <div className="ma3">
      <TextField
        className=""
        id="outlined-basic"
        label={label}
        variant="outlined"
        {...restProps}
      />
    </div>
  );
};
Form.Button = ({ children, ...restProps }) => {
  return <Button variant="contained">{children}</Button>;
};
