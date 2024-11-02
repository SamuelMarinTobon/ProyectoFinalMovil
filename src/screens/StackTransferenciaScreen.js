import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';


export default function StackTransferenciaScreen({ route }) {
  const { nombre, tipo, numero_cuenta, saldo, transacciones } = route.params || {};

  const [numeroCuentaDestino, setNumeroCuentaDestino] = useState('');
  const [monto, setMonto] = useState('');
  const [responseMessage, setResponseMessage] = useState('');



  const realizarTransferencia = () => {
    fetch('http://localhost:3000/transferir', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuentaOrigen: numero_cuenta,
        numeroCuentaDestino,
        monto: parseFloat(monto),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResponseMessage('Transferencia realizada con éxito');
          
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage('Error de red o problema en el servidor');
      });
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorIniciar}>
        <Image source={require('../../assets/LogoTransferir.png')} style={styles.logo}></Image>
        <Text style={styles.textoTransferir}>Transferencias</Text>
        <TextInput
          style={styles.input}
          placeholder='Numero de cuenta'
          value={numeroCuentaDestino}
          onChangeText={setNumeroCuentaDestino}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          placeholder='Monto'
          value={monto}
          onChangeText={setMonto}
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.botonTransferecia} onPress={realizarTransferencia}>
          <Text style={styles.botonTexto}>Transferir</Text>
        </TouchableOpacity>
        <Text>{responseMessage}</Text>
      </View>

      <StatusBar style='auto' />
    </View>
  );
};


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'rgb(10, 52, 66)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorIniciar: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textoTransferir: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  botonTransferecia: {
    backgroundColor: 'rgb(10, 52, 66)',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  botonTexto: {
    fontFamily: 'monospace',
    color: 'white',
    fontWeight: 'bold',
  },
});

