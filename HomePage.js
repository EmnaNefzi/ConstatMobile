// components/HomePage.js

import React from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  const goToLoginPage = () => {
    navigation.navigate('LoginPage');
  };

  const goToSignupPage = () => {
    navigation.navigate('SignupPage');
  };      

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('./cm.png')} style={{ height: 370, width: 430, top: -40 }} />
      <Text style={{ fontSize: 46, fontWeight: '800', color: 'black', left: 10, top: -40 }}>Bienvenue sur</Text>
      <Text style={{ marginVertical: 16, fontSize: 30, fontWeight: '700', color: 'black', left: 20, top: -50 }}>Constat-Mobile </Text>
      <Text style={{ fontSize: 17, color: 'black', marginVertical: 22, marginHorizontal: 10, top: -70 }}>Constat-Mobile c'est une application conçue pour simplifier le processus, elle est l'équivalent numérique du constat amiable d'accidents automobiles, rendant l'opération plus fluide et efficace.</Text>
      <Button title="Se Connecter" onPress={goToLoginPage} color="#5239A0" />
      <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'center' }}>
        <Pressable onPress={goToSignupPage}>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', margin: 4 }}>Créer nouveau compte</Text>
        </Pressable>
      </View>
    </View>
  );
}
