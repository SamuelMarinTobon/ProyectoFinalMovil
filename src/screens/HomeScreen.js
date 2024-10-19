import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  const Volver = () => {
    navigation.navigate('Inicio');
  };

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
        <Text style={styles.textoNombrePropietario}>Hola Samuel,</Text>
        <Text style={styles.textoBienvenido}>BIENVENIDO</Text>
      </View>
      <View style={styles.contenedorInformacionBancaria}>
        <Text style={styles.textoInformacion}>Informacion Bancaria</Text>
        <View style={styles.contenedorInformacionCuenta}>
          <Text style={styles.TextoInformacionCuenta}>Tipo: Cuenta Corriente</Text>
          <Text style={styles.TextoInformacionCuenta}>Numero: 1234-5678</Text>
          <Text style={styles.TextoSaldo}>Saldo: 500.000,00</Text>
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
