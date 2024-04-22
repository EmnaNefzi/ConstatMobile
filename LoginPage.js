import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,onPress} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import App from '../App';
import HomePage from './HomePage';
import VehiculeA from './VehiculeA';

export default function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



    const goToVehiculeA = () => {
      navigation.navigate('VehiculeA');
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
        placeholder="Votre Mot De Passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Connecter" onPress={goToVehiculeA} />
    </View>
  );
};



