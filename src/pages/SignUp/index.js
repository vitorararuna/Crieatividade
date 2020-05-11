import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '../../assets/crie.png';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(){
    
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next" //adiciona um "next" no teclado. E a função que é disparada quando ele é clicado é: onSubmitEditing
            onSubmitEditing={() => emailRef.current.focus()} //drecionapara o input de senha
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next" //adiciona um "next" no teclado. E a função que é disparada quando ele é clicado é: onSubmitEditing
            onSubmitEditing={() => passwordRef.current.focus()} //drecionapara o input de senha
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        {/* Navigation aqui é como se fosse o Link em ReactJs*/}
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já Tenho Conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}