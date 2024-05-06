import React, { useState } from 'react';
import { View, TextInput, Button, Alert , Image,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToVehiculeA = () => {
    if (email.trim() === '' || password.trim() === '') {
      // Si l'email ou le mot de passe est vide, affichez une alerte
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    } else {
      // Sinon, naviguez vers la page VehiculeA
      navigation.navigate('VehiculeA');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./cm.png')} style={{ height: 150, width: 150, top: -30 }} />
      <Text style={{  fontWeight: 'bold', marginBottom:5, marginHorizontal: 10, right:115}}>Adresse E-mail :</Text>
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 2, borderColor: 'gray', marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Votre Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={{  fontWeight: 'bold', marginBottom:5, marginHorizontal: 10, right:115}}>Mot De Passe :</Text>
      <TextInput
        style={{ width: '80%', height: 40, borderWidth:2, borderColor: 'gray', marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Votre Mot De Passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Connecter" onPress={goToVehiculeA}  color="#5239A0" />
    </View>
  );
}
