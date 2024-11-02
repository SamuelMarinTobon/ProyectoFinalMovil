import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';

//screen
import Inicio from './src/components/Inicio';
import Login from './src/components/Login';
import Registro from './src/components/Registro';
import HomeScreen from './src/screens/HomeScreen';
import PrestamosScreen from './src/screens/PrestamosScreen';
import ReportesScreen from './src/screens/ReportesScreen';
import StackDepositoScreen from './src/screens/StackDepositoScreen';
import StackDeudaPrestamoScreen from './src/screens/StackDeudaPrestamoScreen';
import StackRetiroScreen from './src/screens/StackRetiroScreen';
import StackSolicitarPrestamosScreen from './src/screens/StackSolicitarPrestamosScreen';
import StackTransferenciaScreen from './src/screens/StackTransferenciaScreen';
import TransferenciasScreen from './src/screens/TransferenciasScreen';

const TabNav = createBottomTabNavigator();
const StackNav = createNativeStackNavigator();

function HomeStack({ route }) {
  const { nombre, tipo, numero_cuenta, } = route.params || {};
  return (
    <StackNav.Navigator initialRouteName='Home'>
      <StackNav.Screen
        name='HomeLogin'
        component={HomeScreen}
        options={{ headerShown: false }}
        initialParams={{ nombre, tipo, numero_cuenta,  }}
      />
    </StackNav.Navigator>
  );
}

function TransferenciasStack({ route }) {
  const { nombre, tipo, numero_cuenta, } = route.params || {};
  return (
    <StackNav.Navigator initialRouteName='Transferencias'>
      <StackNav.Screen
        name='TransferenciasScreen'
        component={TransferenciasScreen}
        initialParams={{ nombre, tipo, numero_cuenta,}}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name='Transferir'
        component={StackTransferenciaScreen}
        initialParams={{ nombre, tipo, numero_cuenta,  }}
      />
      <StackNav.Screen
        name='Depositar'
        component={StackDepositoScreen}
        initialParams={{ nombre, tipo, numero_cuenta, }}
      />
      <StackNav.Screen
        name='Retirar'
        component={StackRetiroScreen}
        initialParams={{ nombre, tipo, numero_cuenta, }}
      />
    </StackNav.Navigator>
  );
}
function PrestamosStack({ route }) {
  const { nombre, tipo, numero_cuenta} = route.params || {};
  return (
    <StackNav.Navigator initialRouteName='Prestamos'>
      <StackNav.Screen
        name='PrestamosScreen'
        component={PrestamosScreen}
        initialParams={{ nombre, tipo, numero_cuenta,  }}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name='SolicitarPrestamos'
        component={StackSolicitarPrestamosScreen}
        initialParams={{ nombre, tipo, numero_cuenta, }}
      />
      <StackNav.Screen
        name='DeudaPrestamo'
        component={StackDeudaPrestamoScreen}
        initialParams={{ nombre, tipo, numero_cuenta, }}
      />
    </StackNav.Navigator>
  );
}
function ReportesStack({ route }) {
  const { nombre, tipo, numero_cuenta, } = route.params || {};
  return (
    <StackNav.Navigator initialRouteName='Reportes'>
      <StackNav.Screen
        name='ReportesScreen'
        component={ReportesScreen}
        initialParams={{ nombre, tipo, numero_cuenta }}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  );
}

function MyTabs({ route }) {
  return (
    <TabNav.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'rgb(10, 52, 66)' }}
    >
      <TabNav.Screen
        name='Home'
        component={HomeStack}
        initialParams={route.params}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/hogar.png')}
              style={{ width: 20, height: 20, tintColor: 'rgb(10, 52, 66)' }}
            />
          ),
        }}
      />
      <TabNav.Screen
        name='Transferencias'
        component={TransferenciasStack}
        initialParams={route.params}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/avion-de-papel.png')}
              style={{ width: 20, height: 20, tintColor: 'rgb(10, 52, 66)' }}
            />
          ),
        }}
      />
      <TabNav.Screen
        name='Prestamos'
        component={PrestamosStack}
        initialParams={route.params}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/dolar.png')}
              style={{ width: 20, height: 20, tintColor: 'rgb(10, 52, 66)' }}
            />
          ),
        }}
      />
      <TabNav.Screen
        name='Reportes'
        component={ReportesStack}
        initialParams={route.params}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/editar.png')}
              style={{ width: 20, height: 20, tintColor: 'rgb(10, 52, 66)' }}
            />
          ),
        }}
      />
    </TabNav.Navigator>
  );
}
function Principal() {
  return (
    <StackNav.Navigator initialRouteName='Inicio'>
      <StackNav.Screen name='Inicio' component={Inicio} options={{ headerShown: false }} />
      <StackNav.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <StackNav.Screen name='Registro' component={Registro} options={{ headerShown: false }} />
      <StackNav.Screen name='HomeLogin' component={MyTabs} options={{ headerShown: false }} />
    </StackNav.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Principal />
    </NavigationContainer>
  );
}
