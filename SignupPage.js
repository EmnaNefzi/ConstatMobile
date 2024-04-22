import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import App from '../App';
import HomePage from './HomePage';


export default function SignupPage (){
    
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Signing up...');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

  };

  return (
    <View style={{    flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>
      <TextInput
        style={{    width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        paddingHorizontal: 10}}
        placeholder="Votre Nom"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={{    width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        paddingHorizontal: 10}}
        placeholder="Votre Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{    width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        paddingHorizontal: 10}}
        placeholder="Votre Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Connecter" onPress={handleSignUp} />
    </View>
  );
};

