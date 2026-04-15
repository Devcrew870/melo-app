import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/theme/colors';

type Vendor = {
  id: string;
  category: string;
  name: string;
  ownerName: string;
  tagline: string;
  location: string;
  description: string;
  rating: number;
  image: string;
  primaryAction: string;
  coverImage: ImageSourcePropType;
  logoImage: ImageSourcePropType;
};

const filterTags = ['All', 'Cakes', 'Henna', 'Stitching', 'Preserves', 'Crafts'];

const vendors: Vendor[] = [
  {
    id: 'aysha',
    category: 'Cakes',
    name: "Aysha's Bakes",
    ownerName: 'Aysha Khan',
    tagline: 'Artisan Cakes and Pastries',
    location: 'Indiranagar, 2 km away',
    description: 'Organic, small-batch cakes baked with love and locally sourced ingredients.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1505253758473-6d7c6b80f7fb',
    primaryAction: 'View Shop',
    coverImage: require('../../assets/images/categories/cake.jpg'),
    logoImage: require('../../assets/images/categories/cake.jpg'),
  },
  {
    id: 'mehendi',
    category: 'Henna',
    name: 'Mehendi by Zara',
    ownerName: 'Zara Sheikh',
    tagline: 'Henna Artist',
    location: 'HSR Layout, 4.5 km away',
    description: 'Fine bridal henna with contemporary motifs that take 2 hours to finish.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
    primaryAction: 'View Shop',
    coverImage: require('../../assets/images/categories/mehendi.jpg'),
    logoImage: require('../../assets/images/categories/mehendi.jpg'),
  },
  {
    id: 'thread',
    category: 'Stitching',
    name: 'Thread & Needle',
    ownerName: 'Nida Rahman',
    tagline: 'Custom Stitching',
    location: 'Koramangala, 3 km away',
    description: 'Hand-woven textiles refitted with couture finishing for sarees and blouses.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1592927959475-2d86bae56d18',
    primaryAction: 'View Shop',
    coverImage: require('../../assets/images/categories/stitching.jpg'),
    logoImage: require('../../assets/images/categories/stitching.jpg'),
  },
  {
    id: 'green',
    category: 'Preserves',
    name: 'The Green Jar',
    ownerName: 'Mira Dsouza',
    tagline: 'Organic Preserves',
    location: 'Indira Nagar, 1.8 km away',
    description: 'Small-batch pickles and preserves crafted from organic farm surplus.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17',
    primaryAction: 'View Shop',
    coverImage: require('../../assets/images/categories/gift.jpg'),
    logoImage: require('../../assets/images/categories/gift.jpg'),
  },
];

const supportAvatars = [
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
];

const filterMatches = (vendor: Vendor, active: string) =>
  active === 'All' || vendor.category === active;

type VendorCardProps = {
  vendor: Vendor;
};

