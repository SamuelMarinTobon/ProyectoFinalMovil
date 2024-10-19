import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, FlatList, TouchableOpacity, View } from 'react-native';

const historialTransferencias = [
];

const Ingresos = [
  { transaccion_id: '1', tipo: 'Transferencia', monto: 1200.0, fecha: '2024-10-03' },
  { transaccion_id: '2', tipo: 'Transferencia', monto: 1000.0, fecha: '2024-10-07' },
  { transaccion_id: '3', tipo: 'Depósito', monto: 1500.0, fecha: '2024-10-01' },
  { transaccion_id: '4', tipo: 'Depósito', monto: 2500.0, fecha: '2024-10-04' },
  { transaccion_id: '5', tipo: 'Depósito', monto: 1800.0, fecha: '2024-10-08' },
];

const retiros = [
  { transaccion_id: '6', tipo: 'Retiro', monto: 500.0, fecha: '2024-10-02' },
  { transaccion_id: '7', tipo: 'Retiro', monto: 300.0, fecha: '2024-10-06' },
  { transaccion_id: '8', tipo: 'Retiro', monto: 700.0, fecha: '2024-10-10' },
];



export default function ReportesScreen() {
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
      <View style={styles.contenedorReportesBancarios}>
        <Text style={styles.textoReportes}>Reportes</Text>
      </View>
      <View style={styles.contenedorHistorial}>
        <Text style={styles.textoHistorial}>Historial de Ingresos</Text>
        <FlatList
          data={Ingresos}
          keyExtractor={(item) => item.transaccion_id}
          renderItem={({ item }) => (
            <View style={styles.contenedorTransferencia}>
              <View style={styles.contenedorInfoTransferencia}>
                <Text style={styles.TextoFecha}>{item.fecha}</Text>
                <Text style={styles.transferenciaMonto}>{item.monto} </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.contenedorHistorial}>
        <Text style={styles.textoHistorial}>Historial de Egresos</Text>
        <FlatList
          data={retiros}
          keyExtractor={(item) => item.transaccion_id}
          renderItem={({ item }) => (
            <View style={styles.contenedorTransferencia}>
              <View style={styles.contenedorInfoTransferencia}>
                <Text style={styles.TextoFecha}>{item.fecha}</Text>
                <Text style={styles.transferenciaMonto}>{item.monto} </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.contenedorHistorial}>
        <Text style={styles.textoHistorial}>Historial de  Deudas</Text>
        <FlatList
          data={retiros}
          keyExtractor={(item) => item.transaccion_id}
          renderItem={({ item }) => (
            <View style={styles.contenedorTransferencia}>
              <View style={styles.contenedorInfoTransferencia}>
                <Text style={styles.TextoFecha}>{item.fecha}</Text>
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
