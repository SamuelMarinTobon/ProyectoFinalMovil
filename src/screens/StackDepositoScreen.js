import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function StackDepositoScreen() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorDepositar}>
        <Image source={require('../../assets/LogoDepositar.png')} style={styles.logo}></Image>
        <Text style={styles.textoDepositar}>Depositos</Text>
        <TextInput style={styles.input} placeholder='Monto' />
        <TouchableOpacity style={styles.botonDeposito}>
          <Text style={styles.botonTexto}>Depositar</Text>
        </TouchableOpacity>
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
  contenedorDepositar: {
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
  textoDepositar: {
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
  botonDeposito: {
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
