import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { ServiceCatalog, Vendors } from '@/src/types/types';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { COLORS } from '@/src/theme/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  item: Vendors;
  onPress?: () => void;
  badgeText?: string;
};

const PopularCard = ({ item, onPress, badgeText }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
        {/* <View style={styles.overlay} /> */}
      </View>
      <View style={{ marginTop: 10, padding: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <Text numberOfLines={1} style={styles.title}>
              {item.productName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.infoRow}>
                <Fontisto
                  name="shopping-store"
                  size={10}
                  color={COLORS.primary}
                />
                <Text numberOfLines={1} style={styles.infoText}>
                  {item.vendorName}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <EvilIcons name="location" size={18} color="gray" />
                <Text
                  style={{ fontSize: 10, color: 'gray', fontStyle: 'italic' }}
                >
                  {item.location?.address || ''}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'column', columnGap: 10 }}>
            <Text style={styles.price}>${item.price}</Text>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 12,
                color: 'gray',
                fontWeight: '500',
              }}
            >
              Starts At
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 5,
            padding: 10,
          }}
        >
          <Text
            style={{ color: 'gray', fontStyle: 'italic' }}
          >{`${'"'}${item.description}.${'"'}`}</Text>
        </View>

        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: COLORS.primary,
                width: '100%',
                flexDirection: 'row',
                paddingHorizontal: 40,
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                borderRadius: 15,
              }}
            >
              <MaterialIcons name="message" size={24} color="white" />
              {/* <MaterialIcons name="details" size={24} color="white" /> */}
              <Text style={{ color: 'white', fontSize: 16 }}>View Details</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 50,
              width: 50,
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
          >
            <EvilIcons name="heart" size={30} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 700,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#F8FAFC',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
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
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 10,
    fontFamily: Platform.select({
      ios: 'Inter-SemiBold',
      android: 'sans-serif-medium',
    }),
  },
  price: {
    fontWeight: '600',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: COLORS.primary,
    fontSize: 11,
    marginLeft: 6,
    fontWeight: '500',
    fontFamily: Platform.select({
      ios: 'Inter',
      android: 'sans-serif',
    }),
  },
});

export default PopularCard;
