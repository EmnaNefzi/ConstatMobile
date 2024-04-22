import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import App from '../App';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import { Button } from 'react-native';
const AssuranceData = [
  { label: 'Assurances STAR', value: 'STAR' },
  { label: 'COTUNACE', value: 'COTUNACE' },
  // Other AssuranceData entries...
];

const AgenceData = [
  { label: 'Centre Ville', value: 'centreVille' },
  { label: 'Manouba', value: 'Manouba' },
  // Other AgenceData entries...
];

export default function VehiculeA () {
    const navigation = useNavigation();
  const [nom, setNom] = useState('');
  const [tel, setTel] = useState('');
  const [prenom, setPrenom] = useState('');
  const [policeass, setPoliceass] = useState('');
  const [email, setEmail] = useState('');
  const [assurance, setAssurance] = useState(null);
  const [agence, setAgence] = useState(null);

const goBack=()=>{
    navigation.goBack();
};
  const handleSuivant = () => {
    // Here you can handle the form submission logic
    console.log('Form submitted!');
  };

  return (
    <div className="container">
      <h1>Formulaire Véhicule Assuré</h1>
      <label>* Société d'Assurances</label>
      <select value={assurance} onChange={(e) => setAssurance(e.target.value)}>
        <option value="" disabled>Select Assurance</option>
        {AssuranceData.map((item) => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Police d'Assurances N"
        value={policeass}
        onChange={(e) => setPoliceass(e.target.value)}
      />
      <label>* Agence</label>
      <select value={agence} onChange={(e) => setAgence(e.target.value)}>
        <option value="" disabled>Select Agence</option>
        {AgenceData.map((item) => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))}
      </select>
      <div>
        <label>* Assuré (voir attest d'assur)</label>
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Tél"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <Button title='go back' onPress={goBack}/>
    </div>
  );
};