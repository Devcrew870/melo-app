import { useAuth } from '@/src/contexts/AuthContext';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Topbar = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}>
          <Image
            style={styles.profileImg}
            source={
              user?.photo
                ? { uri: user.photo }
                : require('../../../assets/images/logo.png')
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },
  profileContainer: {
    paddingRight: 20,
  },
  profileCircle: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderColor: 'black',
  },
  profileImg: {
    width: 42,
    height: 42,
    overflow: 'hidden',
    borderRadius: 100,
  },
});

export default Topbar;
