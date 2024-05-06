import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg'; // Importez le composant QRCode


export default function VehiculeA2() {
  const navigation = useNavigation();
  const [nom, setNom] = useState('');
  const [permis, setPermis] = useState('');
  const [prenom, setPrenom] = useState('');
  const [delivre, setDelivre] = useState('');
  const [adresse, setAdresse] = useState('');
  const [marque, setMarque] = useState('');
  const [sens, setSens] = useState('');
  const [venant, setVenant] = useState('');
  const [allant, setAllant] = useState('');
  const [numimmatriculation, setNumimmatriculation] = useState('');
  const goBack = () => {
    navigation.goBack();
  };
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            iconStyle={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };


  const handleSuivant = () => {
    if (!nom || !prenom || !permis || !adresse || !delivre || !numimmatriculation || !marque || !sens || !venant || !allant) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    navigation.navigate('CarDamageForm', { // Navigation vers l'écran suivant
      nom,
      permis,
      prenom,
      delivre,
      adresse,
      sens,
      marque,
      venant,
      allant,
      numimmatriculation
        });
  };

  return (
    <View style={styles.container}>
      {/* Identité du Conducteur  */}
       <Text style={styles.label}> Identité du Conducteur  *</Text>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}> Nom :      </Text>
        <TextInput
          style={styles.input}
         
          value={nom}
          onChangeText={(text) => setNom(text)}
        /></View>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}>Prénom : </Text>
        <TextInput
          style={styles.input}
         
          value={prenom}
          onChangeText={(text) => setPrenom(text)}
        /></View>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}>Adresse :</Text>
        <TextInput
          style={styles.input}
         
          value={adresse}
          onChangeText={(text) => setAdresse(text)}
        /></View>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}>Permis de conduire N° :      </Text>
        <TextInput
          style={styles.inp}
         
          value={permis}
          onChangeText={(text) => setPermis(text)}
        /></View>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}> Délivré Le : </Text>
        <TextInput
          style={styles.inpu}
         
          value={delivre}
          onChangeText={(text) => setDelivre(text)}
        /></View>
          {/* Identité du Véhicule  */}
<Text style={styles.label}>Identité du Véhicule *</Text>
<View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}>Marque,Type :    </Text>
        <TextInput
          style={styles.in}
         
          value={marque}
          onChangeText={(text) => setMarque(text)}
        /></View>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}>N° d'immatriculation :         </Text>
        <TextInput
          style={styles.inp}
         
          value={numimmatriculation}
          onChangeText={(text) => setNumimmatriculation(text)}
        /></View>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}>Sens Suivi :</Text>
        <TextInput
          style={styles.inpu}
         
          value={sens}
          onChangeText={(text) => setSens(text)}
        /></View>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}>Venant de :</Text>
        <TextInput
          style={styles.inpu}
         
          value={venant}
          onChangeText={(text) => setVenant(text)}
        /></View>
        <View style={ { flexDirection: 'row' }}>
        <Text style={styles.labe}> Allant à : </Text>
        <TextInput
          style={styles.input}
         
          value={allant}
          onChangeText={(text) => setAllant(text)}
        /></View>

      {/* Boutons de navigation */}
      <View style={styles.buttonContainer}>
      <Button title="Retour" onPress={goBack} color="#5239A0" />
        <Button title="Suivant" onPress={handleSuivant} color="#5239A0" />
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F2F3F4',
    padding:19,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
      },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 30,
    fontWeight: 'bold',
    width: '100%',
    color:'#5239A0',

  },
  labe:{
    fontSize: 16,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  input: {
    borderWidth:1.8,
    marginBottom: 15,
    width:'85%',
     height: 39,
    borderColor: 'gray',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  inp: {
    borderWidth:1.8,
    marginBottom: 15,
    width:'50%',
     height: 36,
    borderColor: 'gray',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 17,
  },
  inpu: {
    borderWidth:1.8,
    marginBottom: 15,
    width:'80%',
     height: 36,
    borderColor: 'gray',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 17,
  },
  in: {
    borderWidth:1.8,
    marginBottom: 15,
    width:'70%',
     height: 36,
    borderColor: 'gray',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  dropdown: {
    margin: 12,
    height: 15,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});