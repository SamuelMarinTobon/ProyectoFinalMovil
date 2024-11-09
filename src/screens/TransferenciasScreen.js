import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function TrasferenciaScreen({ route }) {
  const [saldo1, setSaldo] = useState(0);
  const { nombre, tipo, numero_cuenta } = route.params || {};
  const [transferencias, setTransferencias] = useState('');


  const navigation = useNavigation();

  const historicoTransferencias = () => {
    fetch('http://localhost:3000/historicoTransferencias', {
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
        setTransferencias(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
    historicoTransferencias();

    // Actualizar el saldo cada vez que la pantalla se enfoca
    const unsubscribe = navigation.addListener('focus', () => {
      obtenerSaldo();
      historicoTransferencias();
    });

    
    return unsubscribe;
  }, [navigation, numero_cuenta]);
  
  
  return (
    <View style={styles.contenedor}>
      <View style={styles.contenedorSuperior}>
        <View style={styles.contenedorSuperiorLogo}>
          <Image source={require('../../assets/Logo.png')} style={styles.logo}></Image>
        </View>
        <View style={styles.contenedorInfo}>
          <Text style={styles.textoInfoCuenta}>Cuenta Corriente</Text>
          <Text style={styles.textoInfo}>Numero cuenta:</Text>
          <Text style={styles.textoInfo}>{numero_cuenta}</Text>
          <Text style={styles.textoInfo}>Saldo: {saldo1}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Transferir')}>
        <Text style={styles.botonTexto}>Transferir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Depositar')}>
        <Text style={styles.botonTexto}>Depositar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Retirar')}>
        <Text style={styles.botonTexto}>Retirar</Text>
      </TouchableOpacity>
      <View style={styles.contenedorHistorialTransferencia}>
        <Text style={styles.textoHistorial}>Historial Transferencias</Text>
        <FlatList
          data={transferencias}
          keyExtractor={(item) => item.transaccion_id.toString()}
          renderItem={({ item }) => (
            <View style={styles.contenedorTransferencia}>
              <View style={styles.contenedorInfoTransferencia}>
                <Text style={styles.TextoDestinatario}>{item.tipo}</Text>
                <Text style={styles.transferenciaMonto}>{item.monto} </Text>
              </View>
            </View>
          )}
        />
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
    fontFamily: 'monospace',
    fontSize: 18,
    color: 'rgb(10, 52, 66)',
    textAlign: 'center',
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
  contenedorHistorialTransferencia: {
    width: '90%',
    height: '40%',
    marginTop: 10,
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    textAlign: 'left',
    borderWidth: 1,
    borderColor: 'rgb(10, 52, 66)',
  },
  textoHistorial: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'rgb(10, 52, 66)',
    paddingLeft: 10,
  },
  contenedorTransferencia: {
    padding: 10,
  },
  contenedorInfoTransferencia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextoDestinatario: {
    color: 'rgb(10, 52, 66)',
    fontFamily: 'monospace',
    fontSize: 14,
  },
  transferenciaMonto: {
    color: 'rgb(10, 52, 66)',
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
