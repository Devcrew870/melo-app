import { useAuth } from '../../src/contexts/AuthContext';
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
import { categories, popularVendors } from '@/src/utils/constant';
import PopularCard from '@/src/components/ui/PopularCard';
import CategoryBadge from '@/src/components/ui/CategoryBadge';
import Fontisto from '@expo/vector-icons/Fontisto';
import { COLORS } from '@/src/theme/colors';

export default function Home() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      <Topbar />

      <View style={styles.searchBar} >
        <TextInput style={styles.input} placeholder='Find neighor cakes, crafts or gifts......' />
        <Fontisto name="search" size={20} color="gray" style={styles.searchIcon} />
      </View>

      {/* Hero Banner */}
      <View style={styles.heroContainer}>
        <View style={styles.heroImageWrapper}>
          <ImageBackground
            source={require('../../assets/images/hero.png')}
            style={styles.heroImage}
            imageStyle={{
              borderRadius: 30
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
          <Text style={{ color: COLORS.primary, fontWeight: '500' }}>SEE ALL</Text>
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
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={popularVendors}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.cardWrapper,
              {
                marginLeft: index % 2 === 0 ? 20 : 10,
                marginRight: index % 2 === 0 ? 10 : 20,
              },
            ]}
          >
            <PopularCard
              item={item}
              badgeText={
                index === 0
                  ? 'Popular'
                  : index === 2
                    ? 'Top Pick'
                    : index === 4
                      ? 'New'
                      : undefined
              }
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
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
    marginBottom: 25
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#b0b0b0',
    width: '90%',
    height: 50,
    margin: 'auto',
    borderRadius: 15,
    position: 'relative',
    fontSize: 18,
    paddingLeft: 60,
    fontWeight: 400
  },
  searchIcon: {
    position: "absolute", 
    left: 45, 
    top: 15
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroContainer: {
    width: '90%',
    marginTop: 0,
    height: 200,
    margin: 'auto'
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
    borderRadius: 30
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
    color: 'white'
  },
  heroSheet: {
    marginTop: 50,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },
  sectionRow: {
    flexDirection: 'row',
    flex:1, 
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
  },
  cardWrapper: {
    flex: 1,
  },
});
