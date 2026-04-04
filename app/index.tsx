import { useAuth } from '../src/contexts/AuthContext';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../src/theme/colors';
import Topbar from '@/src/components/layout/Topbar';
import { categories, popularVendors } from '@/src/utils/constant';
import PopularCard from '@/src/components/ui/PopularCard';
import CategoryBadge from '@/src/components/ui/CategoryBadge';

export default function Home() {
  const { user, signOut, isAuthenticated } = useAuth();

  // This should not happen due to routing, but just in case
  if (!isAuthenticated) {
    return null; // _layout.tsx should handle routing
  }

  return (
    <SafeAreaView style={styles.container}>
      <Topbar />
      {/* home header */}
      <View style={styles.boxContainer}>
        <Text style={styles.heading}>
          Discover local talent,{'\n'}
          made just for you 🌿
        </Text>
        <Text style={styles.subheading}>
          Unique services, handcrafted with love - near you.
        </Text>
      </View>

      <View style={styles.popularContainer}>
        <View style={styles.popularHeaderSeperation}>
          <Text style={styles.sectionHeading}>Popular near you</Text>
          <Text style={styles.linkText}>See All</Text>
        </View>
        <View style={styles.popularBody}>
          <FlatList
            data={popularVendors}
            renderItem={({ item }) => <PopularCard item={item} />}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.popularHeaderSeperation}>
          <Text style={styles.sectionHeading}>Categories</Text>
          <Text style={styles.linkText}>View All</Text>
        </View>
        <View style={styles.categoryBody}>
          <FlatList
            data={categories}
            renderItem={({ item }) => <CategoryBadge item={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  boxContainer: {
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },
  subheading: {
    fontSize: 12,
    color: 'gray',
  },
  popularContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: '500',
  },
  popularHeaderSeperation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    fontWeight: '400',
    textDecorationLine: 'underline',
    lineHeight: 20,
    fontSize: 14,
  },
  popularBody: {
    marginTop: 15,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoryBody: {
    marginTop: 15,
    flexDirection: 'row',
  },
});
