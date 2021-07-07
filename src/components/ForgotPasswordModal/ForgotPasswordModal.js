/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { forgot } from '../../services/Services';

const Section = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 300px;
  left: calc(50% - +150px);
  background: #012a46;
  top: calc(50% - +150px);
  height: 300px;
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

const ForgotPassord = (email) => {
  const data = { email };
  // TODO - CREATE ERROR AND SUCCESS MSG
  forgot(data).then((res) => console.log(res));
};

const ForgotPasswordModal = (props) => {
  const { open, close } = props;
  const [email, setEmail] = useState('');

  if (!open) {
    return null;
  }

  return (
    <Section>
      <CloseButton type="button" value="x" onClick={() => close(false)} />
      <Form onSubmit={(e) => {
        e.preventDefault();
        ForgotPassord(email);
      }}
      >
        <TextInput type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <SubmitButton type="submit" value="Reset password" />
      </Form>
    </Section>
  );
};

export default ForgotPasswordModal;
