import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PopularVendor } from '@/src/types/types';

type Props = {
  item: PopularVendor;
  onPress?: () => void;
};

const PopularCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={item.image} />

        <View style={styles.overlay} />

        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {item.category}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
  },

  imageWrapper: {
    width: '100%',
    height: 110,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },

  textContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
  },

  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  subtitle: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.9,
    marginTop: 2,
  },
});

export default PopularCard;
