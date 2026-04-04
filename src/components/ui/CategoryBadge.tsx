import { Category } from '@/src/types/types';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  item: Category;
};

const CategoryBadge = ({ item }: Props) => {
  return (
    <View style={styles.categoryHolder}>
      <View style={styles.categoryBadgeCircle}>
        <Image
          source={item.image}
          style={styles.categoryBadgeImage}
        />
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryHolder: {
    alignItems: 'center',
    marginRight: 12,
  },
  categoryBadgeCircle: {
    height: 60,
    width: 60,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 4,
  },
  categoryBadgeImage: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 100
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default CategoryBadge;