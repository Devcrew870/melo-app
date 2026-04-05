import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { PopularVendor } from '@/src/types/types';
import { Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';

type Props = {
  item: PopularVendor;
  onPress?: () => void;
  badgeText?: string;
};

const PopularCard = ({ item, onPress, badgeText }: Props) => {
  const badgeStyle = () => {
    switch (badgeText) {
      case 'Popular':
        return styles.badgePopular;
      case 'Top Pick':
        return styles.badgeTopPick;
      case 'New':
        return styles.badgeNew;
      default:
        return styles.badgeDefault;
    }
  };

  const badgeTextColor = badgeText === 'Top Pick' ? '#111' : '#fff';

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.overlay} />

        {/* Badge */}
        {badgeText && (
          <View style={[styles.badge, badgeStyle()]}>
            <Text style={[styles.badgeText, { color: badgeTextColor }]}>
              {' '}
              {badgeText}{' '}
            </Text>
          </View>
        )}

        {/* Favorite Icon */}
        <TouchableOpacity style={styles.favoriteBtn}>
          <Ionicons name="heart" size={16} color="#FF5A5F" />
        </TouchableOpacity>

        {/* Text Content */}
        <View style={styles.textOverlay}>
          <Text numberOfLines={1} style={styles.title}>
            {item.category}
          </Text>

          <View style={styles.infoRow}>
            <Fontisto name="shopping-store" size={10} color="#fff" />
            <Text numberOfLines={1} style={styles.infoText}>
              {item.name}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="location-sharp" size={10} color="#fff" />
            <Text numberOfLines={1} style={styles.infoText}>
              {item.location}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 180,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#F8FAFC',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
  },
  badge: {
    position: 'absolute',
    top: 14,
    left: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
  },
  badgePopular: {
    backgroundColor: '#2DD4BF',
  },
  badgeTopPick: {
    backgroundColor: '#FDE68A',
  },
  badgeNew: {
    backgroundColor: '#34D399',
  },
  badgeDefault: {
    backgroundColor: 'rgba(255,255,255,0.32)',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.2,
    fontFamily: Platform.select({
      ios: 'Inter-SemiBold',
      android: 'sans-serif-medium',
    }),
  },
  favoriteBtn: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#fff',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    fontFamily: Platform.select({
      ios: 'Inter-SemiBold',
      android: 'sans-serif-medium',
    }),
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  infoText: {
    color: '#fff',
    fontSize: 11,
    marginLeft: 6,
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    fontFamily: Platform.select({
      ios: 'Inter',
      android: 'sans-serif',
    }),
  },
});

export default PopularCard;
