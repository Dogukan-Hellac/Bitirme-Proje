import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './screens/HomeScreen'
import LogInScreen from './screens/LogInScreen'
import SignUpScreen from './screens/SignUpScreen'
import CartScreen from './screens/CartScreen'
import CategoryScreen from './screens/CategoryScreen'
import ProductListScreen from './screens/ProductListScreen'
import SearchScreen from './screens/SearchScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'

import CustomHeader from './components/CustomHeader'
import ToggleMenu from './components/ToggleMenu'

import { UserProvider } from './context/UserContext'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function MainStack() {
  return (
    <Stack.Navigator screenOptions={({ navigation }) => ({
      header: () => <CustomHeader navigation={navigation} />,
      animation: 'none',
    })}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Product" component={ProductListScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={ProductDetailScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <ToggleMenu {...props} />}
          screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            overlayColor: 'transparent',
          }}
        >
          <Drawer.Screen name="MainStack" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

