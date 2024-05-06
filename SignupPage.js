import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      // Si le nom, l'email ou le mot de passe est vide, affichez une alerte
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    } else {
      // Sinon, naviguez vers la page VehiculeA
      // Ajoutez ici la logique pour naviguer vers la prochaine page après l'inscription
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, borderColor: 'gray', marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Votre Nom"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, borderColor: 'gray', marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Votre Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderWidth: 1, borderColor: 'gray', marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Votre Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Connecter" onPress={handleSignUp} />
    </View>
  );
}
