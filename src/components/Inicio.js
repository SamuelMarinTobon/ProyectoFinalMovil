import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Inicio() {
  const navigation = useNavigation(); 

  const BotonLogin = () => {
    navigation.navigate('Login');
  };

  const IrRegistro = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedor2}>
        <Image source={require('../../assets/Logop.png')} style={styles.logo}></Image>

        <TouchableOpacity style={styles.boton} onPress={BotonLogin}>
          <Text style={styles.botonTexto}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton} onPress={IrRegistro}>
          <Text style={styles.botonTexto}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedor2: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 300,
    marginBottom: 70,
  },
  boton: {
    backgroundColor: 'rgb(10, 52, 66)',
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
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
