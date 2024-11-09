import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ route }) {
  const [saldo1, setSaldo] = useState(0);
  const { nombre, tipo, numero_cuenta } = route.params || {};
  
  const navigation = useNavigation();

  const Volver = () => {
    navigation.navigate('Inicio');
  };

  const obtenerSaldo = () => {
    fetch('http://localhost:3000/saldo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numeroCuenta: numero_cuenta,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSaldo(data.saldo);
        } else {
          setResponseMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage('Error de red o problema en el servidor');
      });
  };

  useEffect(() => {
    obtenerSaldo();

    //Actualizar el saldo cada vez que la pantalla se enfoca
    const unsubscribe = navigation.addListener('focus', () => {
      obtenerSaldo();
    });

   
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorSuperior}>
        <View style={styles.contenedorSuperiorLogo}>
          <View style={styles.contenedorSuperiorLogo2}>
            <Image source={require('../../assets/Logo.png')} style={styles.logo}></Image>
            <Image source={require('../../assets/Logo1_.png')} style={styles.logo1}></Image>
            <Image source={require('../../assets/Logo2.png')} style={styles.logo2}></Image>
          </View>
          <View style={styles.volver}>
            <TouchableOpacity style={styles.botonVolver} onPress={Volver}>
              <Image source={require('../../assets/salida.png')} style={styles.logovolver}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.contenedorBienvenido}>
        <Text style={styles.textoNombrePropietario}>Hola {nombre},</Text>
        <Text style={styles.textoBienvenido}>BIENVENIDO</Text>
      </View>
      <View style={styles.contenedorInformacionBancaria}>
        <Text style={styles.textoInformacion}>Informacion Bancaria</Text>
        <View style={styles.contenedorInformacionCuenta}>
          <Text style={styles.TextoInformacionCuenta}>Tipo: Cuenta {tipo}</Text>
          <Text style={styles.TextoInformacionCuenta}>Numero: {numero_cuenta}</Text>
          <Text style={styles.TextoSaldo}>Saldo: {saldo1}</Text>
        </View>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
  },
  contenedorSuperior: {
    width: '90%',
    marginTop: 20,
    marginBottom: 10,
    padding: 7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorSuperiorLogo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contenedorSuperiorLogo2: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 70,
    height: 70,
  },
  volver: {
    alignItems: 'flex-end',
  },
  logovolver: {
    width: 30,
    height: 30,
  },
  textoNombrePropietario: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: 'rgb(10, 52, 66)',
    marginLeft: 9,
  },
  contenedorInformacionBancaria: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
    padding: 7,
    backgroundColor: 'rgb(10, 52, 66)',
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'left',
  },
  textoInformacion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10,
  },
  contenedorInformacionCuenta: {
    marginTop: 10,
    paddingLeft: 10,
  },
  TextoInformacionCuenta: {
    fontFamily: 'monospace',
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  TextoSaldo: {
    fontFamily: 'monospace',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right',
    color: 'white',
  },
  contenedorBienvenido: {
    width: '90%',
    height: '20%',
    marginTop: 10,
    padding: 7,

    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo1: {
    width: 170,
    height: 25,
  },
  logo2: {
    width: 69,
    height: 19,
  },
  textoBienvenido: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(10, 52, 66)',
  },
});
