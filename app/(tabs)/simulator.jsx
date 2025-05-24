import { Ionicons } from '@expo/vector-icons';
import { doc, updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Animated, Image, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { db } from '../../config/firebaseConfig';
import Colors from '../../constants/Colors';
import { UserDetailContext } from '../../context/UserDetailContext';

const ATTACK_TYPES = {
  PHISHING: 'phishing',
  SOCIAL_ENGINEERING: 'social_engineering',
  BRUTE_FORCE: 'brute_force'
};

const SCENARIOS = {
  [ATTACK_TYPES.PHISHING]: [
    {
      id: 'phish1',
      title: 'Email Suspect',
      description: 'Ai primit următorul email:\n\n"Dragă utilizatorule,\n\nContul tău bancar necesită o verificare urgentă. Click aici pentru a-ți verifica contul: http://bank-secure-verify.com"\n\nCe faci?',
      options: [
        { id: 'a', text: 'Fac click pe link pentru verificare', isCorrect: false },
        { id: 'b', text: 'Verific adresa URL și observ că nu este domeniul oficial al băncii', isCorrect: true },
        { id: 'c', text: 'Introduc datele bancare pentru verificare', isCorrect: false }
      ],
      explanation: 'Linkul folosește un domeniu care imită site-ul băncii. Băncile nu cer niciodată date sensibile prin email.',
      difficulty: 1
    },
    {
      id: 'phish2',
      title: 'Mesaj de la "CEO"',
      description: 'Primești un email urgent de la CEO-ul companiei care îți cere să transferi bani într-un cont nou:\n\n"Avem nevoie urgent să transferi 5000€ în contul atașat. Este confidențial."\n\nCum procedezi?',
      options: [
        { id: 'a', text: 'Transfer banii imediat - este urgent', isCorrect: false },
        { id: 'b', text: 'Verific personal cu CEO sau managerul direct', isCorrect: true },
        { id: 'c', text: 'Răspund la email cerând mai multe detalii', isCorrect: false }
      ],
      explanation: 'Atacatorii folosesc adesea tactici de urgență și autoritate. Verifică întotdeauna personal cererile neobișnuite.',
      difficulty: 2
    }
  ],
  [ATTACK_TYPES.SOCIAL_ENGINEERING]: [
    {
      id: 'social1',
      title: 'Apel de la "Suport IT"',
      description: 'Primești un apel de la cineva care se prezintă ca fiind de la suportul IT:\n\n"Am detectat un virus pe calculatorul tău. Am nevoie de credențialele tale pentru a-l elimina."\n\nCum reacționezi?',
      options: [
        { id: 'a', text: 'Ofer credențialele pentru a rezolva problema rapid', isCorrect: false },
        { id: 'b', text: 'Închid și sun la numărul oficial al departamentului IT', isCorrect: true },
        { id: 'c', text: 'Accept să instalez software-ul recomandat de ei', isCorrect: false }
      ],
      explanation: 'Departamentul IT nu va cere niciodată credențialele tale. Verifică întotdeauna identitatea apelantului.',
      difficulty: 1
    },
    {
      id: 'social2',
      title: 'Visitor Neașteptat',
      description: 'O persoană în uniformă de curier încearcă să intre în birou:\n\n"Am o livrare urgentă pentru manager, dar am uitat cardul de acces."\n\nCe faci?',
      options: [
        { id: 'a', text: 'Las persoana să intre - pare legitimă', isCorrect: false },
        { id: 'b', text: 'Verific cu recepția și urmez procedura de securitate', isCorrect: true },
        { id: 'c', text: 'Îi arăt drumul spre biroul managerului', isCorrect: false }
      ],
      explanation: 'Atacatorii pot folosi uniforme și scenarii convingătoare. Urmează întotdeauna procedurile de securitate.',
      difficulty: 2
    }
  ],
  [ATTACK_TYPES.BRUTE_FORCE]: [
    {
      id: 'brute1',
      title: 'Configurare Parolă',
      description: 'Trebuie să setezi o parolă nouă pentru contul tău. Care dintre următoarele este cea mai sigură?',
      options: [
        { id: 'a', text: 'Password123!', isCorrect: false },
        { id: 'b', text: 'Kj9#mP2$vL5@nQ8', isCorrect: true },
        { id: 'c', text: 'NumeleMeu2024', isCorrect: false }
      ],
      explanation: 'O parolă puternică conține caractere speciale, numere, litere mari și mici, și nu folosește informații personale.',
      difficulty: 1
    },
    {
      id: 'brute2',
      title: 'Autentificare Suspectă',
      description: 'Observi multiple încercări eșuate de autentificare pe contul tău. Ce măsuri iei?',
      options: [
        { id: 'a', text: 'Ignor - probabil am greșit parola', isCorrect: false },
        { id: 'b', text: 'Activez autentificarea în doi factori și schimb parola', isCorrect: true },
        { id: 'c', text: 'Dezactivez temporar contul', isCorrect: false }
      ],
      explanation: 'Multiplele încercări eșuate pot indica un atac brute force. 2FA oferă un nivel suplimentar de securitate.',
      difficulty: 2
    }
  ]
};

export default function AttackSimulator() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
//   const context = useContext(UserDetailContext);
// if (!context) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Contextul utilizatorului nu este disponibil.</Text>
//     </View>
//   );
// }
// const { userDetail, setUserDetail } = context;

  const [selectedType, setSelectedType] = useState(null);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [progress] = useState(new Animated.Value(0));
  const [showExplanation, setShowExplanation] = useState(false);

  const startScenario = (type) => {
    const scenarios = SCENARIOS[type];
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    setSelectedType(type);
    setCurrentScenario(randomScenario);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowExplanation(false);

    // Reset and start progress animation
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: 30000, // 30 seconds
      useNativeDriver: false
    }).start(() => {
      if (!selectedAnswer) {
        handleAnswer(null);
      }
    });
  };

  const handleAnswer = async (answerId) => {
    progress.stopAnimation();
    const isCorrect = answerId ? currentScenario.options.find(opt => opt.id === answerId)?.isCorrect : false;
    const points = isCorrect ? (currentScenario.difficulty * 10) : 0;
    
    setSelectedAnswer(answerId);
    setShowResult(true);
    setScore(points);

    // Update user's points and progress
    if (isCorrect) {
      try {
        const newPoints = (userDetail?.points || 0) + points;
        const newLevel = Math.floor(newPoints / 100) + 1;
        let newRank = userDetail?.rank;

        if (newLevel >= 15) newRank = "Expert";
        else if (newLevel >= 10) newRank = "Advanced";
        else if (newLevel >= 5) newRank = "Intermediate";

        const updatedData = {
          points: newPoints,
          level: newLevel,
          rank: newRank,
          simulatorProgress: {
            ...(userDetail?.simulatorProgress || {}),
            [currentScenario.id]: true
          }
        };

        await updateDoc(doc(db, "users", userDetail.uid), updatedData);
        setUserDetail({ ...userDetail, ...updatedData });
      } catch (error) {
        console.error("Error updating user progress:", error);
      }
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case ATTACK_TYPES.PHISHING:
        return 'fish-outline';
      case ATTACK_TYPES.SOCIAL_ENGINEERING:
        return 'people-outline';
      case ATTACK_TYPES.BRUTE_FORCE:
        return 'hammer-outline';
      default:
        return 'shield-outline';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case ATTACK_TYPES.PHISHING:
        return '#7F8CAA';
      case ATTACK_TYPES.SOCIAL_ENGINEERING:
        return '#9B7EBD';
      case ATTACK_TYPES.BRUTE_FORCE:
        return '#670D2F';
      default:
        return Colors.PRIMARY;
    }
  };

  if (!currentScenario) {
    return (
      <ScrollView style={styles.container}>
        <Image
  source={require('../../assets/images/img_hacker.jpg')}
  style={{
    width: '100%',
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover'
  }}
/>
        <Text style={styles.header}>Simulator de Atacuri</Text>
        <Text style={styles.subheader}>Alege tipul de atac pentru simulare:</Text>
        
        {Object.values(ATTACK_TYPES).map((type) => (
          <Pressable
            key={type}
            style={[styles.typeCard, { backgroundColor: getTypeColor(type) }]}
            onPress={() => startScenario(type)}
          >
            <Ionicons name={getTypeIcon(type)} size={32} color={Colors.WHITE} />
            <View style={styles.typeInfo}>
              <Text style={styles.typeTitle}>
                {type === ATTACK_TYPES.PHISHING ? 'Phishing' :
                 type === ATTACK_TYPES.SOCIAL_ENGINEERING ? 'Inginerie Socială' :
                 'Atac Brute Force'}
              </Text>
              <Text style={styles.typeDescription}>
                {type === ATTACK_TYPES.PHISHING ? 'Identifică și evită atacurile de tip phishing' :
                 type === ATTACK_TYPES.SOCIAL_ENGINEERING ? 'Învață să recunoști manipularea socială' :
                 'Protejează-te împotriva atacurilor brute force'}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => {
          setCurrentScenario(null);
          setSelectedType(null);
        }}
      >
        <Ionicons name="arrow-back" size={24} color={Colors.DARK} />
        <Text style={styles.backText}>Înapoi</Text>
      </Pressable>

      <ScrollView style={styles.scenarioContainer}>
        <View style={[styles.scenarioCard, { backgroundColor: getTypeColor(selectedType) }]}>
          <Text style={styles.scenarioTitle}>{currentScenario.title}</Text>
          <Text style={styles.scenarioDescription}>{currentScenario.description}</Text>

          {!showResult && (
            <View style={styles.timerContainer}>
              <Animated.View
                style={[
                  styles.timerBar,
                  {
                    width: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['100%', '0%']
                    })
                  }
                ]}
              />
            </View>
          )}

          <View style={styles.optionsContainer}>
            {currentScenario.options.map((option) => (
              <Pressable
                key={option.id}
                style={[
                  styles.optionButton,
                  selectedAnswer === option.id && styles.selectedOption,
                  showResult && option.isCorrect && styles.correctOption,
                  showResult && selectedAnswer === option.id && !option.isCorrect && styles.incorrectOption
                ]}
                onPress={() => !showResult && handleAnswer(option.id)}
                disabled={showResult}
              >
                <Text style={[
                  styles.optionText,
                  (showResult && (option.isCorrect || selectedAnswer === option.id)) && styles.optionTextSelected
                ]}>
                  {option.text}
                </Text>
              </Pressable>
            ))}
          </View>

          {showResult && (
            <View style={styles.resultContainer}>
              <Text style={styles.scoreText}>
                {score > 0 ? `+${score} puncte!` : 'Niciun punct câștigat'}
              </Text>
              <Pressable
                style={styles.explanationButton}
                onPress={() => setShowExplanation(true)}
              >
                <Text style={styles.explanationButtonText}>Vezi explicația</Text>
              </Pressable>
              <Pressable
                style={styles.nextButton}
                onPress={() => startScenario(selectedType)}
              >
                <Text style={styles.nextButtonText}>Următorul scenariu</Text>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>

      <Modal
        visible={showExplanation}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowExplanation(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Explicație</Text>
              <Pressable onPress={() => setShowExplanation(false)}>
                <Ionicons name="close" size={24} color={Colors.DARK} />
              </Pressable>
            </View>
            <Text style={styles.explanationText}>{currentScenario.explanation}</Text>
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
    paddingTop: Platform.OS === 'ios' ? 55 : 20,
  },
  header: {
    fontSize: 28,
    fontFamily: 'outfit-bold',
    color: Colors.DARK,
    padding: 20,
  },
  subheader: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.GRAY,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  typeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  typeInfo: {
    marginLeft: 15,
    flex: 1,
  },
  typeTitle: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    color: Colors.WHITE,
    marginBottom: 5,
  },
  typeDescription: {
    fontSize: 14,
    fontFamily: 'outfit',
    color: Colors.WHITE,
    opacity: 0.9,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  backText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.DARK,
  },
  scenarioContainer: {
    flex: 1,
  },
  scenarioCard: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  scenarioTitle: {
    fontSize: 24,
    fontFamily: 'outfit-bold',
    color: Colors.WHITE,
    marginBottom: 15,
  },
  scenarioDescription: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.WHITE,
    marginBottom: 20,
    lineHeight: 24,
  },
  timerContainer: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    marginBottom: 20,
  },
  timerBar: {
    height: '100%',
    backgroundColor: Colors.WHITE,
    borderRadius: 2,
  },
  optionsContainer: {
    gap: 10,
  },
  optionButton: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: Colors.PRIMARY,
  },
  correctOption: {
    backgroundColor: '#4CAF50',
  },
  incorrectOption: {
    backgroundColor: '#F44336',
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.DARK,
  },
  optionTextSelected: {
    color: Colors.WHITE,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontFamily: 'outfit-bold',
    color: Colors.WHITE,
    marginBottom: 15,
  },
  explanationButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  explanationButtonText: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.WHITE,
  },
  nextButton: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  nextButtonText: {
    fontSize: 16,
    fontFamily: 'outfit-bold',
    color: Colors.DARK,
    textAlign: 'center',
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
    fontSize: 24,
    fontFamily: 'outfit-bold',
    color: Colors.DARK,
  },
  explanationText: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.DARK,
    lineHeight: 24,
  },
}); 