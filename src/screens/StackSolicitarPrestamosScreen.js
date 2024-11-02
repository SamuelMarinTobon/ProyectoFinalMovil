import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function StackSolicitarPrestamosScreen({ route }) {
  const { nombre, tipo, numero_cuenta, saldo, transacciones } = route.params || {};

  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const solicitarPrestamo = () => {
    fetch('http://localhost:3000/solicitarPrestamo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
        monto: parseFloat(monto),
        plazo: parseInt(plazo),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResponseMessage(data.message);
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
      <View style={styles.contenedorSolicita}>
        <Image source={require('../../assets/LogoPrestamos.png')} style={styles.logo}></Image>
        <Text style={styles.textoSolicita}>Solicitar prestamos</Text>
        <TextInput
          style={styles.input}
          placeholder='Monto'
          value={monto}
          onChangeText={setMonto}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          placeholder='Plazo(en meses)'
          value={plazo}
          onChangeText={setPlazo}
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.botonSolicita} onPress={solicitarPrestamo}>
          <Text style={styles.botonTexto}>Solicitar</Text>
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
  contenedorSolicita: {
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
  textoSolicita: {
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
  botonSolicita: {
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
