import { useAuth } from '@/src/contexts/AuthContext';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

const Categories = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/login');
  };

  return (
    <View>
      <TouchableOpacity onPress={handleSignOut} style={{ marginTop: 50 }}>
        <Text>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;
