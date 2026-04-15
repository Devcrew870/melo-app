import { useAuth } from '@/src/contexts/AuthContext';
import { COLORS } from '@/src/theme/colors';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ProfileMenuItem = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  onPress?: () => void;
  destructive?: boolean;
};

const Profile = () => {
  const { user, signOut } = useAuth();

  const handleComingSoon = (label: string) => {
    Alert.alert(label, 'This section will be available soon.');
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      Alert.alert('Logout failed', 'Please try again.');
    }
  };

  const menuItems: ProfileMenuItem[] = [
    {
      id: 'settings',
      label: 'Account Settings',
      icon: 'settings-outline',
      onPress: () => handleComingSoon('Account Settings'),
    },
    {
      id: 'address',
      label: 'Address Book',
      icon: 'location-outline',
      onPress: () => handleComingSoon('Address Book'),
    },
    {
      id: 'support',
      label: 'Help & Support',
      icon: 'help-circle-outline',
      onPress: () => handleComingSoon('Help & Support'),
    },
    {
      id: 'about',
      label: 'About Us',
      icon: 'information-circle-outline',
      onPress: () => handleComingSoon('About Us'),
    },
    {
      id: 'logout',
      label: 'Logout',
      icon: 'log-out-outline',
      iconColor: '#D62D20',
      destructive: true,
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileHero}>
          <View style={styles.avatarWrap}>
            <Image
              source={
                user?.photo
                  ? { uri: user.photo }
                  : require('../../assets/images/logo.png')
              }
              style={styles.avatar}
            />
            <Pressable style={styles.editBadge}>
              <MaterialIcons name="edit" size={18} color={COLORS.white} />
            </Pressable>
          </View>
          <Text style={styles.profileName}>{user?.name ?? 'Alex Johnson'}</Text>
        </View>

        <View style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.75}
              onPress={item.onPress}
              style={[
                styles.menuItem,
                index !== menuItems.length - 1 && styles.menuItemBorder,
              ]}
            >
              <View style={styles.menuItemLeft}>
                <View style={styles.menuIconWrap}>
                  <Ionicons
                    name={item.icon}
                    size={22}
                    color={item.iconColor ?? '#7D8578'}
                  />
                </View>
                <Text
                  style={[
                    styles.menuLabel,
                    item.destructive && styles.menuLabelDestructive,
                  ]}
                >
                  {item.label}
                </Text>
              </View>
              {!item.destructive && (
                <Ionicons
                  name="chevron-forward"
                  size={22}
                  color="#C5CBC0"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: 110,
  },
  profileHero: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 24,
  },
  avatarWrap: {
    position: 'relative',
  },
  avatar: {
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 6,
    borderColor: '#E4F0DF',
    backgroundColor: COLORS.white,
  },
  editBadge: {
    position: 'absolute',
    right: -2,
    bottom: 4,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  profileName: {
    marginTop: 22,
    fontSize: 28,
    fontWeight: '800',
    color: '#151515',
    textAlign: 'center',
  },
  menuCard: {
    marginHorizontal: 22,
    marginTop: 8,
    borderRadius: 26,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#D5DFC8',
    overflow: 'hidden',
    shadowColor: '#203321',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  menuItem: {
    minHeight: 88,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2E7',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIconWrap: {
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  menuLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1D1D1D',
  },
  menuLabelDestructive: {
    color: '#D62D20',
  },
  bottomSpacing: {
    height: 18,
  },
});

export default Profile;
