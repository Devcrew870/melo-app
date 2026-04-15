import Topbar from '@/src/components/layout/Topbar';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          height: 60,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 10,
          borderRadius: 40,
          marginBottom: 15,
        },
        tabBarItemStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          header: () => <Topbar title="" />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={focused ? '#111' : '#9ca3af'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          headerShown: true,
          header: () => <Topbar title="Categories" />,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'grid' : 'grid-outline'}
              size={22}
              color={focused ? '#111' : '#9ca3af'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="vendors"
        options={{
          headerShown: true,
          header: () => <Topbar title="Local Vendors" />,
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="shop"
              size={22}
              color={focused ? '#111' : '#9ca3af'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          header: () => <Topbar title="Local Vendors" />,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="account-circle"
              size={26}
              color={focused ? '#111' : '#9ca3af'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
