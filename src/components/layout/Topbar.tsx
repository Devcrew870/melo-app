import { useAuth } from '@/src/contexts/AuthContext';
import { COLORS } from '@/src/theme/colors';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
};

const Topbar = ({ title }: Props) => {
  const { user } = useAuth();
  const heading = title ? title : 'Marketplace';
  const subheading = title ? 'Explore trusted local picks' : 'Discover nearby makers';

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.brandBadge}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logoMark}
          />
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{heading}</Text>
          <Text style={styles.subtitle}>{subheading}</Text>
        </View>
      </View>
      <View style={styles.profileShell}>
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
    height: 88,
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE6DE',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  brandBadge: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E7DDD3',
    shadowColor: '#2A3A26',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  logoMark: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  textBlock: {
    marginLeft: 12,
    flexShrink: 1,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 21,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 2,
    color: COLORS.textSecondary,
    fontSize: 13,
    fontWeight: '500',
  },
  profileShell: {
    marginLeft: 14,
  },
  profileCircle: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E7DDD3',
    shadowColor: '#2A3A26',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  profileImg: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 14,
  },
});

export default Topbar;
