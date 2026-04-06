import { Category } from '@/src/types/types';
import React from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';

type Props = {
  item: Category;
};

const CategoryBadge = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.icon} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
    borderRadius: 999,
    borderWidth: 0,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 6,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    fontFamily: Platform.select({
      ios: 'AvenirNext-Regular',
      android: 'sans-serif',
    }),
  },
});

export default CategoryBadge;
