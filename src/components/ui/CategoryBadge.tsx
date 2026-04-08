import { COLORS } from '@/src/theme/colors';
import { Category } from '@/src/types/types';
import React from 'react';
import { Image, StyleSheet, Text, View, Platform } from 'react-native';

type Props = {
  item: Category;
};

const CategoryBadge = ({ item }: Props) => {
  const Icon = item.icon;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Icon name={item.iconName} size={24} color={COLORS.secondary} />
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingVertical: 5,
    minHeight: 60,
    width: 'auto',
    borderRadius: 999,
    borderWidth: 0,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 6,
  },
  text: {
    marginTop: 6,
    marginRight: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: Platform.select({
      ios: 'AvenirNext-Regular',
      android: 'sans-serif',
    }),
  },
});

export default CategoryBadge;
