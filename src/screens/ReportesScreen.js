import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function ReportesScreen({ route }) {
  const { nombre, tipo, numero_cuenta } = route.params || {};
  const navigation = useNavigation();
  const [saldo1, setSaldo] = useState(0);

  const [ingresos, setIngresos] = useState('');
  const [egresos, setEgresos] = useState('');
  const [deudas, setDeudas] = useState('');

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

  const historicoIngresos = () => {
    fetch('http://localhost:3000/historicoIngresos', {
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
        setIngresos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const historicoEgresos = () => {
    fetch('http://localhost:3000/historicoEgresos', {
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
        setEgresos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const historicoDeudas = () => {
    fetch('http://localhost:3000/historicoDeudas', {
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
        setDeudas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    
    historicoIngresos();
    historicoEgresos();
    historicoDeudas();
    obtenerSaldo();

    //listener, actualizar los datos cuando la pantalla se enfoque
    const unsubscribe = navigation.addListener('focus', () => {
      historicoIngresos();
      historicoEgresos();
      historicoDeudas();
      obtenerSaldo();
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
      <View style={styles.contenedorReportesBancarios}>
        <Text style={styles.textoReportes}>Reportes</Text>
      </View>
      <View style={styles.contenedorHistorial}>
        <Text style={styles.textoHistorial}>Historial de Ingresos</Text>
        <FlatList
          data={ingresos}
          keyExtractor={(item) => item.transaccion_id.toString()}
          renderItem={({ item }) => (
            <View style={styles.contenedorTransferencia}>
              <View style={styles.contenedorInfoTransferencia}>
                <Text style={styles.TextoFecha}> {new Date(item.fecha).toLocaleDateString('es-ES')}</Text>
                <Text style={styles.transferenciaMonto}>{item.monto} </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.contenedorHistorial}>
        <Text style={styles.textoHistorial}>Historial de Egresos</Text>
        <FlatList
          data={egresos}
          keyExtractor={(item) => item.transaccion_id.toString()}
          renderItem={({ item }) => (
            <View style={styles.contenedorTransferencia}>
              <View style={styles.contenedorInfoTransferencia}>
                <Text style={styles.TextoFecha}> {new Date(item.fecha).toLocaleDateString('es-ES')}</Text>
                <Text style={styles.transferenciaMonto}>{item.monto} </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.contenedorHistorial}>
        <Text style={styles.textoHistorial}>Historial de Deudas</Text>
        <FlatList
          data={deudas}
          keyExtractor={(item) => item.prestamo_id.toString()}
          renderItem={({ item }) => (
            <View style={styles.contenedorTransferencia}>
              <View style={styles.contenedorInfoTransferencia}>
                <Text style={styles.TextoFecha}>{new Date(item.fecha_solicitud).toLocaleDateString('es-ES')}</Text>
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
    marginBottom: 10,
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
  contenedorReportesBancarios: {
    width: '90%',

    marginTop: 10,
    marginBottom: 10,
    padding: 7,
    borderRadius: 20,
    justifyContent: 'center',
  },
  textoReportes: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(10, 52, 66)',
    paddingLeft: 10,
    textAlign: 'center',
  },
  contenedorInformacionReportes: {
    marginTop: 10,
    paddingLeft: 10,
  },

  contenedorHistorial: {
    width: '90%',
    height: '20%',
    marginBottom: 15,
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
  TextoFecha: {
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
