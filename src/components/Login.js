import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const navigation = useNavigation();

  const BotonLogin = () => {
    navigation.navigate('HomeLogin');
  };

  const IrRegistro = () => {
    navigation.navigate('Registro');
  };
  const Volver = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorIniciar}>
        <View style={styles.volver}>
          <TouchableOpacity style={styles.botonVolver} onPress={Volver}>
            <Image source={require('../../assets/izquierda.png')} style={styles.logovolver}></Image>
          </TouchableOpacity>
        </View>
        <Image source={require('../../assets/Logo.png')} style={styles.logo}></Image>
        <Text style={styles.textoIniciarSesion}>Iniciar Sesion</Text>
        <TextInput style={styles.input} placeholder='Correo Electronico' />
        <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry />
        <TouchableOpacity style={styles.botonInciarSesion} onPress={BotonLogin}>
          <Text style={styles.botonTexto}>Iniciar Sesion</Text>
        </TouchableOpacity>
        <Text style={styles.Texto}>
          ¿No tienes una cuenta?
          <Text style={styles.linkRegistro} onPress={IrRegistro}>
            Regístrate aqui
          </Text>
        </Text>
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
  volver: {
    width: '100%',
  },
  logovolver: {
    width: 30,
    height: 30,
  },
  textoIniciarSesion: {
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
  botonInciarSesion: {
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
  Texto: {
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },
  linkRegistro: {
    fontFamily: 'monospace',
    color: 'blue',
    fontWeight: 'bold',
  },
});
