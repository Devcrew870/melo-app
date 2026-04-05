import { Ionicons } from '@expo/vector-icons';
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
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'grid' : 'grid-outline'}
              size={22}
              color={focused ? '#111' : '#9ca3af'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
