import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet ,TextInput} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function CarDamageForm() {
  const [damages, setDamages] = useState([]);
  const [text, setText] = useState('');

  const handleCheckboxChange = (name, checked) => {
    const updatedDamages = checked
      ? [...damages, name]
      : damages.filter((item) => item !== name);
    setDamages(updatedDamages);
  };

  const handleSubmit = () => {
    // Gérer la soumission du formulaire
    console.log('Dommages:', damages);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Informations sur les dommages du véhicule</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.column}>
          <CheckBox
            title="Avant    conducteur"
            checked={damages.includes('avantconducteur')}
            onPress={() => handleCheckboxChange('avantconducteur', !damages.includes('avantconducteur'))}
            containerStyle={styles.checkbox}
          />
                    <CheckBox
            title="Côté     Conducteur"
            checked={damages.includes('coteconducteur')}
            onPress={() => handleCheckboxChange('coteconducteur', !damages.includes('coteconducteur'))}
            containerStyle={styles.checkbox}
          />
                 <CheckBox
            title="             Conducteur  Arrière"
            checked={damages.includes('conducteurarriere')}
            onPress={() => handleCheckboxChange('conducteurarriere', !damages.includes('coteconducteurarriere'))}
            containerStyle={styles.checkbox}
          />
          <CheckBox
            title="Arrière"
            checked={damages.includes('arriere')}
            onPress={() => handleCheckboxChange('arriere', !damages.includes('arriere'))}
            containerStyle={styles.checkbox}
          />
        </View>
        <Image source={require('./fnol-car.png')} style={styles.carImage} />
        <View style={styles.column}>
          <CheckBox
            title="Devant"
            checked={damages.includes('devant')}
            onPress={() => handleCheckboxChange('devant', !damages.includes('devant'))}
            containerStyle={styles.checkbox}
          />
          <CheckBox
            title="Passer Devant"
            checked={damages.includes('passerdevant')}
            onPress={() => handleCheckboxChange('passerdevant', !damages.includes('passerdevant'))}
            containerStyle={styles.checkbox}
          />
                    <CheckBox
            title="Côté Passe"
            checked={damages.includes('cotepasse')}
            onPress={() => handleCheckboxChange('cotepasse', !damages.includes('cotepasse'))}
            containerStyle={styles.checkbox}
          />
          <CheckBox
            title="Passer l'arrière"
            checked={damages.includes('passerarriere')}
            onPress={() => handleCheckboxChange('passerarriere', !damages.includes('passerarriere'))}
            containerStyle={styles.checkbox}
          />
        </View>
      </View>
    <View>
    <Text  style={styles.tbox}>Observations</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Entrez du texte"
      />
    </View>

      <Button title="Confirmer la réclamation" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:10,
    padding: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    right:15,
    color:'#18518C',

  },
  tbox:{
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 0
    ,
    right:15,
    color:'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
   
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    marginBottom:10,
    alignItems: 'flex-start',
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginVertical: 15,
    marginBottom:40,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 9,
    padding: 10,
    width:360,
    height:70,
    marginVertical: 10,
    right:20,
  },
  carImage: {
    height: 360,
    width: 150,
    marginHorizontal: 20,
  },
});
