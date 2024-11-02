import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function Registro() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipocuenta, setTipoCuenta] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarpassword, setConfirmarPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const Registro = () => {
    if (password !== confirmarpassword) {
      setResponseMessage('las contraseñas no coinciden');
    }
    fetch('http://localhost:3000/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre,
        email: email,
        contraseña: password,
        telefono: telefono,
        tipocuenta: tipocuenta,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Maneja la respuesta del backend
        if (data.success) {
          navigation.navigate('Login');
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    
  };

  const IrLogin = () => {
    navigation.navigate('Login');
  };
  const Volver = () => {
    navigation.navigate('Inicio');
  };
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorRegistro}>
        <View style={styles.volver}>
          <TouchableOpacity style={styles.botonVolver} onPress={Volver}>
            <Image source={require('../../assets/izquierda.png')} style={styles.logovolver}></Image>
          </TouchableOpacity>
        </View>
        <Image source={require('../../assets/Logo.png')} style={styles.logo}></Image>
        <Text style={styles.textoRegistro}>Crear Nueva Cuenta</Text>
        <TextInput style={styles.input} placeholder='Nombre' value={nombre} onChangeText={setNombre} />
        <TextInput style={styles.input} placeholder='Correo Electronico' value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder='Telefono' value={telefono} onChangeText={setTelefono} />
        <TextInput style={styles.input} placeholder='Tipo de Cuenta' value={tipocuenta} onChangeText={setTipoCuenta} />
        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirmar Contraseña'
          secureTextEntry
          value={confirmarpassword}
          onChangeText={setConfirmarPassword}
        />
        <TouchableOpacity style={styles.botonRegistro} onPress={Registro}>
          <Text style={styles.botonTexto}>Registrarse</Text>
        </TouchableOpacity>
        <Text>{responseMessage}</Text>
        <Text style={styles.Texto}>
          ¿Ya tienes una cuenta?
          <Text style={styles.linkLogin} onPress={IrLogin}>
            Ingrese aqui
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
  contenedorRegistro: {
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
  textoRegistro: {
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
  botonRegistro: {
    backgroundColor: 'rgb(10, 52, 66)',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  Texto: {
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },
  linkLogin: {
    fontFamily: 'monospace',
    color: 'blue',
    fontWeight: 'bold',
  },
});