const VendorCard = ({ vendor }: VendorCardProps) => {
  const [mainLocation] = vendor.location.split(',');

  return (
    <View style={[styles.vendorCard, styles.communityCard]}>
      <Image
        source={vendor.coverImage}
        style={styles.communityImage}
        resizeMode="cover"
      />
      <View style={styles.communityBody}>
        <View style={styles.communityHeader}>
          <View style={styles.vendorHeaderContent}>
            <Text style={styles.vendorCardTitle}>{vendor.name}</Text>
            <Text style={styles.vendorCardTagline}>{vendor.tagline}</Text>
          </View>
          <View style={styles.ownerCard}>
            <Image
              source={vendor.logoImage}
              style={styles.ownerLogo}
              resizeMode="cover"
            />
            <View style={styles.ownerTextWrap}>
              <Text style={styles.ownerLabel}>Owner</Text>
              <Text style={styles.ownerName}>{vendor.ownerName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.communityLocationRow}>
          <Ionicons
            name="location-outline"
            size={14}
            color={COLORS.textSecondary}
            style={styles.locationIcon}
          />
          <Text style={styles.vendorCardLocationText}>{mainLocation.trim()}</Text>
        </View>
        <Text style={styles.vendorCardDescription}>{vendor.description}</Text>
        <View style={styles.communityActions}>
          <TouchableOpacity style={styles.communityButton} activeOpacity={0.8}>
            <Text style={styles.communityButtonLabel}>{vendor.primaryAction}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton} activeOpacity={0.7}>
            <Ionicons name="heart-outline" size={18} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Vendors = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredVendors = useMemo(
    () => vendors.filter(item => filterMatches(item, activeFilter)),
    [activeFilter],
  );
  const topVendors = filteredVendors.slice(0, 3);
  const remainingVendors = filteredVendors.slice(3);
  const hasCommunityVendors = filteredVendors.length > 0;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* <View style={styles.topBar}>
          <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={22} color={COLORS.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Local Vendors</Text>
          <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.7}>
            <Ionicons name="search" size={22} color={COLORS.textPrimary} />
          </TouchableOpacity>
        </View> */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {filterTags.map(tag => {
            const isActive = tag === activeFilter;
            return (
              <TouchableOpacity
                key={tag}
                style={[
                  styles.filterPill,
                  isActive && styles.activeFilterPill,
                ]}
                onPress={() => setActiveFilter(tag)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.filterLabel,
                    isActive && styles.filterLabelActive,
                  ]}
                >
                  {tag}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {hasCommunityVendors ? (
          <>
            <Text style={styles.sectionTitle}>Community Picks</Text>
            {topVendors.map(vendor => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </>
        ) : (
          <Text style={styles.emptyState}>
            We are curating more artisans for this specialty. Check back soon!
          </Text>
        )}

        <View style={styles.supportCard}>
          <View style={styles.supportHeading}>
            <Ionicons name="heart" size={28} color={COLORS.white} />
            <Text style={styles.supportTitle}>Support Local Artisans</Text>
          </View>
          <Text style={styles.supportBody}>
            Every purchase supports a family in your neighborhood. Discover the
            magic of handmade.
          </Text>
          <View style={styles.avatarRow}>
            {supportAvatars.map(uri => (
              <Image
                key={uri}
                source={{ uri }}
                style={styles.avatar}
                resizeMode="cover"
              />
            ))}
            <View style={styles.moreBadge}>
              <Text style={styles.moreBadgeLabel}>+50</Text>
            </View>
          </View>
        </View>

        {remainingVendors.map(vendor => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}

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
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  topBar: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  iconWrapper: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 16,
    shadowColor: COLORS.textPrimary,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  filterRow: {
    paddingBottom: 8,
  },
  filterPill: {
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 40,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: COLORS.textPrimary,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  activeFilterPill: {
    backgroundColor: COLORS.primary,
    borderColor: 'transparent',
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  filterLabelActive: {
    color: COLORS.white,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  emptyState: {
    fontSize: 14,
    color: COLORS.textSecondary,
    paddingVertical: 12,
  },
  vendorCard: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    shadowColor: COLORS.textPrimary,
    shadowOpacity: 0.05,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  communityImage: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  communityBody: {
    marginTop: 12,
  },
  vendorHeaderContent: {
    flex: 1,
    minWidth: 0,
    paddingRight: 14,
  },
  vendorCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  vendorCardTagline: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  favoriteButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vendorCardLocationText: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  locationIcon: {
    marginRight: 6,
  },
  communityCard: {
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  communityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  communityLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ownerCard: {
    maxWidth: 116,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 7,
    flexShrink: 0,
  },
  ownerLogo: {
    width: 24,
    height: 24,
    borderRadius: 8,
  },
  ownerTextWrap: {
    marginLeft: 8,
    flexShrink: 1,
  },
  ownerLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  ownerName: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginTop: 1,
    lineHeight: 15,
  },
  vendorCardDescription: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginTop: 10,
    fontStyle: 'italic',
    lineHeight: 20,
  },
  communityActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  communityButton: {
    flex: 1,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  communityButtonLabel: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
  },
  supportCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    padding: 20,
    marginVertical: 16,
  },
  supportHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  supportTitle: {
    marginLeft: 10,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
  },
  supportBody: {
    color: COLORS.white,
    fontSize: 14,
    lineHeight: 20,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  moreBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  moreBadgeLabel: {
    color: COLORS.white,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 32,
  },
});

export default Vendors;
