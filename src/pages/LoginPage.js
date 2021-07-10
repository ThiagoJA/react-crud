import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ForgotPasswordModal from '../components/ForgotPasswordModal/ForgotPasswordModal';
import { login } from '../services/Services';
import StoreContext from '../components/Store/Context';

const Login = (email, password, setPage, setToken) => {
  const data = { email, password };
  login(data).then((res) => {
    setToken(res.data.token);
    setPage(1);
  });
};

const Main = styled.main`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100vh;
  background: #00121e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.input`
  border-radius: 4px;
  border: 2px solid #3e95cc;
  padding: 12px 12px 12px 32px;
  background-color: #082336;
  transition: all 0.2s;
  color: #3e95cc;
  margin-top: 16px;
  ::placeholder {
    color: #3e95cc;
  }
  &:focus {
    border-color: #28a3f1;
    outline: none;
    box-shadow: 0px 0px 25px 9px rgba(28,159,255,0.5);
    ::placeholder {
      color: #28a3f1;
    }
  }
`;

const SubmitButton = styled.input`
  background: #3de6af;
  color: #00121e;
  padding: 6px;
  width: 100px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #31e0a7;
    box-shadow: 0px 0px 15px 9px rgba(61,230,175,0.2);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormFooter = styled.footer`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgotPassword = styled.input`
  border: none;
  background: transparent;
  color: #3e95cc;
  cursor: pointer;
  text-align: right;
  &:hover {
    color: #28a3f1;
  }
`;

// eslint-disable-next-line react/prop-types
const LoginPage = ({ setPage }) => {
  const { setToken } = useContext(StoreContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  return (
    <>
      <Main>
        <section>
          <Form onSubmit={(e) => {
            e.preventDefault();
            Login(email, password, setPage, setToken);
          }}
          >
            <TextInput email type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <TextInput password type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <FormFooter>
              <SubmitButton type="submit" value="Login" />
              <ForgotPassword value="Forgot password?" onClick={() => setShowForgotPasswordModal(true)} />
            </FormFooter>
          </Form>
        </section>
      </Main>
      <ForgotPasswordModal open={showForgotPasswordModal} close={setShowForgotPasswordModal} />
    </>
  );
};

export default LoginPage;
