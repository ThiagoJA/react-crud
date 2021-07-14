/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { createAccount } from '../../services/Services';

const Section = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 400px;
  left: calc(50% - +200px);
  background: #012a46;
  top: calc(50% - +200px);
  height: 400px;
  border-radius: 10px;
  border: 2px solid #3e95cc;
`;

const CloseButton = styled.input`
  align-self: flex-end;
  border: none;
  background: transparent;
  margin: 10px;
  padding:12px;
  font-size: 16px;
  color: #3e95cc;
  font-weight: bold;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 60%;
`;

const SubmitButton = styled.input`
  background: #3de6af;
  color: #00121e;
  padding: 6px;
  width: 150px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #31e0a7;
    box-shadow: 0px 0px 15px 9px rgba(61,230,175,0.2);
  }
`;

const TextInput = styled.input`
  border-radius: 4px;
  border: 2px solid #3e95cc;
  padding: 12px 12px 12px 32px;
  background-color: #082336;
  transition: all 0.2s;
  color: #3e95cc;
  margin-bottom: 16px;
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

const CreateAccount = (email, name, password, phone, close) => {
  const data = {
    email,
    name,
    password,
    phone,
  };

  // eslint-disable-next-line no-alert
  createAccount(data).then(() => close(false)).catch((err) => window.alert(err));
};

const RegisterModal = (props) => {
  const { open, close } = props;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  if (!open) {
    return null;
  }

  return (
    <Section>
      <CloseButton type="button" value="x" onClick={() => close(false)} />
      <Form onSubmit={(e) => {
        e.preventDefault();
        CreateAccount(email, name, password, phone, close);
      }}
      >
        <TextInput type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <TextInput type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <TextInput type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <TextInput type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        <SubmitButton type="submit" value="Register" />
      </Form>
    </Section>
  );
};

export default RegisterModal;
