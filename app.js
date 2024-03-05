import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

// Criando um objeto com Propriedades
const pessoa = { nome: 'Gustavo', idade: 28, cidade: 'Rio de Janeiro' };

// Componente funcional personalizado

function SaudacaoPersonalizada ({ saudacao = "Olá", nome = "Usuário", style}) {
  return (
    <View style={[ style.saudacaoContainer, style]}>
      <Text> {saudacao}, {nome}!</Text>
 </View>
  );
}
const Saudacao = ({ nome }) => {
  return (
    <View style= {style.container}>
      <Text> Olá, {nome} !</Text>
    </View>
  );
};

const ExibirPessoa = ({ nome, idade, cidade}) => {
  return(
    <View style= {style.container}>
      <Text> Nome: {nome}</Text>
      <Text> idade: {idade}</Text>
      <Text> cidade: {cidade}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={style.appContainer}>
      {/* Use o componente funcional personalizado com estilos personalizados */}
      <SaudacaoPersonalizada saudacao= "Bom dia" nome={pessoa.nome}
      style={style.SaudacaoPersonalizada} />
      <Saudacao nome={pessoa.nome} />
      <ExibirPessoa{...pessoa} />  
    </View>
  );
};

const style = StyleSheet.create({
  appContainer: {
    Flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  SaudacaoContainer: {
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  SaudacaoPersonalizada: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',

  },
});

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Imag  } from 'react-native';

const pessoa = { nome: 'Gustavo', idade: 28, cidade: 'Rio de Janeiro', avatar: require('./assets/img/icon.png')};

function getHora(){
  const horaAtual = new Date ().getHors();

  if (horaAtual >= 12 && horaAtual < 18) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
}
