import React, { useRef } from 'react';

import logo from '../../assets/crie.png';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Images
} from './styles';

export default function SignIn({ navigation }) { //navifgation = propriedade da página

  const passwordRef = useRef();

  function handleSubmit() {

  }

  return (
    <Background>
      <Container>
        <Images source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address" //tipo de teclado
            autoCorrect={false}
            autoCapitalize="none" //sem letra maúscula
            placeholder="Digite seu e-mail"
            returnKeyType="next" //adiciona um "next" no teclado. E a função que é disparada quando ele é clicado é: onSubmitEditing
            onSubmitEditing={() => passwordRef.current.focus()} //drecionapara o input de senha
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry //pontinhos de senha
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={() => { handleSubmit }}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}