import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const pessoa = { nome: 'Mariana', idade: '21', cidade: 'Rio de Janeiro', avatar: require('./assets/img/icon.png') };

function getHora() {
  const horaAtual = new Date().getHours();

  if (horaAtual >= 5 && horaAtual < 12) {
    return 'Bom dia!';
  } else if (horaAtual >= 12 && horaAtual < 18 ) {
    return 'Boa tarde!';
  } else {
    return 'Boa noite!';
  }
}

function SaudacaoPersonalizada({ saudacao = "Olá", nome = "Usuário", style}) {
  return (
    <View style={[styles.SaudacaoContainer, style]}>
      <Text>{saudacao}, {nome}!</Text>
    </View>
  );
}
const Saudacao = ({ nome }) => {
  return (
    <View style={styles.container}>
      <Text>Olá, {nome}!</Text>
    </View>
  );
};

const ExibirPessoa = ({ nome, idade, cidade }) => {
  return (
    <View style={styles.container}>
      <Image source={pessoa.avatar} style={styles.avatar} />
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Cidade: {cidade}</Text>
    </View>
  );
};
export default function App() {
  const [saudacao, setSaudacao] = useState('');

  useEffect(() => {
    setSaudacao(getHora());
  }, []);

  return (
    <View style={styles.appContainer}>
      <SaudacaoPersonalizada saudacao={saudacao} nome={pessoa.nome} style={styles.SaudacaoPersonalizada} />
      <Saudacao nome={pessoa.nome}/>
      <ExibirPessoa {...pessoa}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
});
