import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function Header() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserDetail(null);
        router.replace('/');
      })
      .catch((err) => console.error('Eroare delogare:', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.profileSection}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>
                Bună, <Text style={styles.name}>{userDetail?.name}</Text>
              </Text>
              <Text style={styles.subtitle}>Hai să începem!</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.settingsButton}
            onPress={() => setShowMenu(prev => !prev)}
          >
            <Ionicons name="settings-outline" size={24} color={Colors.PRIMARY} />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>Nivel {userDetail?.level || 1}</Text>
            <Text style={styles.statLabel}>{userDetail?.rank || 'Beginner'}</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userDetail?.points || 0}</Text>
            <Text style={styles.statLabel}>Puncte</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{userDetail?.badges?.length || 0}</Text>
            <Text style={styles.statLabel}>Insigne</Text>
          </View>
        </View>
      </View>

      {showMenu && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setShowMenu(false);
              router.push('/profile');
            }}
          >
            <Ionicons name="person-outline" size={20} color={Colors.DARK} />
            <Text style={styles.dropdownText}>Profil</Text>
          </TouchableOpacity>
          
          <View style={styles.dropdownDivider} />
          
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={20} color={Colors.DARK} />
            <Text style={styles.dropdownText}>Delogare</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greetingContainer: {
    gap: 4,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'outfit',
    color: Colors.DARK,
  },
  name: {
    fontFamily: 'outfit-bold',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.GRAY,
  },
  settingsButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: Colors.BG_GRAY,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.BG_GRAY,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    color: Colors.PRIMARY,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'outfit',
    color: Colors.GRAY,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: Colors.BG_GRAY,
  },
  dropdown: {
    position: 'absolute',
    top: 90,
    right: 30,
    backgroundColor: Colors.WHITE,
    borderRadius: 16,
    padding: 8,
    width: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 100,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
  dropdownText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.DARK,
  },
  dropdownDivider: {
    height: 1,
    backgroundColor: Colors.BG_GRAY,
    marginVertical: 4,
  },
});