import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PrestamosScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorSuperior}>
        <View style={styles.contenedorSuperiorLogo}>
          <Image source={require('../../assets/Logo.png')} style={styles.logo}></Image>
        </View>
        <View style={styles.contenedorInfo}>
          <Text style={styles.textoInfoCuenta}>Cuenta Corriente</Text>
          <Text style={styles.textoInfo}>Numero cuenta:</Text>
          <Text style={styles.textoInfo}>1234-56780</Text>
          <Text style={styles.textoInfo}>Saldo: 500.000,00</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('SolicitarPrestamos')}>
        <Text style={styles.botonTexto}>Solicita un prestamo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('DeudaPrestamo')}>
        <Text style={styles.botonTexto}>Pagar prestamos</Text>
      </TouchableOpacity>
      <Text style={styles.textoInfoCuenta2}>Beneficios de solicitar prestamos</Text>
      <View style={styles.contenedorPrincipalBeneficios}>
        <View style={styles.contenedorBeneficio}>
          <View style={styles.contenedorTituloInfo}>
            <Text style={styles.textoInformacion}>Desembolso inmediato</Text>
          </View>
          <View style={styles.contenedorImagen}>
            <Image source={require('../../assets/imagen1.png')} style={styles.imagenes}></Image>
          </View>
        </View>
        <View style={styles.contenedorBeneficio}>
          <View style={styles.contenedorTituloInfo}>
            <Text style={styles.textoInformacion}>Sin codeudor ni fiador</Text>
          </View>
          <View style={styles.contenedorImagen}>
            <Image source={require('../../assets/imagen2.png')} style={styles.imagenes}></Image>
          </View>
        </View>
        <View style={styles.contenedorBeneficio}>
          <View style={styles.contenedorTituloInfo}>
            <Text style={styles.textoInformacion}>100% diginal</Text>
          </View>
          <View style={styles.contenedorImagen}>
            <Image source={require('../../assets/imagen3.png')} style={styles.imagenes}></Image>
          </View>
        </View>
        <View style={styles.contenedorBeneficio}>
          <View style={styles.contenedorTituloInfo}>
            <Text style={styles.textoInformacion}>Tasa fija</Text>
          </View>
          <View style={styles.contenedorImagen}>
            <Image source={require('../../assets/imagen4.png')} style={styles.imagenes}></Image>
          </View>
        </View>
        <View style={styles.contenedorBeneficio}>
          <View style={styles.contenedorTituloInfo}>
            <Text style={styles.textoInformacion1}>Solicita tu prestamo</Text>
          </View>
          <View style={styles.contenedorImagen}>
            <Image source={require('../../assets/imagen5.png')} style={styles.imagenes}></Image>
          </View>
        </View>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    height: '90%',
    alignItems: 'center',
  },
  contenedorSuperior: {
    width: '90%',
    marginTop: 20,
    marginBottom: 30,
    padding: 7,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contenedorSuperiorLogo: {
    width: '42%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  contenedorInfo: {
    width: '58%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoInfo: {
    fontSize: 18,
    color: 'rgb(10, 52, 66)',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  textoInfoCuenta: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(10, 52, 66)',
    marginLeft: 9,
    textAlign: 'center',
  },
  boton: {
    width: '90%',
    marginBottom: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  botonTexto: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: 'rgb(10, 52, 66)',
    fontWeight: 'bold',
  },
  textoInfoCuenta2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(10, 52, 66)',
    textAlign: 'center',
  },
  contenedorPrincipalBeneficios: {
    height: '55%',
    flexDirection: 'row',
    marginTop: 25,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contenedorBeneficio: {
    width: '43%',
    height: '24%',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 7,
    paddingTop: 7,
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'left',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: 'rgb(10, 52, 66)',
    elevation:5
  },

  contenedorTituloInfo: {
    justifyContent: 'center',

    width: '45%',
    height: '60%',
  },
  textoInformacion: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgb(10, 52, 66)',
    paddingLeft: 5,
  },
  textoInformacion1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(10, 52, 66)',
    paddingLeft: 5,
  },
  contenedorImagen: {
    width: '55%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imagenes: {
    width: 90,
    height: 110,
  },
});
