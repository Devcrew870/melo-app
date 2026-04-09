import { useAuth } from '../../src/contexts/AuthContext';
import React, { useMemo, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Platform,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Topbar from '@/src/components/layout/Topbar';
import { categories, serviceCatalog } from '@/src/utils/constant';
import PopularCard from '@/src/components/ui/PopularCard';
import CategoryBadge from '@/src/components/ui/CategoryBadge';
import Fontisto from '@expo/vector-icons/Fontisto';
import { COLORS } from '@/src/theme/colors';
import { Vendors } from '@/src/types/types';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const trimmedSearchTerm = searchTerm.trim();

  const filteredServiceCatalog = useMemo(() => {
    const query = trimmedSearchTerm.toLowerCase();
    if (!trimmedSearchTerm) {
      return serviceCatalog;
    }

    return serviceCatalog
      .map(section => ({
        ...section,
        offerings: section.offerings
          .map(offering => ({
            ...offering,
            vendors: offering.vendors.filter(vendor => {
              const searchableFields = [
                vendor.vendorName,
                vendor.productName,
                vendor.description,
                vendor.location?.address,
              ];
              return searchableFields.some(field =>
                field?.toLowerCase().includes(query),
              );
            }),
          }))
          .filter(offering => offering.vendors.length > 0),
      }))
      .filter(section => section.offerings.length > 0);
  }, [trimmedSearchTerm]);

  if (!isAuthenticated) {
    return null;
  }

  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      <Topbar />

      <View style={styles.searchBar}>
        <View style={styles.searchInputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Find neighbor cakes, crafts, or gifts..."
            placeholderTextColor="#9CA3AF"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <Fontisto
            name="search"
            size={20}
            color="#6B7280"
            style={styles.searchIcon}
            pointerEvents="none"
          />
        </View>
      </View>

      {/* Hero Banner */}
      <View style={styles.heroContainer}>
        <View style={styles.heroImageWrapper}>
          <ImageBackground
            source={require('../../assets/images/hero.png')}
            style={styles.heroImage}
            imageStyle={{
              borderRadius: 30,
            }}
          >
            <View style={styles.heroOverlay}>
              <Text style={styles.heroTitle}>
                Discover Local{'\n'}Treasures
              </Text>
              <Text style={styles.heroSubTitle}>
                Connect with the finest creators in your{'\n'}neighborhood.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.heroSheet}>
        <View style={styles.sectionRow}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explore Craft</Text>
          </View>
          <View>
            <Text style={{ color: COLORS.primary, fontWeight: '500' }}>
              SEE ALL
            </Text>
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryBadge item={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.sectionTitle}>Curated for You</Text>
        <View>
          <View />
          <View />
          <View />
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredServiceCatalog}
        renderItem={({ item }) => (
          <>
            {item.offerings[0].vendors.map(vendor => (
              <View style={styles.cardWrapper} key={`${item.id}-${vendor.id}`}>
                <PopularCard item={vendor} />
              </View>
            ))}
          </>
        )}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyResult}>
            <Text style={styles.emptyText}>
              {trimmedSearchTerm
                ? `No vendors match “${trimmedSearchTerm}”.`
                : 'No vendors available right now.'}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.scrollContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    width: '100%',
  },
  searchBar: {
    marginBottom: 25,
    overflow: 'hidden',
    alignItems: 'center',
  },
  searchInputWrapper: {
    width: '90%',
    position: 'relative',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#b0b0b0',
    width: '100%',
    height: 52,
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 45,
    paddingRight: 16,
    fontWeight: '400',
    backgroundColor: COLORS.white,
    color: COLORS.textPrimary,
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
    zIndex: 1,
  },
  emptyResult: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#6B7280',
    fontSize: 16,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroContainer: {
    width: '90%',
    marginTop: 0,
    height: 200,
    margin: 'auto',
  },
  heroImageWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  heroOverlay: {
    padding: 26,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 30,
  },
  heroTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFF',
    lineHeight: 40,
    marginBottom: 10,
    fontFamily: Platform.select({
      ios: 'PlayfairDisplay-Bold',
      android: 'PlayfairDisplay-Bold',
    }),
  },
  heroButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    marginBottom: 60,
  },
  heroSubTitle: {
    color: 'white',
  },
  heroSheet: {
    paddingTop: 24,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },
  sectionRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeader: {
    paddingHorizontal: 0,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: Platform.select({
      ios: 'PlayfairDisplay-Bold',
      android: 'PlayfairDisplay-Bold',
    }),
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
    fontFamily: Platform.select({
      ios: 'Inter',
      android: 'sans-serif',
    }),
  },
  categoriesContainer: {
    marginTop: 16,
    marginBottom: 10,
  },
  categoriesList: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    gap: 15,
  },
  cardWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 12,
  },
  body: {
    width: '90%',
    margin: 'auto',
    marginBottom: 15,
  },
});
