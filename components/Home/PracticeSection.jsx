import { useRouter } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PracticeOption } from '../../constants/Option';


export default function PracticeSection() {
  const router = useRouter();

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 25, color: 'black' ,marginBottom: -12}}>Exersează</Text>

      <FlatList
        data={PracticeOption}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ marginTop: 4 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push('/practice/' + item.name)}
            style={[styles.card,
                item.name === 'Întrebări & Răspunsuri' && { marginTop: 20 }
            ]}
            // onPress={() => {
            //   if (item.name === 'Simulator Atacuri') {
            //     router.push('/(tabs)/simulator');
            //   } else {
            //     router.push('/practice/' + item.name);
            //   }
            // }}
            // style={[
            //   styles.card,
            //   item.name === 'Întrebări & Răspunsuri' && { marginTop: 20 }
            // ]}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    maxWidth: 110,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // iOS
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 4
  },
  imageContainer: {
    width: 110,
    height: 110,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  label: {
    marginTop: 6,
    fontFamily: 'outfit',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});
