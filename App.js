import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllScreen from './screens/All';
import BusinessScreen from './screens/Business';
import TechScreen from './screens/Tech';
import SportsScreen from './screens/Sports';
import HealthScreen from './screens/Health';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffc107',
        }}
      >
        <Tab.Screen
          name="All"
          component={AllScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon type="feather" name="home" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Business"
          component={BusinessScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon type="feather" name="briefcase" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Health"
          component={HealthScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon type="feather" name="activity" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Tech"
          component={TechScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon type="ionicon" name="hardware-chip-outline" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Sports"
          component={SportsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon type="ionicon" name="tennisball-outline" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
