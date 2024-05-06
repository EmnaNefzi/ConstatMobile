import React,{useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import MapView from 'react-native-maps';
const AssuranceData = [
  { label: 'Assurances STAR', value: 'STAR' },
  { label: 'COTUNACE', value: 'COTUNACE' },
  { label: 'AMI Assurances', value: 'AMI' },
  { label: 'Assurances BIAT', value: 'BIAT' },
  { label: 'Astree Assurances', value: 'Astree' },
  { label: 'Assurances At-Takafulia', value: 'At-Takafulia' },
  { label: 'Attijari Assurance', value: 'Attijari' },
  { label: 'CARTE Assurances', value: 'CARTE' },
  { label: 'COMAR Assurances', value: 'COMAR' },
  { label: 'Assurance Ctama', value: 'Ctama' },
  { label: 'El Amana Takafu', value: 'El Amana Takafu' },
  { label: 'GAT Assurances', value: 'GAT' },
  { label: 'Assurances Hayett', value: 'Hayett' },
  { label: 'BH Assurance', value: 'BH' },
  { label: 'Tunis Re', value: 'Tunis Re' },
  { label: 'ZITOUNA TAKAFUL', value: 'ZITOUNA TAKAFUL' },
  { label: 'UIB Assurances', value: 'UIB' },
];

const AgenceData = [
  { label: 'Centre Ville', value: 'centreVille' },
  { label: 'Manouba', value: 'Manouba' },
  { label: 'Chargia', value: 'Chargia' },
  { label: 'Sousse', value: 'Sousse' },
  { label: 'Bardo', value: 'Bardo' },
  { label: 'Bizerte', value: 'Bizerte' },
  { label: 'Sfax', value: 'Sfax' },
  { label: 'Nabeul', value: 'Nabeul' },
  { label: 'Touzeur', value: 'Touzeur' },
  { label: 'Béja', value: 'Béja' },
  { label: 'Siliana', value: 'Siliana' },
  { label: 'Jandouba', value: 'Jandouba' },
];
export default function VehiculeA() {
  const navigation = useNavigation();
  const [nom, setNom] = useState('');
  const [tel, setTel] = useState('');
  const [prenom, setPrenom] = useState('');
  const [policeass, setPoliceass] = useState('');
  const [adresse, setAdresse] = useState('');
  const [assurance, setAssurance] = useState(null);
  const [agence, setAgence] = useState(null);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const demanderDate = () => {
    const jour = parseInt(day);
    const mois = parseInt(month);
    const annee = parseInt(year);

    if (isNaN(jour) || isNaN(mois) || isNaN(annee)) {
      alert('Veuillez entrer une date valide.');
      return;
    }
    const date = new Date(annee, mois - 1, jour);
    return date.toDateString();
  };

  const demanderHeure = () => {
    const heure = parseInt(hour);
    const minutes = parseInt(minute);
    if (isNaN(heure) || isNaN(minutes) || heure < 0 || heure > 23 || minutes < 0 || minutes > 59) {
      alert('Veuillez entrer une heure valide.');
      return;
    }
    return `${heure}:${minutes}`;
  };

  const handleAfficherDateTime = () => {
    const date = demanderDate();
    const heure = demanderHeure();
    if (date && heure) {
      alert(`Date entrée : ${date}\nHeure entrée : ${heure}`);
    }
  };
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
    // Vérification que tous les champs sont remplis
    if (!nom || !tel || !prenom || !policeass || !adresse || !assurance || !agence) {
      // Afficher une alerte ou un message indiquant à l'utilisateur de remplir tous les champs
      alert('Veuillez remplir tous les champs.');
      return; // Arrêter l'exécution de la fonction si un champ est vide
    }
  
    // Si tous les champs sont remplis, naviguer vers l'écran suivant avec les données
    navigation.navigate('VehiculeA2', {
      nom,
      tel,
      prenom,
      policeass,
      adresse,
      assurance,
      agence
    });
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulaire Véhicule Assuré</Text>
       <View style={ { flexDirection: 'row' }}>
       <Text style={styles.labell}>Entrez la date : </Text>
    <View style={{ width: 100 }} /><Text style={styles.labell}>Entrez l'heure :</Text></View>
      <View style={styles.inputContainerr}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.inputt}
          placeholder="Jour"
          keyboardType="numeric"
          onChangeText={text => setDay(text)}
        />
        <TextInput
          style={styles.inputt}
          placeholder="Mois"
          keyboardType="numeric"
          onChangeText={text => setMonth(text)}
        />
        <TextInput
          style={[styles.inputt,{width:65}]}
          placeholder="Année"
          keyboardType="numeric"
          onChangeText={text => setYear(text)}
          
        /></View>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.inputt}
          placeholder="Heure (0-23)"
          keyboardType="numeric"
          onChangeText={text => setHour(text)}
        />
        <TextInput
          style={[styles.inputt,{width:66}]}
          placeholder="Minutes"
          keyboardType="numeric"
          onChangeText={text => setMinute(text)}
        /></View>
      </View>
      <View style={styles.containerr}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.8065,
          longitude: 10.1815,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{ latitude: 36.8065, longitude: 10.1815 }}
          title="Tunis"
        />
      </MapView>
  
    </View>


      
      {/* Sélection de l'assurance */}
      <View style={styles.inputContainer}>
      <Text style={styles.label}>Société d'Assurances *</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={AssuranceData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Véhicule Assuré Par: "
        searchPlaceholder="Search..."
        value={assurance}
        onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setAssurance(item.value);
            setIsFocus(false);
          }}
        renderLeftIcon={() => (
          <AntDesign iconStyle={styles.icon} color="green" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />
</View>
      {/* Police d'assurance */}
      <View style={[styles.inputContainer, { flexDirection: 'row' }]}>
    <Text style={styles.labe}>Police d'Assurances N° :</Text>
    <TextInput
        style={styles.inp}
        value={policeass}
        onChangeText={(text) => setPoliceass(text)}
    />
</View>


      {/* Sélection de l'agence */}
        <Dropdown
    style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={AgenceData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Agence: "
        searchPlaceholder="Search..."
        value={agence}
        onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setAgence(item.value);
            setIsFocus(false);
          }}
        renderLeftIcon={() => (
          <AntDesign iconStyle={styles.icon} color="green" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />
  
      {/* Informations de l'attestation Valable */}
      <View style={styles.inputContainer}>
        <Text style={styles.labe}>Attestation Valable De</Text>
      </View>

      {/* Informations de l'assuré */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Assuré (Voir attest.d'assur.) *</Text>
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
        <Text style={styles.labe}>Tél :          </Text>
        <TextInput
          style={styles.input}
         
          value={tel}
          onChangeText={(text) => setTel(text)}
        /></View>
        
      </View>
      <View style={styles.contain}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
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
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textDecorationLine: 'underline',
      },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
    color:'#5239A0',
  },
  labe:{
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth:1.8,
    marginBottom: 10,
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
    marginBottom: 2,
    width:'56%',
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
  inputt: {
    borderWidth: 0.7,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 2,
    paddingHorizontal: 3,
    paddingVertical: 2,
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
  labell: {
    fontSize: 18,
    marginBottom: 8,
    flexDirection: 'row',
    fontWeight: 'bold',
  },
  contain: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
width:'20%',
  },
});
