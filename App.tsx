import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Home} from './src/screens/home';
import {Schedule} from './src/screens/schedule';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen initialParams={{screen: "main"}} name='Home' component={Home} />
        <Stack.Screen name='Schedule' component={Schedule} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App