import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';
import { UserDetailContext } from './../../context/UserDetailContext';

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
      <View style={styles.headerContainer}>
        <View style={styles.userInfoContainer}>
          <Image 
            source={require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>
              <Text style={styles.hello}>Bună, </Text>
              <Text style={styles.name}>{userDetail?.name}</Text>
            </Text>
            <Text style={styles.subtitle}>Hai să începem!</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity 
            style={styles.settingsButton} 
            onPress={() => setShowMenu(prev => !prev)}
          >
            <Ionicons name="settings-outline" size={28} color={Colors.DARK_BLUE} />
          </TouchableOpacity>

          {showMenu && (
            <View style={styles.dropdown}>
              <TouchableOpacity
                style={styles.dropdownItemWrapper}
                onPress={() => {
                  setShowMenu(false);
                  router.push('/profile');
                }}
              >
                <Ionicons name="person-outline" size={20} color={Colors.DARK_BLUE} />
                <Text style={styles.dropdownItem}>Profil</Text>
              </TouchableOpacity>
              
              <View style={styles.divider} />
              
              <TouchableOpacity
                style={styles.dropdownItemWrapper}
                onPress={handleLogout}
              >
                <Ionicons name="log-out-outline" size={20} color={Colors.DARK_BLUE} />
                <Text style={styles.dropdownItem}>Delogare</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>Nivel {Math.floor((userDetail?.points || 0) / 100) + 1}</Text>
          <Text style={styles.statLabel}>{userDetail?.rank}</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingTop: 20,
    paddingBottom: 15,
    borderRadius: 20,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 26,
    color: Colors.DARK,
  },
  hello: {
    fontFamily: 'outfit',
  },
  name: {
    fontFamily: 'outfit-bold',
  },
  subtitle: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.GRAY,
    marginTop: 2,
  },
  menuContainer: {
    position: 'relative',
  },
  settingsButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: Colors.BG_GRAY,
  },
  dropdown: {
    position: 'absolute',
    top: 50,
    right: 0,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    paddingVertical: 8,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 100,
  },
  dropdownItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  dropdownItem: {
    marginLeft: 10,
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.DARK_BLUE,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.BG_GRAY,
    marginVertical: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.BG_GRAY,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'outfit-bold',
    fontSize: 18,
    color: Colors.DARK_BLUE,
  },
  statLabel: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: Colors.GRAY,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: Colors.BG_GRAY,
  },
});