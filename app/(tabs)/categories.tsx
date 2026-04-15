import CategoryCard from '@/src/components/ui/CategoryCard';
import { COLORS } from '@/src/theme/colors';
import { allCategories } from '@/src/utils/constant';
import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchBar}>
          <View style={styles.searchInputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Find neighbor cakes, crafts, or gifts..."
              placeholderTextColor="#9CA3AF"
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
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Local Excellence</Text>
            <Text style={styles.headerSubTitle}>
              Discover your top-rated talent{'\n'}in your neighborhood
            </Text>
            <Text style={styles.headerDescription}>
              Browse through vetted professionals offering{'\n'}
              unique handcrafted products and specialized{'\n'}
              local services.
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.headerImage}
              source={{
                uri: 'https://images.unsplash.com/photo-1507471509451-1d04d60f896d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
              }}
            />
          </View>
        </View>

        <View style={styles.categoriesGrid}>
          {allCategories.flatMap((item, index) =>
            index % 2 === 0
              ? [
                  <View key={`${item.id}-left`} style={styles.categoryColumn}>
                    <CategoryCard item={item} />
                  </View>,
                  allCategories[index + 1] ? (
                    <View
                      key={`${allCategories[index + 1].id}-right`}
                      style={styles.categoryColumn}
                    >
                      <CategoryCard item={allCategories[index + 1]} />
                    </View>
                  ) : null,
                ]
              : [],
          )}
        </View>

        <View style={styles.helpCard}>
          <View style={styles.helpTextContainer}>
            <Text style={styles.helpTitle}>
              {`Can't find what you're looking for?`}
            </Text>
            <Text style={styles.helpDescription}>
              Suggest a new category or describe your requirement to get
              matched.
            </Text>
          </View>
          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpButtonText}>Get Help</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 100,
  },
  searchBar: {
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 30,
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
  header: {
    height: 300,
    width: '90%',
    margin: 'auto',
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 100,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerTitle: {
    color: COLORS.tertiary,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  headerSubTitle: {
    color: COLORS.tertiary,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 8,
  },
  headerDescription: {
    color: COLORS.tertiary,
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingBottom: 24,
  },
  categoryColumn: {
    width: '50%',
    marginBottom: 16,
  },
  helpCard: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 18,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  helpTextContainer: {
    flex: 1,
    paddingRight: 12,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  helpDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  helpButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  helpButtonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});

export default Categories;
