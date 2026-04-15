import { COLORS } from '@/src/theme/colors';
import { AllCategories } from '@/src/types/types';
import React from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';

type Props = {
  item: AllCategories;
  containerStyle?: ViewStyle;
};

const CategoryCard = ({ item, containerStyle }: Props) => {
  return (
    <View style={[styles.categoryCardWrapper, containerStyle]}>
      <View style={styles.categoryCard}>
        <Image style={styles.imageWrapper} source={{ uri: item.image }} />
        <View style={styles.overlay} />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{item.vendors}+ Vendors</Text>
        </View>
        <View style={styles.textOverlay}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCardWrapper: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryCard: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
  },
  badgeContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 12,
  },
  textOverlay: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
  },
  cardTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
  },
  cardSubtitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8,
  },
  cardDescription: {
    color: COLORS.white,
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.9,
  },
});

export default CategoryCard;
