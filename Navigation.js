import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image} from 'react-native';

//screen
import Login from './src/components/Login';
import HomeScreen from './src/screens/HomeScreen';
import PrestamosScreen from './src/screens/PrestamosScreen';
import ReportesScreen from './src/screens/ReportesScreen';
import StackDepositoScreen from './src/screens/StackDepositoScreen';
import StackDeudaPrestamoScreen from './src/screens/StackDeudaPrestamoScreen';
import StackRetiroScreen from './src/screens/StackRetiroScreen';
import StackSolicitarPrestamosScreen from './src/screens/StackSolicitarPrestamosScreen';
import StackTransferenciaScreen from './src/screens/StackTransferenciaScreen';
import TransferenciasScreen from './src/screens/TransferenciasScreen';
import Registro from './src/components/Registro';
import Inicio from './src/components/Inicio';

const TabNav = createBottomTabNavigator();
const StackNav = createNativeStackNavigator();

function HomeStack() {
  return (
    <StackNav.Navigator initialRouteName='Home'>
      <StackNav.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
    </StackNav.Navigator>
  );
}

function TransferenciasStack() {
  return (
    <StackNav.Navigator initialRouteName='Transferencias'>
      <StackNav.Screen name='TransferenciasScreen' component={TransferenciasScreen} options={{ headerShown: false }} />
      <StackNav.Screen name='Transferir' component={StackTransferenciaScreen} />
      <StackNav.Screen name='Depositar' component={StackDepositoScreen} />
      <StackNav.Screen name='Retirar' component={StackRetiroScreen} />
    </StackNav.Navigator>
  );
}
function PrestamosStack() {
  return (
    <StackNav.Navigator initialRouteName='Prestamos'>
      <StackNav.Screen name='PrestamosScreen' component={PrestamosScreen} options={{ headerShown: false }} />
      <StackNav.Screen name='SolicitarPrestamos' component={StackSolicitarPrestamosScreen} />
      <StackNav.Screen name='DeudaPrestamo' component={StackDeudaPrestamoScreen} />
    </StackNav.Navigator>
  );
}
function ReportesStack() {
  return (
    <StackNav.Navigator initialRouteName='Reportes'>
      <StackNav.Screen name='ReportesScreen' component={ReportesScreen} options={{ headerShown: false }} />
    </StackNav.Navigator>
  );
}

function MyTabs() {
  return (
    <TabNav.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'rgb(10, 52, 66)' }}
    >
      <TabNav.Screen
        name='Home'
        component={HomeStack}
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
