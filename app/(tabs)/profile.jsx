import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { FlatList, Image, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { auth } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';
import { ProfileMenu } from '../../constants/Option';
import { UserDetailContext } from '../../context/UserDetailContext';

export default function Profile() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [showBadges, setShowBadges] = useState(false);
  const router = useRouter();

  const onMenuClick = (menu) => {
    if (menu.name === 'Logout') {
      signOut(auth)
        .then(() => {
          setUserDetail(null);
          router.push('/');
        })
        .catch((error) => {
          console.error('Error signing out:', error);
        });
    } else if (menu.path) {
      router.push(menu.path);
    }
  };

  const getLevelInfo = (points) => {
    const level = Math.floor(points / 100) + 1;
    const pointsToNext = 100 - (points % 100);
    return { level, pointsToNext };
  };

  const getBadgeInfo = (badgeName) => {
    switch (badgeName) {
      case "Introducere în securitate":
        return {
          icon: "shield-checkmark",
          color: "#4CAF50",
          description: "Ai finalizat cursul introductiv de securitate!"
        };
      case "Atacuri comune":
        return {
          icon: "warning",
          color: "#FF9800",
          description: "Ai învățat despre atacurile cibernetice comune!"
        };
      case "Apărare și prevenție":
        return {
          icon: "lock-closed",
          color: "#2196F3",
          description: "Stăpânești tehnicile de apărare și prevenție!"
        };
      case "Cazuri reale":
        return {
          icon: "trophy",
          color: "#9C27B0",
          description: "Expert în analiza cazurilor reale!"
        };
      default:
        return {
          icon: "ribbon",
          color: "#607D8B",
          description: "Insignă specială"
        };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Profile */}
      <Text style={styles.headerTitle}>Profil</Text>

      {/* Profile Image and Info */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userDetail?.name}</Text>
        <Text style={styles.userEmail}>{userDetail?.email}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>Nivel {getLevelInfo(userDetail?.points || 0).level}</Text>
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

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((userDetail?.points || 0) % 100)}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {getLevelInfo(userDetail?.points || 0).pointsToNext} puncte până la următorul nivel
          </Text>
        </View>
      </View>

      {/* Menu Options */}
      <FlatList
        data={[
          ...ProfileMenu,
          {
            name: 'Insignele Mele',
            icon: 'ribbon',
            onPress: () => setShowBadges(true)
          }
        ]}
        keyExtractor={(item) => item.name}
        style={styles.menuList}
        renderItem={({ item }) => (
          <Pressable
            style={styles.menuItem}
            onPress={() => item.onPress ? item.onPress() : onMenuClick(item)}
          >
            <Ionicons name={item.icon} size={24} color={Colors.DARK} style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.name}</Text>
          </Pressable>
        )}
      />

      {/* Badges Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showBadges}
        onRequestClose={() => setShowBadges(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Insignele Mele</Text>
              <Pressable onPress={() => setShowBadges(false)}>
                <Ionicons name="close" size={24} color={Colors.DARK} />
              </Pressable>
            </View>

            {userDetail?.badges?.length > 0 ? (
              <FlatList
                data={userDetail.badges}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                  const badgeInfo = getBadgeInfo(item);
                  return (
                    <View style={styles.badgeItem}>
                      <View style={[styles.badgeIcon, { backgroundColor: badgeInfo.color }]}>
                        <Ionicons name={badgeInfo.icon} size={32} color={Colors.WHITE} />
                      </View>
                      <View style={styles.badgeInfo}>
                        <Text style={styles.badgeName}>{item}</Text>
                        <Text style={styles.badgeDescription}>{badgeInfo.description}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            ) : (
              <View style={styles.emptyBadges}>
                <Ionicons name="ribbon-outline" size={64} color={Colors.GRAY} />
                <Text style={styles.emptyText}>Nu ai încă nicio insignă</Text>
                <Text style={styles.emptySubtext}>Completează cursurile pentru a câștiga insigne!</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 55 : 20,
  },
  headerTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    marginBottom: 20,
    color: Colors.DARK,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  userName: {
    fontFamily: 'outfit-bold',
    fontSize: 24,
    color: Colors.DARK,
    marginBottom: 5,
  },
  userEmail: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.GRAY,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  statValue: {
    fontFamily: 'outfit-bold',
    fontSize: 18,
    color: Colors.DARK,
  },
  statLabel: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: Colors.GRAY,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: Colors.BG_GRAY,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: Colors.BG_GRAY,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.PRIMARY,
  },
  progressText: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: Colors.GRAY,
    marginTop: 8,
  },
  menuList: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.BG_GRAY,
    marginVertical: 5,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontFamily: 'outfit',
    fontSize: 18,
    color: Colors.DARK,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontFamily: 'outfit-bold',
    fontSize: 24,
    color: Colors.DARK,
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.BG_GRAY,
    marginBottom: 10,
  },
  badgeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  badgeInfo: {
    flex: 1,
  },
  badgeName: {
    fontFamily: 'outfit-bold',
    fontSize: 18,
    color: Colors.DARK,
    marginBottom: 5,
  },
  badgeDescription: {
    fontFamily: 'outfit',
    fontSize: 14,
    color: Colors.GRAY,
  },
  emptyBadges: {
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
    color: Colors.DARK,
    marginTop: 20,
  },
  emptySubtext: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: Colors.GRAY,
    marginTop: 10,
    textAlign: 'center',
  },
});
