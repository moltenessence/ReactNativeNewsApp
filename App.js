import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AllScreen from './screens/All';
import BusinessScreen from './screens/Business';
import TechScreen from './screens/Tech';
import SportsScreen from './screens/Sports';
import HealthScreen from './screens/Health';
import NewsDetailedInfoScreen from './screens/NewsDetailedInfo';
import { NativeBaseProvider } from 'native-base';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabScreens" >
        <Stack.Screen name="TabScreens" component={TabScreens} />
        <Stack.Screen
          name="NewsDetailedInfo"
          component={NewsDetailedInfoScreen}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

function TabScreens() {
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffc107',
      }}
    >
      <Tab.Screen
        name="All"
        component={AllScreen}
        initialRouteName="all"
        unmountOnBlur={true}
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
        initialRouteName="business"
        unmountOnBlur={true}
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
        initialRouteName="health"
        unmountOnBlur={true}
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
        initialRouteName="tech"
        unmountOnBlur={true}
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
        initialRouteName="sports"
        unmountOnBlur={true}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon type="ionicon" name="tennisball-outline" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
