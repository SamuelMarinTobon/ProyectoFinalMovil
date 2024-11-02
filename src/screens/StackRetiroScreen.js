import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function StackRetiroScreen({ route }) {
  const { nombre, tipo, numero_cuenta, saldo, transacciones } = route.params || {};

  const [monto, setMonto] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const realizarRetiro = () => {
    fetch('http://localhost:3000/retirar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
        monto: parseFloat(monto),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResponseMessage('Retiro realizado con éxito');
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
      <View style={styles.contenedorRetirar}>
        <Image source={require('../../assets/LogoRetirar.png')} style={styles.logo}></Image>
        <Text style={styles.textoRetirar}>Retiros</Text>
        <TextInput
          style={styles.input}
          placeholder='Monto'
          value={monto}
          onChangeText={setMonto}
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.botonRetiro} onPress={realizarRetiro}>
          <Text style={styles.botonTexto}>Retirar</Text>
        </TouchableOpacity>
        <Text>{responseMessage}</Text>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'rgb(10, 52, 66)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorRetirar: {
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
  textoRetirar: {
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
  botonRetiro: {
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
