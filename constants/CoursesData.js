export const coursesData = [
  {
    title: "Introducere în Securitate",
    description:
      "Un curs introductiv despre securitatea informației, care acoperă conceptele fundamentale, tipurile de atacuri cibernetice, actorii implicați și strategiile de apărare. Este ideal pentru începători care vor să înțeleagă cum pot proteja informațiile în era digitală.",
    banner_image: "/banner3.png",
    achievementBadge: "secure-beginner",
    summary: `Atacurile asupra securității informației au crescut exponențial în ultimii ani, în ciuda miliardelor de dolari cheltuiți anual pentru securitate. Niciun sistem informatic nu este complet imun sau 100% sigur.

Motivele pentru care este greu să ne apărăm de atacurile moderne includ:

Faptul că aproape toate dispozitivele sunt conectate la Internet;
Viteza și sofisticarea atacurilor;
Disponibilitatea și ușurința utilizării uneltelor de atac;
Detectarea rapidă a vulnerabilităților de către atacatori;
Întârzierea actualizărilor de securitate;
Distribuirea slabă a actualizărilor;
Atacuri multiple, confuzie în rândul utilizatorilor.

Securitatea informației este definită ca procesul de protejare a:
Integrității,
Confidențialității și
Disponibilității informațiilor pe dispozitivele care le stochează, procesează și transmit.

Aceasta este realizată prin produse, oameni, politici și proceduri.

Termeni esențiali:
Amenințare = eveniment/acțiune ce poate face rău unui activ.
Agent al amenințării = persoană/element capabil să exploateze o vulnerabilitate.
Vulnerabilitate = slăbiciune în sistem.
Risc = probabilitatea ca agentul să exploateze vulnerabilitatea.

Obiectivele principale ale securității informației sunt:
Prevenirea furtului de date;
Împiedicarea furtului de identitate;
Evitarea consecințelor legale;
Menținerea productivității;
Combaterea terorismului cibernetic.

Categoriile de atacatori cibernetici:
Cybercriminalii: grupuri motivate financiar, bine finanțate, greu de descurajat.
Script Kiddies: tineri cu puține cunoștințe, dar care folosesc unelte automate.
Brokers: vând informații despre vulnerabilități către alți atacatori.
Insiders: angajați nemulțumiți care fură sau sabotează.
Cyberteroriștii: motivați de ideologie, creează panică și haos.
Hacktiviștii: protestează politic prin atacuri informatice.
Atacatori sponsorizati de stat: acționează în numele unui guvern pentru a spiona sau destabiliza.

O strategie completă de securitate presupune:
Blocarea atacurilor (prin perimetru de securitate).
Actualizarea continuă a apărării.
Minimizărea pierderilor.
Vigilență constantă.`,
    chapters: [
      {
        title: "Provocările asigurării informațiilor",
        subsections: [
          {
            name: "Atacurile din prezent",
            content: `Deși securitatea informației este o preocupare majoră și se investesc anual miliarde de dolari în acest domeniu, numărul atacurilor reușite continuă să crească. Printre exemplele recente se numără:
Atacuri asupra sistemelor PoS (point-of-sale) din magazinele de retail, unde peste 1,02 miliarde de înregistrări cu date ale cardurilor de plată au fost furate într-un singur an. Infractorii folosesc programe malițioase numite „memory-scrapers” care colectează datele imediat după ce cardul este trecut prin PoS. Aceste atacuri se propagă prin emailuri cu fișiere Word malițioase care par inofensive.


Sectorul sănătății este o țintă principală deoarece dosarele medicale conțin date personale și financiare. Acestea pot fi folosite pentru furt de identitate, fraudă medicală sau revânzare de medicamente. Un raport a arătat o creștere de 60% a atacurilor într-un an și o pierdere medie de peste 2 milioane dolari pe organizație.


Rețelele wireless casnice sunt vulnerabile în echipamentele de la 25 de producători mari, ceea ce permite atacatorilor să lanseze software malițios către orice dispozitiv conectat. Multe dispozitive nu pot fi actualizate, iar unii producători nu mai oferă suport.


Atacuri asupra automobilelor inteligente, demonstrate de cercetători care au controlat de la 16 km distanță funcții esențiale ale unei mașini (aer condiționat, ștergătoare, accelerație, frâne). Experimentul a dus la pierderea controlului mașinii, care a ieșit de pe carosabil. Incidentul a determinat autoritățile să recheme 1,4 milioane de vehicule pentru remedierea vulnerabilității – o premieră.


Manipularea avioanelor în zbor: Un cercetător a accesat sistemele de divertisment ale avionului prin conectarea unui laptop la o cutie electronică de sub scaun. A pretins că a reușit să controleze chiar și direcția avionului. FBI a investigat, iar compania aeriană i-a interzis accesul la toate zborurile.


Furturi auto prin sistemele PKES (cheie pasivă): O adolescentă a folosit un amplificator de semnal pentru a deschide și porni o mașină fără cheie. Costul unui astfel de dispozitiv este de doar 17 dolari. Se recomandă ca cheia să fie păstrată într-un recipient care blochează semnalul (ex: congelator).


Ineficiența produselor antivirus: Un test pe zeci de mii de fișiere malițioase a arătat că, în prima oră, cele mai utilizate patru programe antivirus au detectat doar 30% din amenințări. După o săptămână, rata de detectare a crescut la 72%, dar tot rămân sute de fișiere nedetectate zilnic.


Furtul de conținut din industria muzicală: Madonna a fost nevoită să lanseze un album mai devreme după ce piesele și pozele ei au fost furate și distribuite online. În viitor, ea a declarat că nu va mai stoca materiale sensibile pe dispozitive conectate la internet.


Temeri ale populației: 69% dintre americani se tem că datele cardurilor lor vor fi furate online – mai mulți decât cei care se tem de jafuri sau atacuri fizice. Aproape o treime au declarat că ei sau un membru al familiei au fost victime ale unui furt de date.


Vulnerabilități la dispozitivele Apple: Deși considerate sigure, dispozitivele Apple au fost afectate de o eroare gravă care permitea accesul la sistem chiar și după reinstalarea completă. Majoritatea modelelor vechi sunt afectate.


Creșterea breșelor de securitate: Între 2005 și 2015, peste 853 de milioane de înregistrări electronice au fost compromise în SUA, inclusiv date despre adrese, sănătate, conturi bancare etc.


Tabel 1-1: Breșe de securitate selectate care implică informații personale într-o perioadă de o lună
Organizație
Descrierea breșei de securitate
Numărul de identități expuse
Oficiul pentru Managementul Personalului
Angajați actuali și foști ai guvernului federal au avut expuse sarcinile de serviciu, performanța și instruirea; este posibil să fi fost expuse informații financiare și/sau de asigurări sociale.
4.000.000
CareFirst BlueCross BlueShield
Securitatea unei baze de date a fost compromisă, expunând nume, date de naștere, adrese de email și numere de identificare pentru asigurări.
1.100.000
Colegiul de Inginerie al Penn State
În două intruziuni separate, atacatorii au accesat „date sensibile” ale tuturor studenților, profesorilor și angajaților colegiului.
18.000
Salley Beauty
„Activitate neobișnuită a cardurilor de plată în unele magazine” – urmată de un atac anterior în care au fost furate datele a peste 25.000 de carduri ale clienților.
Necunoscut
AT&T
În trei incidente diferite, angajați au accesat numele și numerele de asigurare socială ale clienților, vândute apoi către persoane care le-au folosit pentru deblocarea telefoanelor furate.
280.000
Anthem BlueCross BlueShield
Nume, date de naștere, ID-uri medicale, numere de asigurare socială, adrese, emailuri, date de angajare și venituri au fost furate într-un atac care a rămas nedetectat timp de 10 luni.
80.000.000.`,
            flashcards: [
              {
                title: "Flashcard 1",
                cards: [
                  {
                    front: "Ce sunt atacurile PoS?",
                    back: "Atacuri asupra sistemelor de plată din magazine, care fură datele cardurilor prin malware."
                  }
                ]
              },
              {
                title: "Flashcard 2",
                cards: [
                  {
                    front: "De ce este vizat sectorul sănătății?",
                    back: "Pentru că dosarele medicale conțin atât date personale, cât și financiare valoroase."
                  }
                ]
              },
              {
                title: "Flashcard 3",
                cards: [
                  {
                    front: "Ce vulnerabilitate au rețelele wireless casnice?",
                    back: "Echipamentele de la mulți producători permit lansarea de atacuri asupra dispozitivelor conectate."
                  }
                ]
              },
              {
                title: "Flashcard 4",
                cards: [
                  {
                    front: "Cum pot fi manipulate automobilele inteligente?",
                    back: "Cercetătorii au controlat funcții de la distanță precum frânele sau ștergătoarele."
                  }
                ]
              },
              {
                title: "Flashcard 5",
                cards: [
                  {
                    front: "Care este riscul produselor antivirus?",
                    back: "Nu detectează rapid toate amenințările – uneori, sute de fișiere malițioase scapă nedetectate."
                  }
                ]
              }
            ],
            qa: [
              {
                question: "Care este cauza atacurilor asupra sistemelor PoS?",
                answer: "Utilizarea de malware pentru a colecta date imediat după trecerea cardului."
              },
              {
                question: "Ce pierdere medie a fost raportată în sectorul sănătății?",
                answer: "Peste 2 milioane de dolari pe organizație."
              },
              {
                question: "Ce vulnerabilitate afectează rețelele wireless casnice?",
                answer: "Dispozitivele nu pot fi actualizate, iar producătorii nu oferă suport."
              },
              {
                question: "Ce tehnică de furt auto a fost demonstrată?",
                answer: "Folosirea unui amplificator de semnal pentru a porni mașina fără cheie."
              },
              {
                question: "Ce erori au afectat dispozitivele Apple?",
                answer: "Permiteau accesul la sistem chiar și după reinstalare completă."
              }
            ]
          }
        ]
      },
      {
        title: "Ce este securitatea informației?",
        subsections:[
            {
                name:"Înțelegerea securității",
                content:`Înainte de a ne putea apăra împotriva atacurilor, este esențial să înțelegem ce este securitatea și cum se aplică ea în contextul informației. De asemenea, cunoașterea terminologiei ajută la crearea unor măsuri eficiente de protecție, mai ales în cazul computerelor.

Înțelegerea conceptului de securitate
Termenul securitate poate avea mai multe definiții:
„Stare de libertate față de pericol”


„Protejarea proprietății”


„Grad de rezistență la daune”


Diferențele apar în funcție de accentul pus pe proces (cum se obține securitatea) sau pe scop (ce înseamnă să fii în siguranță). În realitate, securitatea este o combinație între scopul de a fi în siguranță și procesul de a ajunge acolo.

Securitatea ca proces
Deoarece siguranța totală nu poate fi atinsă niciodată, securitatea este adesea privită ca un proces continuu care implică:
Pași necesari pentru a proteja o persoană sau proprietate de vătămare.


Exemplu: O casă trebuie protejată atât de:
Atacuri directe (un infractor sau hoț),


Cât și de pericole indirecte (furtuni, uragane).


Această protecție poate include:
Uși încuiate,


Garduri,


Prezența autorităților,


Construcții solide și sisteme de reacție rapidă.

Securitatea presupune măsuri preventive (ex: încuierea ușilor) și răspuns rapid (ex: apelarea automată a poliției la 911 dacă apare ceva suspect).
Securitatea informației implică înțelegerea riscurilor și aplicarea unor măsuri pentru a proteja datele de atacuri directe sau indirecte. Securitatea este atât un obiectiv (siguranța), cât și un proces (măsuri preventive și reacție).

Relația dintre securitate și comoditate
Pe măsură ce securitatea crește, comoditatea scade. Cu alte cuvinte, ceva foarte sigur poate fi mai greu de utilizat. Exemplu: un sistem de alarmă care cere introducerea unui cod în 30 de secunde – sporește siguranța casei, dar e mai incomod decât să intri direct.
Securitatea înseamnă sacrificarea confortului pe termen scurt pentru protecție pe termen lung.
`,
                flashcards: [
        {
          title: "Definiții ale securității",
          cards: [
            {
              front: "Ce înseamnă securitate?",
              back: "Stare de libertate față de pericol, protejarea proprietății și grad de rezistență la daune."
            }
          ]
        },
        {
          title: "Securitatea ca proces",
          cards: [
            {
              front: "De ce este securitatea un proces?",
              back: "Pentru că implică pași continui pentru protecție împotriva pericolelor."
            }
          ]
        },
        {
          title: "Exemplu de măsuri de protecție",
          cards: [
            {
              front: "Ce măsuri de protecție pot avea casele?",
              back: "Uși încuiate, garduri, autorități, construcții solide, reacție rapidă."
            }
          ]
        },
        {
          title: "Comoditate vs. Securitate",
          cards: [
            {
              front: "Care este relația dintre securitate și comoditate?",
              back: "Pe măsură ce securitatea crește, comoditatea scade."
            }
          ]
        }
      ],
                qa: [
        {
          question: "De ce securitatea este considerată un proces continuu?",
          answer: "Pentru că siguranța totală nu poate fi atinsă și necesită acțiuni constante."
        },
        {
          question: "Ce înseamnă securitatea în contextul unei case?",
          answer: "Protecția casei față de atacuri directe și pericole naturale, prin măsuri fizice și de reacție."
        },
        {
          question: "Cum afectează securitatea comoditatea?",
          answer: "Măsurile de securitate cresc siguranța, dar pot face sistemul mai greu de utilizat."
        }
      ]
            },
              {
                name:"Definirea securității informației",
                content:`Securitatea informației presupune protejarea datelor digitale manipulate de procesoare, stocate pe dispozitive (hard disk, USB) și transmise prin rețea.
Este atât un obiectiv (protecția datelor), cât și un proces (cum se realizează protecția). Nu poate preveni toate atacurile, dar trebuie să limiteze efectele acestora și să prevină prăbușirea sistemului. Scopul principal este protecția.
Obiectivele securității informației: Triada CIA
Confidențialitate (Confidentiality) – doar persoanele autorizate pot accesa informația.
 Exemplu: criptarea numărului cardului bancar.


Integritate (Integrity) – datele sunt corecte și nealterate.
 Exemplu: un atacator nu poate schimba suma unei tranzacții.


Disponibilitate (Availability) – datele sunt accesibile pentru cei autorizați.
 Exemplu: angajatul poate vedea comenzile online pentru a le trimite clientului.
Protecții suplimentare: AAA
Autentificare (Authentication) – confirmă că persoana este cine pretinde că este (ex: parolă).


Autorizare (Authorization) – permite accesul doar după autentificare, în funcție de drepturile acordate.


Audit / Contabilitate (Accounting) – urmărește cine a accesat ce și când (jurnal de activitate).



Cum se protejează informația?
Pentru că informația este stocată pe hardware, manipulată prin software și transmisă prin comunicații, toate aceste zone trebuie protejate.
 Securitatea este realizată prin trei straturi:
Produse (echipamente, software),


Oameni (utilizatori, experți),


Politici și proceduri (reguli clare).


Aceste componente colaborează pentru a asigura protecția eficientă a datelor.

Securitatea informației presupune un echilibru între protecție și utilizabilitate. Ea include:
măsuri tehnice (criptare, acces controlat),


politici clare,


implicarea oamenilor în respectarea regulilor.


Scopul este prevenirea, detectarea și reacția eficientă la atacuri, fără a compromite complet accesibilitatea sau funcționalitatea sistemului.

Tabel 1-3: Straturi ale securității informației
Strat
Descriere
Produse
Reprezintă protecția în jurul datelor. Poate fi ceva simplu, precum încuietori, sau complex, ca echipamente de securitate în rețea.
Oameni
Cei care implementează și folosesc corect produsele de securitate pentru a proteja datele.
Politici și proceduri
Planuri și politici stabilite de o organizație pentru a asigura utilizarea corectă a produselor de către oameni.


O definiție cuprinzătoare a securității informației implică atât obiectivele, cât și procesul. Securitatea informației poate fi definită ca acea activitate care protejează integritatea, confidențialitatea și disponibilitatea informațiilor de pe dispozitivele care stochează, procesează și transmit informațiile, prin intermediul produselor, oamenilor și procedurilor.
`,
                flashcards:[
        {
          title: "Triada CIA",
          cards: [
            {
              front: "Care sunt obiectivele Triadei CIA?",
              back: "Confidențialitate, Integritate, Disponibilitate."
            }
          ]
        },
        {
          title: "Protecțiile AAA",
          cards: [
            {
              front: "Ce înseamnă AAA în securitate?",
              back: "Autentificare, Autorizare, Audit."
            }
          ]
        },
        {
          title: "Straturile securității",
          cards: [
            {
              front: "Care sunt cele 3 straturi ale securității informației?",
              back: "Produse, Oameni, Politici și proceduri."
            }
          ]
        },
        {
          title: "Exemplu de produs de securitate",
          cards: [
            {
              front: "Ce este considerat un produs în securitate?",
              back: "Echipamente de protecție, criptare, software antivirus."
            }
          ]
        }
      ],
                qa:[
        {
          question: "Ce asigură confidențialitatea?",
          answer: "Accesul la informații doar pentru persoanele autorizate."
        },
        {
          question: "Ce scop are integritatea datelor?",
          answer: "Să se asigure că datele sunt corecte și nealterate."
        },
        {
          question: "Ce înseamnă audit în contextul AAA?",
          answer: "Urmărirea accesărilor și acțiunilor asupra datelor."
        },
        {
          question: "Care este scopul politicilor și procedurilor?",
          answer: "Asigurarea utilizării corecte a produselor de către oameni."
        }
      ]

            },
              {
                name:"Terminologia securității informației",
                content:`Așa cum se întâmplă în multe domenii avansate, și securitatea informației are un set propriu de termeni. Următorul scenariu ajută la ilustrarea acestor termeni și modul în care sunt folosiți.
Să presupunem că Ellie dorește să cumpere un scuter italian nou, pe care să-l folosească pentru a merge de la apartamentul ei la școală și la serviciu. Totuși, pentru că mai multe scutere au fost furate în zona unde locuiește, este îngrijorată în privința protejării acestuia. Deși îl parchează într-o parcare cu gard, chiar în fața apartamentului, există o gaură în gardul ce înconjoară complexul rezidențial, prin care oricine poate intra fără restricții. 

În acest context:
Scuterul lui Ellie este un activ – un obiect care are valoare.


Pericolul ca acesta să fie furat reprezintă o amenințare – o acțiune potențial periculoasă.


Gaura din gard este o vulnerabilitate – un punct slab care permite amenințării să se manifeste.


Persoana care ar putea fura scuterul este agentul amenințării – elementul capabil să execute fapta.


Furtul scuterului este rezultatul nedorit – adică pierdere sau risc.


O amenințare, în sine, nu înseamnă că securitatea a fost compromisă, ci doar că există un risc real de pierdere.
Agentul amenințării este persoana sau elementul care are puterea de a duce la îndeplinire amenințarea. În cazul lui Ellie, acesta este hoțul. În securitatea informației, agentul amenințării poate fi un atacator cibernetic, un virus informatic, sau chiar o forță a naturii (ex: un uragan care distruge echipamentele).
Ellie vrea să își protejeze scuterul și este îngrijorată din cauza unei găuri în gardul din jurul apartamentului. Gaura din gard este o vulnerabilitate – o slăbiciune sau un defect care permite unui agent al amenințării să treacă de sistemul de protecție.
În securitatea informației, o vulnerabilitate poate fi, de exemplu, un defect de software într-un sistem de operare care permite unui utilizator neautorizat să preia controlul unui calculator fără acordul sau cunoștința utilizatorului.
 Dacă hoțul ajunge la scuterul lui Ellie prin gaura din gard, atunci el exploatează vulnerabilitatea – adică profită de acel punct slab. Acest lucru se numește vector de amenințare – mijlocul prin care se poate realiza un atac.
În lumea digitală, un atacator care știe că un server nu are toate actualizările poate folosi acest vector pentru a fura parole, de exemplu.
 Probabilitatea unei amenințări – cum luăm decizii în securitate?
Ellie trebuie să ia o decizie: care este probabilitatea (sau probabilitatea amenințării) ca scuterul să-i fie furat? Acesta este conceptul de risc – o situație care implică expunerea la pericol.
Ea are mai multe opțiuni:
 Evitarea riscului (risk avoidance): Decide că riscul e prea mare și renunță să mai cumpere scuterul.


 Acceptarea riscului (risk acceptance): Îl cumpără totuși, știind că există pericolul ca un hoț să intre prin gard.


Reducerea riscului (risk mitigation): Se plânge administratorului și solicită repararea gardului.


 Descurajarea riscului (risk deterrence): Cere afișarea unui semn cu mesaj de genul „Intrarea interzisă. Hoții vor fi pedepsiți!”


 Transferul riscului (risk transference): Cel mai probabil, Ellie va cumpăra asigurare. Dacă scuterul e furat, compania de asigurări suportă pierderea, nu ea.



Tabel 1-4 – Terminologia securității informației
Termen
Exemplu în scenariul lui Ellie
Exemplu în securitatea informației
Activ
Scuter
Baza de date a angajaților
Amenințare
Furtul scuterului
Furtul de date
Agent al amenințării
Hoț
Atacator, uragan
Vulnerabilitate
Gaura din gard
Defect de software
Vector de amenințare
Intrarea prin gaura din gard
Accesarea parolelor de pe server printr-o vulnerabilitate software
Probabilitatea amenințării
Probabilitatea ca scuterul să fie furat
Probabilitatea unei infectări cu virus
Risc
Să nu mai cumpere scuterul
Să nu instaleze rețeaua wireless


`,
                flashcards: [
        {
          title: "Termeni fundamentali",
          cards: [
            {
              front: "Ce este o amenințare?",
              back: "Un eveniment sau o acțiune ce poate cauza daune unui activ."
            }
          ]
        },
        {
          title: "Agentul amenințării",
          cards: [
            {
              front: "Cine este agentul amenințării?",
              back: "Persoana sau elementul care poate executa o amenințare."
            }
          ]
        },
        {
          title: "Vulnerabilitate și vector",
          cards: [
            {
              front: "Ce este un vector de amenințare?",
              back: "Mijlocul prin care o amenințare este realizată, exploatând o vulnerabilitate."
            }
          ]
        }
      ],
                qa: [
        {
          question: "Cum poate fi definit riscul în securitate?",
          answer: "Probabilitatea ca o vulnerabilitate să fie exploatată de un agent al amenințării."
        },
        {
          question: "Ce înseamnă transferul riscului?",
          answer: "Mutarea responsabilității, de exemplu prin asigurare."
        },
        {
          question: "Cum se manifestă o amenințare în cazul lui Ellie?",
          answer: "Furtul scuterului din cauza unei găuri în gard."
        }
      ]

            },
              {
                name:"Înțelegerea importanței securității informației",
                content:`Securitatea informației este importantă atât pentru persoane, cât și pentru organizații. Asta deoarece poate ajuta la:
prevenirea furtului de date,


împiedicarea furtului de identitate,


evitarea consecințelor legale pentru lipsa de protecție a informației,


menținerea productivității,


combaterea terorismului cibernetic.

Prevenirea furtului de date
Securitatea este adesea asociată cu prevenirea furtului: Ellie poate parca scuterul într-un garaj încuiat ca să nu fie furat. La fel, protejarea datelor de a fi „furate” este unul dintre principalele scopuri ale securității informației.
Pentru afaceri, este esențial să se apere împotriva furtului de informații valoroase, cum ar fi cercetarea pentru un produs nou sau listele de clienți.
Țintele preferate ale infractorilor digitali:
Numerele de card bancar: de debit, credit sau carduri cadou.


Acestea pot fi vândute pe piața neagră și folosite pentru cumpărături online, înainte ca victima sau banca să observe ceva.



Tehnici frecvente de hoție a datelor:
Hoții fac o mică tranzacție pentru a vedea dacă un card este activ, fără a atrage atenția.


Vânzătorii de pe piața neagră oferă garanții temporare că numerele de card vor funcționa.


Aceștia monitorizează utilizarea pentru a evita detectarea – dacă un card e descoperit, clienții pierd bani.


Dacă numărul furat e însoțit de informații personale (ex: CNP, dată naștere), hoțul poate răspunde la întrebări de securitate bancară și face cumpărături mari fără să fie detectat.



Prevenirea furtului de identitate
Furtul de identitate înseamnă să furi datele personale ale altei persoane – cum ar fi CNP-ul – și să te dai drept ea, de obicei pentru a obține bani.
Exemple:
Deschiderea de conturi bancare pe numele victimei.


Achiziționarea de bunuri costisitoare – uneori chiar mașini sau case – cu împrumuturi pe numele ei.


În fiecare an, infractorii trimit declarații fiscale false în numele altora, pentru a încasa banii din rambursări (peste 6 miliarde de dolari pierderi anual, conform IRS – SUA).
`,
                flashcards:[
        {
          title: "Importanța protejării datelor",
          cards: [
            {
              front: "De ce este importantă securitatea informației pentru firme?",
              back: "Pentru a proteja date valoroase și a preveni fraude sau pierderi."
            }
          ]
        },
        {
          title: "Furtul de identitate",
          cards: [
            {
              front: "Ce este furtul de identitate?",
              back: "Utilizarea datelor personale ale altcuiva pentru obținerea de avantaje."
            }
          ]
        },
        {
          title: "Ținte pentru infractori digitali",
          cards: [
            {
              front: "Care sunt cele mai vizate informații de către hackeri?",
              back: "Numere de card, date personale, liste de clienți."
            }
          ]
        }
      ],
                qa:[
        {
          question: "Care este rolul securității în prevenirea furtului de date?",
          answer: "Asigură măsuri de protecție care limitează accesul neautorizat și detectează atacurile."
        },
        {
          question: "Cum pot fi folosite datele furate de infractori?",
          answer: "Pentru a răspunde la întrebări bancare și a face cumpărături mari."
        },
        {
          question: "Cum se poate preveni furtul de identitate?",
          answer: "Prin protejarea datelor personale și autentificare sigură."
        }
      ]

            }
        ]
      },
      {
        title: "Cine sunt atacatorii?",
        subsections:[
            {
            name:"Infractorii cibernetici",
            content:`În trecut, termenul  „hacker”  desemna o persoană cu abilități avansate care ataca calculatoare. Astăzi , securitatea modernă clasifică atacatorii în funcție de motivația, nivelul de abilități și țintele lor. Iată cele mai comune categorii:

 1. Cybercriminalii – criminalii digitali
Motivație: bani, nu recunoaștere.


Ținte: persoane (carduri, parole), afaceri (date clienți), guverne (proprietate intelectuală).


Metode:


Fură date personale și le vând pe dark web.


Colaborează în rețele subterane (forumuri de pe deep/dark web) pentru a-și coordona atacurile.


Uneori sunt parte din bande organizate, în special în Europa de Est sau Asia.


Tehnici frecvente:


Phishing, ransomware, skimming, atacuri asupra conturilor bancare.


 Termen util: cybercrime = infracțiune informatică, de obicei cu scop financiar.

Tip web
Descriere
Exemplu
Surface web
Pagini indexate de motoare de căutare
Site de manuale școlare
Deep web
Conținut accesibil doar prin formulare de căutare
Baza de date medicală
Dark web
Informații ascunse, inaccesibile cu browsere obișnuite
Piață neagră online


2. Script Kiddies – amatorii periculoși
Motivație: distracție, senzațional, validare socială.


Ținte: oricine – de la site-uri personale până la servere de jocuri.


Caracteristici:


Lipsiți de cunoștințe avansate, folosesc „kituri de atac” preconfigurate.


Descărcă scripturi automate de pe internet și le folosesc fără a înțelege cum funcționează.


Exemplu: atacuri DDoS asupra serverelor de jocuri sau ștergere accidentală de date.


Potrivit studiilor, 72% dintre atacuri provin din kituri de exploit, adesea folosite de script kiddies.

3. Brokers – intermediarii vulnerabilităților
Motivație: profit prin vânzare.


Ținte: oricine plătește – companii, guverne, grupuri obscure.


Rol:


Caută și descoperă breșe de securitate (ex: buguri în software).


Pot alege între a le raporta responsabil (bug bounty) sau a le vinde în secret.


Exemplu: cineva descoperă o vulnerabilitate în Windows și o vinde unui grup din dark web pentru sume mari.


 Problema: aceste vulnerabilități rămân necunoscute pentru dezvoltatori și nu pot fi reparate, ceea ce le face extrem de periculoase.

4. Insiders – pericolul din interior
Motivație: răzbunare, câștig personal, presiune.


Ținte: propria organizație – companii, instituții, spitale.


Cine sunt?:


Angajați, colaboratori sau parteneri care au acces la sistem.


Poate fi cineva concediat recent sau care simte că „deține” informația pe care a creat-o.


Exemple:


Un angajat fură fișiere confidențiale și le vinde mass-mediei.


Un dezvoltator pleacă de la firmă și ia codul sursă cu el.


Un angajat vinde baze de date clienți către competiție.


📊 În peste 48% din cazurile de scurgeri de date, vinovatul este o persoană din interior.

5. Cyberteroriști – războinicii ideologici
Motivație: ideologie, principii radicale, distrugere socială.


Ținte: infrastructuri critice – rețele electrice, apă, spitale, transport.


Caracteristici:


Pot rămâne inactivi ani de zile și apoi să lovească neașteptat.


Atacurile sunt greu de prevăzut și extrem de periculoase.


Exemplu: infectarea calculatoarelor care controlează sistemul de electricitate al unei țări.


 Spre deosebire de alți atacatori, nu sunt motivați de bani, ci de haos și frică.

6. Hacktiviști – protestatarii digitali
Motivație: activism politic, ideologie.


Ținte: guverne, corporații care susțin politici controversate.


Metode:


Modifică site-uri pentru a transmite mesaje politice.


Lansează atacuri ca represalii pentru nedreptăți percepute.


Exemplu: blocarea site-ului unei bănci pentru că a refuzat plăți către o organizație.


Hacktivism = hack + activism – un amestec de protest și infracțiune cibernetică.

7. Atacatori sponsorizati de stat
Motivație: spionaj, destabilizare, interese strategice.


Ținte: cetățeni, guverne, companii străine.


Caracteristici:


Extrem de bine finanțați, experți, greu de detectat.


Lucrează pentru guverne și pot ataca orice infrastructură critică.


Exemple:


Furtul de e-mailuri ale oficialilor.


Sabotaj economic prin furt de secrete industriale.


📢 Se consideră cei mai periculoși atacatori: nu abandonează până nu reușesc, aleg ținte precise și au suport guvernamental.

Tabel sinteză – Caracteristici ale atacatorilor
Tip atacator
Obiectiv
Ținte
Exemplu de atac
Cybercriminali
Profit financiar
Utilizatori, companii, guverne
Furtul datelor de card
Script kiddies
Distracție, notorietate
Utilizatori, companii
Ștergerea datelor
Brokers
Vânzarea vulnerabilităților
Oricine
Dezvăluirea unei breșe din sistem
Insideri
Răzbunare, presiune
Guverne, companii
Furt și publicare de informații sensibile
Teroriști cibernetici
Provocarea de panică
Companii, infrastructuri
Paralizarea rețelelor de apă sau electricitate
Hacktiviști
Proteste politice
Guverne, companii
Blocarea unui site financiar
Atacatori de stat
Spionaj, destabilizare
Utilizatori, guverne
Citirea mesajelor de email ale cetățenilor


`,
            flashcards: [
        {
          title: "Tipuri de hackeri",
          cards: [
            {
              front: "Ce tipuri de atacatori sunt incluși în categoria 'infractorilor cibernetici'?",
              back: "Cybercriminali, Script Kiddies, Brokers, Insiders, Cyberteroriști, Hacktiviști, Atacatori sponsorizati de stat."
            }
          ]
        },
        {
          title: "Ce este un cybercriminal?",
          cards: [
            {
              front: "Ce urmăresc cybercriminalii?",
              back: "Obținerea de bani prin furt de date și vânzarea acestora pe dark web."
            }
          ]
        },
        {
          title: "Script Kiddies",
          cards: [
            {
              front: "Cine sunt 'script kiddies'?",
              back: "Amatori care folosesc unelte automate de atac, fără să le înțeleagă funcționarea."
            }
          ]
        },
        {
          title: "Hacktiviști",
          cards: [
            {
              front: "Ce motivează un hacktivist?",
              back: "Activism politic sau ideologic, exprimat prin atacuri asupra site-urilor."
            }
          ]
        },
        {
          title: "Atacatori sponsorizati de stat",
          cards: [
            {
              front: "Ce îi face pe atacatorii sponsorizati de stat periculoși?",
              back: "Sunt bine finanțați, foarte capabili, cu sprijin guvernamental și ținte precise."
            }
          ]
        }
      ],
            qa:[
        {
          question: "Ce metodă folosesc des cybercriminalii pentru a fura informații?",
          answer: "Phishing, ransomware, skimming și atacuri asupra conturilor bancare."
        },
        {
          question: "De ce sunt 'script kiddies' considerați periculoși?",
          answer: "Pentru că pot cauza daune serioase fără a înțelege instrumentele folosite."
        },
        {
          question: "Ce rol joacă 'brokers' în peisajul infracțional cibernetic?",
          answer: "Identifică vulnerabilități și le vând pe piața neagră pentru profit."
        },
        {
          question: "Cum contribuie 'insiders' la breșele de securitate?",
          answer: "Fură sau divulgă informații sensibile din interiorul organizației."
        },
        {
          question: "Care este scopul atacatorilor sponsorizati de stat?",
          answer: "Spionaj, destabilizare și sabotaj economic în interesul unei țări."
        }
      ]
            }

        ]
      },
      {
        title: "Construirea unei strategii de securitate cuprinzătoare",
        subsections:[
             {
             name:"Pași de urmat",
             content:`Ce presupune o strategie practică și completă de securitate? Există patru elemente esențiale:
Blocarea atacurilor


Actualizarea apărării


Minimizărea pierderilor


Menținerea vigilenței


Aceste elemente nu sunt noi – tacticile au fost folosite încă din Evul Mediu, în special în fortificațiile europene. Înțelegerea acestor principii clasice ajută la aplicarea lor în securitatea informatică modernă.

Blocarea atacurilor (Block Attacks)
Cuvântul „castel” provine din latinul „fortress” – o fortăreață. În trecut, un castel avea două metode principale de apărare:
Șanțuri pline cu apă pentru a ține inamicul la distanță.


Ziduri de piatră între șanț și pereții exteriori ai castelului, formând un „perimetru de securitate”.


Scopul: oricine voia să atace trebuia să treacă prin acest perimetru solid.
În paralel, în securitatea informatică:
Perimetrul de securitate este reprezentat de rețeaua la care e conectat calculatorul.


Dispozitivele din rețea (ex: firewall, antivirus, sisteme de filtrare email/web) pot bloca traficul rău intenționat.


 Pe lângă perimetrul extern, fiecare calculator trebuie să aibă protecție locală – exact cum un soldat avea propriul scut pentru a respinge săgețile care trec de ziduri. În informatică, această protecție locală înseamnă firewall personal, antivirus, reguli de securitate individuale.
Actualizarea apărării (Update Defenses)
Imaginează-ți că soldații dintr-un castel au scuturi de piele împotriva săgeților. Dar ce se întâmplă dacă săgețile inamicului sunt aprinse? Dacă nu știu să reacționeze, castelul poate fi incendiat.
 Concluzie: apărarea trebuie actualizată constant pentru a face față „noilor tipuri de săgeți”.
În securitatea IT:
Atacatorii moderni sunt la fel de ingenioși, dacă nu mai mult, decât cei de acum 1000 de ani.


În fiecare zi apar noi amenințări.


Este vital ca sistemele să fie actualizate continuu – atât software-ul, cât și hardware-ul, cât și sistemele de operare.


Minimiză pierderile (Minimize Losses)
Dacă o săgeată aprinsă trece de zid și lovește o balot de fân, castelul arde – dacă apărătorii nu au o găleată cu apă pregătită, e prea târziu.
 În informatică: este esențial să accepți că unele atacuri vor trece de apărare. De aceea:
Se fac copii de siguranță (backup).


Se aplică politici de recuperare în caz de atac reușit.


Se planifică din timp răspunsul la incidente pentru a limita pagubele.


Menține vigilența (Stay Alert)
Un castel nu ar fi sigur dacă apărătorii dorm sau se ascund sub paturi de frică. Toți cei care apărau castelul trebuiau să fie vigilenți, atenți și gata de luptă.
La fel în securitatea modernă:
Securitatea nu este sarcina „altcuiva”, ci responsabilitatea fiecărui utilizator.


Este nevoie de:


Cunoștințe despre ce trebuie făcut.


Motivație de a rămâne în alertă.


Vigilență constantă, deoarece apar atacuri noi în fiecare zi – exploatează vulnerabilități încă necunoscute.
`,
             flashcards: [
        {
          title: "Blocarea atacurilor",
          cards: [
            {
              front: "Ce înseamnă blocarea atacurilor în securitatea informatică?",
              back: "Folosirea unui perimetru de securitate cu firewall-uri, antivirusuri și protecție locală pentru fiecare dispozitiv."
            }
          ]
        },
        {
          title: "Actualizarea apărării",
          cards: [
            {
              front: "De ce trebuie actualizată constant apărarea în securitate IT?",
              back: "Pentru a face față noilor tipuri de atacuri care apar zilnic."
            }
          ]
        },
        {
          title: "Minimizarea pierderilor",
          cards: [
            {
              front: "Cum se pot minimiza pierderile în caz de atac?",
              back: "Prin backupuri, politici de recuperare și planuri de reacție rapidă."
            }
          ]
        },
        {
          title: "Menținerea vigilenței",
          cards: [
            {
              front: "Ce presupune vigilența în securitatea modernă?",
              back: "Conștientizare, educație, motivație și reacție rapidă la noi amenințări."
            }
          ]
        },
        {
          title: "Paralela castel-securitate",
          cards: [
            {
              front: "Cum este comparat un castel medieval cu un sistem de securitate IT?",
              back: "Perimetru de apărare = firewall; scut individual = antivirus local."
            }
          ]
        }
      ],
             qa:[
        {
          question: "Care este scopul blocării atacurilor?",
          answer: "Împiedicarea accesului neautorizat prin perimetre de securitate și protecție individuală."
        },
        {
          question: "De ce este importantă actualizarea sistemelor?",
          answer: "Pentru a combate noi amenințări care apar zilnic și care pot exploata vulnerabilități necunoscute."
        },
        {
          question: "Ce reprezintă minimizarea pierderilor într-o strategie de securitate?",
          answer: "Reducerea impactului unui atac prin backupuri și proceduri de răspuns."
        },
        {
          question: "Ce rol joacă utilizatorii în securitatea informațiilor?",
          answer: "Toți utilizatorii trebuie să fie vigilenți și educați, nu doar departamentele IT."
        },
        {
          question: "Cum ajută analogia cu castelul în explicarea securității?",
          answer: "Ilustrează clar structura în straturi și necesitatea apărării multiple."
        }
      ]
            },
        ]
      }
    ],
    quiz:[
      
    {
  title: "Quiz 1",
  totalPoints: 100,
  questions: [
    {
      question: "Fiecare dintre următoarele este un motiv pentru care este dificil să ne apărăm de atacatorii de astăzi, cu excepția:",
      options: [
        "detectarea rapidă a vulnerabilităților",
        "complexitatea uneltelor de atac",
        "confuzia utilizatorului",
        "sofisticarea crescută a atacurilor"
      ],
      correctAns: "detectarea rapidă a vulnerabilităților",
      points: 100 / 6
    },
    {
      question: "În sens general, „securitatea” înseamnă:",
      options: [
        "disponibilă doar pe computere specializate",
        "protejare împotriva acțiunilor directe",
        "pașii necesari pentru a proteja o persoană sau o proprietate împotriva răului",
        "ceva ce se poate atinge relativ ușor"
      ],
      correctAns: "pașii necesari pentru a proteja o persoană sau o proprietate împotriva răului",
      points: 100 / 6
    },
    {
      question: "__________ asigură faptul că doar persoanele autorizate pot vedea informațiile.",
      options: [
        "Integritatea",
        "Confidențialitatea",
        "Disponibilitatea",
        "Autorizarea"
      ],
      correctAns: "Confidențialitatea",
      points: 100 / 6
    },
    {
      question: "De ce pot brokerii să ceară un preț atât de mare pentru ceea ce vând?",
      options: [
        "Sunt profesioniști licențiați",
        "Țintele atacurilor sunt mereu corporații bogate",
        "Vulnerabilitatea descoperită este necunoscută și e puțin probabil să fie corectată rapid",
        "Lucrează în echipă și toți trebuie plătiți"
      ],
      correctAns: "Vulnerabilitatea descoperită este necunoscută și e puțin probabil să fie corectată rapid",
      points: 100 / 6
    },
    {
      question: "Fiecare dintre următoarele este un strat succesiv în realizarea securității informației, cu excepția:",
      options: [
        "politici și proceduri",
        "oameni",
        "produse",
        "scopuri"
      ],
      correctAns: "scopuri",
      points: 100 / 6
    },
    {
      question: "Ce este o persoană sau element care are capacitatea de a realiza o amenințare?",
      options: [
        "exploatator",
        "agent al amenințării",
        "element periculos",
        "agent de risc"
      ],
      correctAns: "agent al amenințării",
      points: 100 / 6
    }
  ]
},
{
  title: "Quiz 2",
  totalPoints: 100,
  questions: [
    {
      question: "În terminologia securității informației, un/ o __________ este o slăbiciune care permite unui atacator să ocolească protecțiile de securitate.",
      options: [
        "acces",
        "vulnerabilitate",
        "gaură de vierme",
        "control al accesului"
      ],
      correctAns: "vulnerabilitate",
      points: 100 / 6
    },
    {
      question: "__________ asigură că indivizii sunt cine pretind că sunt.",
      options: [
        "Demonstrarea",
        "Autentificarea",
        "Contabilitatea",
        "Certificarea"
      ],
      correctAns: "Autentificarea",
      points: 100 / 6
    },
    {
      question: "Motivația __________ este atacarea în numele principiilor sau credințelor proprii.",
      options: [
        "teroriștilor cibernetici",
        "angajaților din interior",
        "script kiddies",
        "spionilor informatici"
      ],
      correctAns: "teroriștilor cibernetici",
      points: 100 / 6
    },
    {
      question: "Care este diferența dintre un hacktivist și un terorist cibernetic?",
      options: [
        "Hacktivistul este motivat de ideologie, iar teroristul cibernetic nu",
        "Teroriștii cibernetici lucrează în grupuri, hacktiviștii singuri",
        "Scopul hacktivistului nu este să creeze panică",
        "Teroriștii cibernetici sunt mai bine finanțați"
      ],
      correctAns: "Scopul hacktivistului nu este să creeze panică",
      points: 100 / 6
    },
    {
      question: "Păstrarea copiilor de rezervă cu date importante într-un loc sigur este un exemplu de __________.",
      options: [
        "minimizarea pierderilor",
        "trimiterea informațiilor în siguranță",
        "blocarea atacurilor",
        "stratificare"
      ],
      correctAns: "minimizarea pierderilor",
      points: 100 / 6
    },
    {
      question: "Fiecare dintre următoarele poate fi clasificat drept „insider” cu excepția:",
      options: [
        "partenerilor de afaceri",
        "contractorilor",
        "criminalilor cibernetici",
        "angajaților"
      ],
      correctAns: "criminalilor cibernetici",
      points: 100 / 6
    }
  ]
},
{
  title: "Quiz 3",
  totalPoints: 100,
  questions: [
    {
      question: "Care este un obiectiv al atacatorilor sponsorizati de stat?",
      options: [
        "a corecta o nedreptate percepută",
        "a spiona cetățenii",
        "a vinde vulnerabilități celui care oferă mai mult",
        "faimă înaintea profitului"
      ],
      correctAns: "a spiona cetățenii",
      points: 100 / 6
    },
    {
      question: "Fiecare dintre următoarele este o caracteristică a criminalilor cibernetici, cu excepția:",
      options: [
        "motivație scăzută",
        "finanțare mai bună",
        "aversiune redusă față de risc",
        "tenacitate mai mare"
      ],
      correctAns: "motivație scăzută",
      points: 100 / 6
    },
    {
      question: "Fiecare dintre următoarele este o caracteristică a infracțiunii informatice, cu excepția:",
      options: [
        "încercări neautorizate de accesare a informațiilor",
        "atacuri direcționate asupra rețelelor financiare",
        "utilizarea exclusivă a viermilor și virușilor",
        "furtul informațiilor personale"
      ],
      correctAns: "utilizarea exclusivă a viermilor și virușilor",
      points: 100 / 6
    },
    {
      question: "Un exemplu de __________ este un defect de software într-un sistem de operare care permite unui utilizator neautorizat să acceseze un computer fără parolă.",
      options: [
        "exploatarea unui activ",
        "agent al amenințării",
        "vulnerabilitate",
        "amenințare"
      ],
      correctAns: "vulnerabilitate",
      points: 100 / 6
    },
    {
      question: "__________ asigură că informația este corectă și că niciun utilizator neautorizat sau software malițios nu a modificat acele date.",
      options: [
        "Integritate",
        "Obscuritate",
        "Stratificare",
        "Confidențialitate"
      ],
      correctAns: "Integritate",
      points: 100 / 6
    },
    {
      question: "Protejarea informației este realizată prin __________.",
      options: [
        "protejarea dispozitivelor pe care sunt stocate informațiile",
        "securizarea doar a serverelor locale",
        "angajarea unui Ofițer de Securitate Informațională",
        "reducerea factorilor de risc"
      ],
      correctAns: "protejarea dispozitivelor pe care sunt stocate informațiile",
      points: 100 / 6
    }
  ]
}
]
  },
  {
    title:"Securitatea personală",
    description:"Acest curs oferă o introducere practică în protejarea informațiilor personale în mediul digital, abordând principalele tipuri de atacuri informatice precum spargerea parolelor, ingineria socială, furtul de identitate și riscurile din rețelele sociale. Cursul propune soluții concrete pentru prevenirea acestor amenințări, incluzând utilizarea parolelor puternice, a managerilor de parole și a unui comportament atent online.",
    banner_image:"/banner5.png",
    achievementBadge: "secure-intermediate",
    summary:`🔐 1. Parolele și autentificarea:
Când utilizatorii se conectează la un calculator sau un site web, li se cere o informație care să le confirme identitatea – de obicei o parolă.


Parolele constau în combinații secrete de litere, cifre și simboluri și sunt principalul mijloc de autentificare.


Totuși, parolele nu oferă o apărare puternică împotriva atacatorilor, deoarece se bazează pe memorie umană.


🧠 2. Slăbiciunea memoriei umane:
Oamenii pot memora un număr limitat de parole complexe.


Deseori aleg parole simple, scurte sau le reutilizează, ceea ce duce la vulnerabilitate.


Atacuri:


Dictionary attack: compară parolele furate cu digesturi de cuvinte din dicționar.


Brute-force attack: testează toate combinațiile posibile de caractere până găsește parola.


🎭 3. Ingineria socială:
Atacatorii exploatează slăbiciunile umane pentru a obține informații.


Tehnici:


Phishing: e-mailuri false care imită site-uri legitime.


Typo squatting: folosesc domenii scrise greșit (ex. gooogle.com).


Pretexting: crearea unui scenariu fals pentru a obține informații (ex: cineva pretinde că e angajat la bancă).


Hoax: mesaje false de tip alarmist (ex: „virus periculos”).


Dumpster diving: căutarea în gunoi după informații utile.


Shoulder surfing: urmărirea victimei când introduce informații personale.


🪪 4. Furtul de identitate:
Se folosește informația personală (nume, CNP, nr. card) pentru fraude financiare.


Poate afecta scorul de credit și împiedica accesul la credite sau locuri de muncă.


🌐 5. Rețelele sociale – riscuri:
Rețelele sociale facilitează conectarea, dar aduc și riscuri:


Informațiile personale pot fi folosite în scopuri malițioase.


Utilizatorii pot deveni prea încrezători în „prieteni”.


Setările de securitate pot fi neclare și greu de gestionat.

🔑 6. Securitatea parolelor:
Soluția este folosirea de password managers:


Generatoare de parole: creează parole unice și complexe.


Vaults/Seifuri online: stochează parolele criptat.


Aplicații dedicate: protejate de o parolă principală.


Dacă nu se folosesc aceste instrumente, parolele trebuie să fie lungi și unice.


📩 7. Recunoașterea phishingului:
Semnele includ:


Logouri oficiale false.


Linkuri asemănătoare cu cele legitime.


Cereri urgente de acțiune.


Cea mai bună apărare: nu deschide e-mailuri neașteptate, chiar dacă par de încredere.


💡 8. Prevenirea furtului de identitate:
Măsuri:


Tocarea documentelor financiare.


Evitarea purtării CNP-ului în portofel.


Păstrarea datelor personale într-un loc sigur.


Monitorizarea lunară a conturilor financiare este esențială.


🛡️ 9. Apărarea în rețelele sociale:
Verifică periodic setările de confidențialitate.


Gândește înainte să postezi: „Ce ar zice șeful sau mama mea?”


Arată profil limitat persoanelor necunoscute sau colaboratorilor.
`,
    chapters:[
      {
        title:"Atacuri asupra securității personale",
        subsections:[
          {
            name:"Atacuri asupra parolelor",
            content:`Inițial, atacurile informatice vizau distrugerea datelor, dar astăzi scopul principal este furtul de informații personale pentru câștig financiar. Hackerii folosesc metode precum phishingul, parolele slabe sau încrederea excesivă în rețele sociale pentru a obține date sensibile. Aceste atacuri afectează orice dispozitiv, indiferent de sistemul de operare. Capitolul explică aceste riscuri și oferă soluții de apărare pentru protejarea securității personale.
            🔐 Atacuri asupra securității personale
Există mai multe tipuri de atacuri care vizează securitatea personală a utilizatorilor. Printre cele mai frecvente se numără:
Atacuri asupra parolelor


Ingineria socială


Furtul de identitate


Atacuri în rețelele sociale


🔓 Atacuri asupra parolelor
✅ Ce sunt?
Când un utilizator se autentifică pe un dispozitiv sau un site, i se cere un nume de utilizator și o parolă pentru a-și dovedi identitatea (proces numit autentificare). Parola este o combinație secretă de litere, cifre și simboluri cunoscută doar de utilizator.
⚠️ De ce sunt vulnerabile parolele?
Deși parolele sunt cea mai utilizată metodă de autentificare, oferă adesea protecție slabă din cauza:
Dependenței de memoria umană (oamenii uită ușor parolele complexe)


Tendinței de a folosi parole ușor de reținut (ex: „princess”, „123456”)


Reutilizării aceleiași parole pe mai multe site-uri


Folosirii de informații personale (ex: nume, date de naștere)


📜 Exemple istorice
În 1961, MIT a introdus parolele în sistemele informatice. În 1962, un cercetător a reușit să acceseze parolele altor utilizatori pentru a obține mai mult timp de procesare, evidențiind lipsa măsurilor de siguranță.
⚠️ Slăbiciuni frecvente ale parolelor
Parolele eficiente trebuie să fie lungi și complexe, dar acestea sunt greu de memorat.


Utilizatorii trebuie să țină minte numeroase parole: pentru e-mail, social media, bancă, muncă etc.


Studiile arată:


28% dintre utilizatori au peste 13 parole


Utilizatorii de 16–24 ani au în medie 6,6 conturi sociale diferite


30% dintre parolele analizate aveau doar 5-6 caractere


🔁 Politici care complică situația
Multe companii cer schimbarea parolelor la 45–60 de zile


Nu se permite reutilizarea parolelor anterioare


Aceste politici forțează utilizatorii să memoreze parole noi constant


🧠 Soluții comune... dar periculoase
Pentru a face față, mulți:
Creează parole slabe (ex: „desk”, „Hannah”, „abc123”)


Refolosesc aceeași parolă peste tot


Apelează la modele previzibile: adăugarea cifrei 1, simboluri comune, sau înlocuiri ca „0” pentru „o” („pa55word”)


📉 Cele mai slabe parole
Conform unei analize pe 32 de milioane de parole, iată top 10 cele mai folosite (și ușor de spart):
Rang
Parolă
Nr. utilizatori
1
123456
290.731
2
12345
79.078
3
123456789
76.790
4
password
61.958
5
iloveyou
51.622
6
princess
35.231
7
rockyou
22.588
8
1234567
21.726
9
12345678
20.553
10
abc123
17.542



🔐 Provocări în crearea parolelor sigure
Unele site-uri limitează securitatea parolelor prin:
Restricții asupra lungimii maxime (prea scurtă pentru a fi sigură)


Interzicerea caracterelor speciale precum @, #, $


Interzicerea lipirii parolelor în câmpul de login, forțând utilizatorii să le rețină din memorie


Un expert în securitate a rezumat problema astfel:
 Majoritatea utilizatorilor nu pot și nu vor să memoreze parole complexe, așa că aleg parole slabe. Dacă li se cere o parolă sigură, o notează undeva și o schimbă înapoi la cea veche după scurt timp, folosind adesea aceeași parolă în mai multe locuri.
🧨 Tipuri de atacuri asupra parolelor
1. Ghicitul online (online guessing)
Atacatorul introduce parole la întâmplare în formularul de autentificare. Acest tip de atac este limitat de majoritatea sistemelor (de ex. blocarea contului după 5 încercări).
Chiar și cu o parolă scurtă de 8 caractere formată din litere mari, mici, cifre și simboluri, pot fi necesare peste 5 milioane de ani pentru a o ghici manual cu 2-3 încercări/secundă.
2. Crăparea offline (offline cracking)
Majoritatea atacurilor moderne folosesc această metodă. Când o parolă este creată, sistemul nu stochează parola direct, ci un rezultat criptat numit digest, obținut printr-un algoritm hash. Când utilizatorul se loghează, sistemul compară hash-ul noii parole cu cel stocat.
Atacatorii fură aceste digesturi și folosesc propriile calculatoare pentru a genera variante de parole, le transformă în hash și le compară cu cele furate. Dacă se potrivește, parola a fost descoperită.
Un grup de 5 servere poate genera până la 350 de miliarde de parole pe secundă, accelerând masiv procesul de spargere.
🧠 Tehnici de crăpare a parolelor
Atac prin forță brută
Se generează toate combinațiile posibile de caractere (litere, cifre, simboluri) și se testează împotriva digesturilor furate. Este metoda cea mai lentă, dar și cea mai completă. Poate fi optimizată astfel:
Se stabilesc limite minime și maxime de lungime


Se definesc seturi de caractere și limbi (ex: engleză, spaniolă, germană)


Se folosesc măști pentru a reduce căutarea (ex: dacă știi că parola începe cu „sk”, restul e „????”)


Se ignoră combinațiile improbabile pentru a eficientiza procesul (ex: doar cuvinte reale)


Atac prin dicționar
Se generează digesturi pentru cuvinte reale din dicționar și se compară cu cele furate. Este eficient deoarece mulți utilizatori aleg parole simple precum „alarm”, „after”, „agree”.
💥 Spargerea masivă din 2009
Un atacator a pătruns pe un server aparținând unui dezvoltator de aplicații sociale, obținând peste 32 de milioane de parole în format clar. Aceste parole au fost postate online și au devenit o resursă valoroasă pentru atacatori.
Ce au obținut hackerii:
Un set real de parole ale utilizatorilor (pentru prima dată, acces la parole din viața reală)


Informații despre comportamentul utilizatorilor – cum aleg parolele:


Mulți încep cu literă mare și termină cu cifre/punctuație, ca într-o propoziție


Multe parole conțin nume + an, ex: Braden2008


Aceste tipare sunt folosite pentru a crea măști eficiente precum ?abcd&e-2 !?!! ?1!1?2?2?2?2, care reduc semnificativ timpul de spargere
            `,
  flashcards: [
    {
      "title": "Definirea parolelor și vulnerabilitățile lor",
      "cards": [
        {
          "front": "Ce este o parolă și la ce servește?",
          "back": "O parolă este o combinație secretă de litere, cifre și simboluri cunoscută doar de utilizator, folosită pentru autentificare."
        },
        {
          "front": "De ce sunt parolele vulnerabile?",
          "back": "Din cauza dependenței de memoria umană, reutilizării parolelor, folosirii informațiilor personale și a parolelor ușor de ghicit."
        }
      ]
    },
    {
      "title": "Politici și greșeli frecvente privind parolele",
      "cards": [
        {
          "front": "Ce politici de companie îngreunează gestionarea parolelor?",
          "back": "Cer schimbarea parolelor la 45–60 de zile și interzic reutilizarea lor."
        },
        {
          "front": "Care sunt cele mai slabe parole frecvent utilizate?",
          "back": "Exemple: 123456, password, iloveyou, abc123."
        }
      ]
    },
    {
      "title": "Atacuri asupra parolelor",
      "cards": [
        {
          "front": "Ce este atacul prin ghicit online?",
          "back": "Introducerea de parole la întâmplare în formularul de login; limitat de sistemele moderne."
        },
        {
          "front": "Ce este crăparea offline?",
          "back": "Atacatorul fură digesturi hash și încearcă parole offline până găsește o potrivire."
        }
      ]
    },
    {
      "title": "Tehnici de crăpare a parolelor",
      "cards": [
        {
          "front": "Cum funcționează atacul prin forță brută?",
          "back": "Testează toate combinațiile posibile de caractere până găsește parola corectă."
        },
        {
          "front": "Cum funcționează atacul prin dicționar?",
          "back": "Compară digesturi ale cuvintelor din dicționar cu cele furate, eficient împotriva parolelor simple."
        }
      ]
    },
    {
      "title": "Caz celebru de spargere de parole",
      "cards": [
        {
          "front": "Ce s-a întâmplat în atacul masiv din 2009?",
          "back": "Au fost publicate peste 32 de milioane de parole reale, dezvăluind tipare comune folosite de utilizatori."
        },
        {
          "front": "Ce tipare de parole au fost observate în 2009?",
          "back": "Parole care încep cu literă mare, se termină cu cifre și includ nume + an (ex: Braden2008)."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "Care sunt cauzele principale ale slăbiciunii parolelor?",
      "answer": "Memoria limitată a utilizatorilor, parolele simple și reutilizarea lor pe mai multe site-uri."
    },
    {
      "question": "Ce metodă de atac presupune testarea tuturor combinațiilor posibile de caractere?",
      "answer": "Atacul prin forță brută."
    },
    {
      "question": "Cum funcționează crăparea offline a parolelor?",
      "answer": "Se fură hash-urile și se testează parole până când una generează același hash."
    },
    {
      "question": "Ce caracteristici au parolele frecvent sparte?",
      "answer": "Sunt scurte, simple, bazate pe cuvinte din dicționar sau informații personale."
    },
    {
      "question": "De ce sunt unele politici de schimbare a parolelor considerate problematice?",
      "answer": "Obligă utilizatorii să memoreze constant parole noi, ceea ce duce la alegeri mai slabe și reutilizare."
    }
  ]
},
{
    name:"Atacuri prin inginerie socială",
    content:`🎭 Ingineria socială se bazează pe manipularea psihologică a utilizatorilor pentru a obține informații confidențiale sau a-i convinge să facă acțiuni riscante. Nu se bazează direct pe tehnologie, ci pe reacțiile umane.
🧪 Exemple comune
E-mail neașteptat: Un mesaj pare să vină de la un prieten și conține un link („Trebuie să vezi asta!”) sau un fișier („Ești tu în poza asta?”). Scopul este infectarea cu malware.


Cerere urgentă de ajutor: Cineva pretinde că a fost jefuit într-o țară străină și are nevoie urgentă de bani. Victima trimite bani atacatorului.


Mesaj text fals: Un mesaj spune că cardul a fost blocat și cere apăsarea unui buton, apoi introduce date bancare sensibile.


Videoclip despre dezastru: Un site convingător te roagă să descarci un clip despre un dezastru natural. Fișierul poate conține malware.


Situație
Ce ți se cere să faci
Ce se întâmplă
E-mail neașteptat
Să dai click sau să deschizi
Poți instala malware
Cerere de ajutor
Să trimiți bani
Banii ajung la atacator
Avertizare prin SMS
Să oferi datele cardului
Atacatorul le fură
Video despre dezastru
Să descarci un clip
Poți instala malware


🧠 Tehnici de manipulare folosite
Atacatorii folosesc principii psihologice pentru a câștiga încrederea victimei:
Principiu
Explicație
Exemplu
Autoritate
Pretind că sunt șefi sau persoane importante
„Sunt CEO-ul companiei.”
Intimidare
Amenință cu consecințe
„Resetează-mi parola sau chem șeful.”
Consens social
Se bazează pe comportamentul altora
„Colegul tău a făcut deja asta.”
Raritate
Creează senzația de urgență
„Nu mai am timp de pierdut.”
Urgență
Presiune de timp
„Consiliul se întrunește în 5 min.”
Familiaritate
Se dau drept persoane cunoscute
„Ți-am citit evaluarea, e excelentă.”
Încredere
Se bazează pe reputația falsă
„Știi cine sunt.”

Atacatorii pot apela și la flirt, lingușiri sau expresii precum „Sunt puțin confuz, mă ajuți?” pentru a obține cooperarea victimei.

🎣 Phishing
Phishing-ul este o formă de inginerie socială în care atacatorul trimite un e-mail fals sau creează un site ce pare legitim. Scopul este să determine victima să introducă date sensibile: parole, numere de card, CNP, etc.
Aceste mesaje par autentice: folosesc logo-ul oficial, culorile brandului și un limbaj similar cu cel real. Când victima accesează linkul, este redirecționată către un site fals unde introduce datele de logare, care sunt apoi capturate de atacator.
🐟 Variante ale phishing-ului
Spear phishing: Țintește utilizatori specifici, personalizând mesajul cu date reale (nume, companie, funcție).


Whaling: Țintește persoane importante („pești mari”) precum directori sau persoane bogate dintr-o organizație.


Vishing (voice phishing): În loc de e-mail, atacatorul sună victima și folosește un mesaj audio care pretinde că vine de la bancă. Vocea automată cere apoi introducerea codului cardului, CNP-ului etc., prin tastele telefonului.



💻 Alte tipuri de atacuri de inginerie socială
✍️ Typo Squatting (domenii scrise greșit)
Când utilizatorul greșește la tastarea adresei unui site (ex. scrie goggle.com în loc de google.com), poate fi redirecționat către un site fals care seamănă cu cel real. Acest site:
Colectează adrese de e-mail pentru spam


Afișează reclame pentru profit


Poate păcăli utilizatorul să instaleze malware


Exemplu: peste 62% dintre domeniile active scrise greșit după facebook.com sunt create intenționat pentru typo squatting.
 → Site-ul fals goggle.com a avut 825.000 vizitatori unici într-o lună, iar pierderile anuale estimate cauzate de acest tip de atac depășesc 285 milioane dolari.
Și adresele de email greșite sunt exploatate (ex. mail trimis la finances@goggle.com), expunând date confidențiale. Un experiment pe 6 luni a capturat 120.000 de emailuri private, inclusiv parole și informații financiare.

🎭 Pretexting
Pretexting înseamnă inventarea unui scenariu fals (pretext) pentru a obține încrederea victimei și a o convinge să ofere informații sensibile.
Exemplu: Atacatorul se dă drept angajat de la un institut de sondare, pune câteva întrebări banale, apoi sună la compania în care pretinde că lucrează victima și cere acces la datele ei (ex: CNP, card bancar, raport de credit).

🚨 Hoaxes (Alarme false)
Un hoax este un avertisment fals, de obicei trimis prin e-mail, care pretinde că există un virus periculos. Mesajul cere utilizatorului:
Să șteargă fișiere importante


Să schimbe setări critice


Să apeleze un număr de telefon care aparține atacatorului


Scopul este să compromită sistemul sau să obțină control asupra acestuia.

🗑️ Dumpster Diving
Atacatorul caută printre gunoaie pentru a obține informații utile, aparent neimportante. Exemple:
Obiect
De ce e valoros
Calendare
Află când angajații sunt plecați
Stick-uri USB, HDD
Pot conține informații sensibile
Memo-uri
Informații despre funcționarea internă
Organigrame
Identifică persoane cu autoritate
Agende telefonice
Nume și contacte pentru viitoare atacuri
Manuale interne
Detalii despre sistemele IT și vulnerabilități

Atacul poate viza și gospodării: se fură scrisori, carduri preaprobați, documente bancare, istoricul angajărilor etc.

👀 Shoulder Surfing (privirea peste umăr)
Un bărbat introduce codul PIN la ATM. O femeie grăbită se apropie, îl presează subtil verbal, iar el se grăbește. După ce finalizează operațiunea, pe ecran apare întrebarea „Doriți altă tranzacție?”. Bărbatul pleacă fără să apese nimic. Femeia, care i-a reținut PIN-ul, apasă „DA”, reintroduce PIN-ul și retrage bani.
Shoulder surfing înseamnă observarea codurilor, parolelor sau altor date introduse fizic de o persoană. Se poate face:
La ATM


În magazine (când introduci PIN-ul)


În cafenele, aeroporturi, etc. (când tastezi parola pe laptop)


Tehnici mai avansate implică:
Binocluri (în aeroporturi, centre comerciale)


Camere ascunse în rucsacuri sau cărți

`,
flashcards:[{
      "title": "Ce este ingineria socială?",
      "cards": [
        {
          "front": "Pe ce se bazează atacurile de tip inginerie socială?",
          "back": "Pe manipularea psihologică a utilizatorilor pentru a obține informații confidențiale sau a-i determina să comită acțiuni riscante."
        },
        {
          "front": "Este ingineria socială un atac tehnologic?",
          "back": "Nu. Se bazează pe reacțiile umane, nu pe vulnerabilități tehnice."
        }
      ]
    },
    {
      "title": "Exemple comune de atacuri sociale",
      "cards": [
        {
          "front": "Ce se întâmplă în cazul unui e-mail neașteptat care pare de la un prieten?",
          "back": "Conține linkuri sau fișiere infectate cu malware."
        },
        {
          "front": "Ce urmărește un mesaj de tip cerere urgentă de ajutor?",
          "back": "Să obțină bani de la victimă invocând o situație disperată."
        }
      ]
    },
    {
      "title": "Tehnici psihologice folosite de atacatori",
      "cards": [
        {
          "front": "Ce înseamnă principiul 'autoritate' în atacurile sociale?",
          "back": "Atacatorul pretinde că este o persoană importantă (ex: CEO) pentru a convinge victima."
        },
        {
          "front": "Cum funcționează principiul de 'raritate'?",
          "back": "Creează presiune prin urgență și timp limitat pentru a forța victima să acționeze rapid."
        }
      ]
    },
    {
      "title": "Phishing și variantele lui",
      "cards": [
        {
          "front": "Ce este phishingul?",
          "back": "Trimiterea unui email fals care imită un site legitim, pentru a colecta date sensibile."
        },
        {
          "front": "Ce este vishingul?",
          "back": "Phishing prin telefon, folosind un mesaj audio fals pentru a cere date confidențiale."
        }
      ]
    },
    {
      "title": "Alte forme de inginerie socială",
      "cards": [
        {
          "front": "Ce este typo squatting?",
          "back": "Folosirea unor site-uri cu adrese scrise greșit (ex: goggle.com) pentru a păcăli utilizatorii."
        },
        {
          "front": "Ce este shoulder surfing?",
          "back": "Urmărirea unei persoane când tastează coduri sau parole pentru a le memora."
        }
      ]
    }],
qa:[{
      "question": "Ce urmărește un atac de tip pretexting?",
      "answer": "Inventarea unui scenariu fals pentru a obține încrederea victimei și a accesa date sensibile."
    },
    {
      "question": "Cum funcționează un hoax?",
      "answer": "Trimite alerte false prin email, convingând utilizatorul să șteargă fișiere sau să sune un număr controlat de atacator."
    },
    {
      "question": "Cum se numește tehnica de obținere a datelor din gunoaie?",
      "answer": "Dumpster diving."
    },
    {
      "question": "Ce este spear phishingul?",
      "answer": "O formă de phishing care vizează utilizatori specifici, folosind informații reale despre aceștia."
    },
    {
      "question": "Care este scopul unui mesaj fals de avertizare prin SMS?",
      "answer": "Determinarea victimei să introducă date bancare sensibile pe un site fals."
    }],
},
{
  name:"Furtul de identitate",
  content:`🆔 Furtul de identitate presupune folosirea informațiilor personale ale unei persoane (nume, CNP, număr de card) pentru a comite fraude financiare. Atacatorii pot:
obține carduri de credit,


închiria locuințe,


deschide conturi bancare sau


face cumpărături în numele victimei.


Consecințele sunt grave: victima rămâne cu o istorie de credit afectată, poate pierde oportunități de angajare sau credite pentru casă/mașină/studii.
🔓 Acțiuni comune în cazul furtului de identitate:
Emiterea de cecuri sau carduri false și golirea contului bancar


Înregistrarea unui abonament de telefonie mobilă pe numele victimei


Declararea falimentului pentru a evita evacuarea


Achiziționarea de produse scumpe (ex: televizoare mari) cu datele cardului


Deschiderea de conturi bancare frauduloase în numele victimei


Deschiderea de conturi noi de credit, fără a plăti facturile


Contractarea de credite mari pentru mașini sau motociclete


🛠️ Metode prin care atacatorii obțin informații personale:
Tehnică
Explicație
Dumpster diving
Facturi, extrase bancare sau chitanțe aruncate pot fi colectate din coșuri
Phishing
Victimele sunt păcălite să-și introducă datele pe site-uri false
Formular de schimbare adresă
Redirecționează corespondența către o cutie poștală a atacatorului
Pretexting
Atacatorul pretinde că e dintr-o firmă serioasă și cere date personale
Furt fizic
Portofele sau genți furate conțin adesea informații valoroase


💰 Furtul de identitate prin declarații fiscale false
O metodă în creștere este folosirea CNP-ului unei persoane pentru a trimite o declarație fiscală falsă și a cere o returnare de bani mai mare decât cea reală. Deoarece IRS (autoritatea fiscală americană) trimite rambursările rapid, hoții primesc banii înainte ca victima să depună formularul real.
→ În 2013, IRS a plătit peste 5,8 miliarde USD în rambursări false.
 → Unele grupări au creat centre fictive de consultanță fiscală, prin care au furat date și au generat peste 3,4 milioane USD în rambursări frauduloase.
`,
  flashcards:[
    {
      "title": "Ce este furtul de identitate?",
      "cards": [
        {
          "front": "Ce presupune furtul de identitate?",
          "back": "Folosirea informațiilor personale ale unei persoane (nume, CNP, card) pentru comiterea de fraude financiare."
        },
        {
          "front": "Care sunt consecințele furtului de identitate pentru victimă?",
          "back": "Istoric de credit afectat, pierderea oportunităților de angajare sau de obținere a unui împrumut."
        }
      ]
    },
    {
      "title": "Metode de obținere a datelor personale",
      "cards": [
        {
          "front": "Ce este dumpster diving?",
          "back": "Căutarea în gunoaie după documente precum facturi sau extrase bancare pentru a obține informații sensibile."
        },
        {
          "front": "Cum funcționează formularul de schimbare a adresei?",
          "back": "Atacatorul redirecționează corespondența victimei către o cutie poștală proprie pentru a intercepta date."
        }
      ]
    },
    {
      "title": "Declarații fiscale false",
      "cards": [
        {
          "front": "Cum este comis furtul de identitate prin declarații fiscale?",
          "back": "Se folosește CNP-ul victimei pentru a depune o declarație fiscală falsă și a primi rambursări frauduloase."
        },
        {
          "front": "Cât a plătit IRS în rambursări false în 2013?",
          "back": "Peste 5,8 miliarde de dolari."
        }
      ]
    }
  ],
  qa:[  {
      "question": "Ce poate face un atacator cu datele tale personale?",
      "answer": "Poate obține carduri, credite, închiria locuințe sau face cumpărături în numele tău."
    },
    {
      "question": "Ce este pretextingul în contextul furtului de identitate?",
      "answer": "Atacatorul pretinde că este reprezentant al unei firme pentru a obține date personale."
    },
    {
      "question": "Ce tip de documente caută atacatorii prin dumpster diving?",
      "answer": "Facturi, chitanțe, extrase de cont, agende sau memorii interne."
    }],
},
{
  name:"Riscurile rețelelor sociale",
  content:`📱 Rețelele sociale grupează persoane și organizații în funcție de interesele comune și permit partajarea de informații, poze, videoclipuri și documente.
Popularitatea lor a explodat: în 2008, Facebook avea 100 milioane de utilizatori, iar în 2012 a depășit 1 miliard. Până în 2015, a ajuns la 1,49 miliarde de utilizatori activi lunar.
Deși orice site are riscuri, rețelele sociale implică unele riscuri suplimentare:
⚠️ Riscuri specifice rețelelor sociale
Informațiile personale pot fi folosite în scopuri rău intenționate
 Utilizatorii postează date precum ziua de naștere, adresa, planuri de vacanță etc. Acestea pot fi folosite pentru:


spargerea locuinței cât timp ești plecat


ghicirea parolelor slabe (ex: nume de animale de companie)


furt de identitate


Utilizatorii pot fi prea încrezători
 Atacatorii creează conturi false și interacționează amical. După câteva zile/săptămâni, victimele le oferă date personale sau dau click pe linkuri infectate cu malware.


Securitatea platformelor este adesea slabă sau confuză
 Deoarece scopul acestor site-uri este partajarea informației, setările de confidențialitate sunt deseori neclare sau ineficiente. Actualizările frecvente ale politicilor de securitate pot deruta utilizatorii.


Acceptarea oricărei cereri de prietenie poate avea consecințe neașteptate
 Un prieten acceptat la întâmplare poate vedea nu doar profilul tău, ci și informațiile prietenilor tăi. Astfel, poate exploata și alte conturi din rețea.`,
flashcards: [
    {
      "title": "Riscuri în utilizarea rețelelor sociale",
      "cards": [
        {
          "front": "Cum pot fi folosite în mod abuziv informațiile personale postate pe rețelele sociale?",
          "back": "Pentru spargerea locuinței, ghicirea parolelor slabe sau furtul de identitate."
        },
        {
          "front": "Ce pericol presupune acceptarea oricărei cereri de prietenie?",
          "back": "Un atacator poate accesa datele tale și ale prietenilor tăi, exploatând rețeaua extinsă."
        }
      ]
    },
    {
      "title": "Slăbiciuni ale platformelor sociale",
      "cards": [
        {
          "front": "De ce este securitatea rețelelor sociale considerată slabă?",
          "back": "Setările de confidențialitate sunt adesea confuze, iar politicile se schimbă frecvent fără notificare clară."
        },
        {
          "front": "Cum exploatează atacatorii încrederea utilizatorilor?",
          "back": "Creează conturi false, câștigă încrederea și obțin date sau instalează malware prin linkuri."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "Ce tip de informații partajate pe rețelele sociale pot fi folosite pentru atacuri?",
      "answer": "Ziua de naștere, adresa, planuri de vacanță, nume de animale de companie."
    },
    {
      "question": "De ce trebuie să fim selectivi cu cine acceptăm ca prieten în social media?",
      "answer": "Pentru că pot accesa informații personale și ale altor prieteni, crescând riscul de atacuri."
    }
  ]
}

        ]
      },
      {
        title:"Măsuri de apărare pentru securitatea personală",
        subsections:[
          {
            name:"Apărarea parolelor",
            content:`🛡️ Măsuri de apărare pentru securitatea personală
Pentru a te proteja de atacuri precum furtul de identitate, phishing sau riscurile din rețelele sociale, este esențial să folosești:
parole puternice,


metode de identificare a atacurilor,


gestionarea inteligentă a informațiilor personale.


🔒 Apărarea prin parole
Cea mai eficientă metodă pentru a proteja conturile este folosirea tehnologiei de gestionare a parolelor. Dacă nu folosești un manager de parole, trebuie să creezi și să memorezi parole complexe. Două reguli importante:
Orice parolă care poate fi memorată ușor este slabă.


Orice parolă reutilizată pe mai multe conturi este o vulnerabilitate.


🧰 Tipuri de manageri de parole
Password generators
 Generează parole pe loc, în funcție de parola principală și adresa site-ului. Necesită extensii browser pe fiecare dispozitiv.


Online vaults
 Parolele sunt stocate online și recuperate când e nevoie. Sunt vulnerabile dacă platforma online este compromisă.


Password management applications
 Aplicații instalate local, ce stochează parole într-un fișier securizat cu o parolă principală. Cele mai sigure și recomandate.


🔐 Funcții avansate ale aplicațiilor de gestionare a parolelor
Protecție în memorie: parolele sunt criptate chiar în timpul funcționării aplicației.


Fișiere-cheie: fișiere separate (ex. pe USB) care trebuie conectate pentru a accesa baza de date.


Blocare pe contul utilizatorului: accesibil doar celui care l-a creat.


Import/export parole: pentru backup sau migrare.


Generator de parole aleatorii: creează parole complexe în funcție de reguli alese (caractere mari/mici, simboluri etc.)


Un exemplu de parolă puternică generată automat:
 WUuAôxB$2aWøBnd&Tf7MfEtm
📊 Utilizarea în practică
Deși managerii de parole sunt esențiali, puțini utilizatori îi folosesc.
 Un studiu a arătat că:
73% dintre experții în securitate folosesc manageri de parole,


Doar 24% dintre utilizatorii obișnuiți fac acest lucru,


De 4 ori mai mulți experți afirmă că este una dintre cele mai importante metode pentru a rămâne în siguranță online.


🔐 Crearea parolelor puternice
Dacă nu folosești un manager de parole, este esențial să creezi parole puternice și unice pentru fiecare cont. Câteva reguli de bază:
❌ Nu folosi cuvinte din dicționar sau cuvinte care sună ca în vorbirea curentă.


❌ Evită secvențele simple (ex: abc, 123, qwerty) sau caractere repetate (xxxx).


❌ Nu folosi date personale (zile de naștere, nume de familie, nume de animale).


✅ O parolă puternică trebuie să aibă minimum 18 caractere.


🧮 De ce contează lungimea parolei?
Cu cât o parolă este mai lungă, cu atât mai multe combinații posibile există și cu atât mai greu este de spart.
Formula:
 Număr taste tastatură ^ Lungimea parolei = Număr total de parole posibile
Exemple pentru o tastatură standard (80 taste):
Lungime parolă
Număr parole posibile
2
6.400
3
512.000
4
4.096.000
5
3,28 miliarde
8
1.677.721.600.000.000

📝 Observație: Lungimea e mai importantă decât complexitatea. Parola thisisalongerpassword e mai sigură decât uS^#16.
🧩 Simboluri speciale
Poți întări parola folosind caractere care nu apar pe tastatură, prin coduri ALT (ex: ALT + 0163 = £). Lista completă poate fi accesată cu comanda charmap.exe în Windows.
🍏 Generatorul Apple
Apple oferă un generator de parole încorporat. Când creezi o parolă nouă, poți selecta:
Memorable (ușor de ținut minte)


Letters and Numbers


Random


FIPS-181 compliant (standard de securitate guvernamental)
 Poți ajusta lungimea și calitatea parolei folosind slide-uri intuitive.
`,
flashcards:[
    {
      "title": "Reguli esențiale pentru parole sigure",
      "cards": [
        {
          "front": "Care sunt cele două reguli esențiale pentru parole sigure?",
          "back": "1. Orice parolă ușor de memorat este slabă. 2. Parolele nu trebuie reutilizate pe mai multe conturi."
        },
        {
          "front": "De ce trebuie evitate parolele ușor de reținut?",
          "back": "Pentru că sunt, de regulă, simple, scurte și ușor de ghicit de atacatori."
        }
      ]
    },
    {
      "title": "Tipuri de manageri de parole",
      "cards": [
        {
          "front": "Ce sunt password generators?",
          "back": "Programe care creează parole unice pe loc, pe baza parolei principale și a site-ului vizitat."
        },
        {
          "front": "Ce sunt password management applications?",
          "back": "Aplicații instalate local, care stochează parole într-un fișier securizat cu o parolă principală."
        }
      ]
    },
    {
      "title": "Funcții avansate ale aplicațiilor de parole",
      "cards": [
        {
          "front": "Ce înseamnă protecție în memorie?",
          "back": "Parolele sunt criptate inclusiv în timpul utilizării aplicației, pentru siguranță maximă."
        },
        {
          "front": "Ce sunt fișierele-cheie?",
          "back": "Fișiere externe (ex: pe USB) necesare pentru a debloca baza de date cu parole."
        }
      ]
    },
    {
      "title": "Reguli pentru crearea parolelor manual",
      "cards": [
        {
          "front": "Ce trebuie evitat la crearea unei parole?",
          "back": "Cuvinte din dicționar, date personale, secvențe simple sau caractere repetate."
        },
        {
          "front": "Care este lungimea minimă recomandată pentru o parolă sigură?",
          "back": "18 caractere."
        }
      ]
    },
    {
      "title": "Importanța lungimii și complexității parolei",
      "cards": [
        {
          "front": "De ce este lungimea parolei mai importantă decât complexitatea?",
          "back": "Pentru că o parolă mai lungă are un număr mult mai mare de combinații posibile și e mai greu de spart."
        },
        {
          "front": "Ce înseamnă FIPS-181?",
          "back": "Un standard de securitate guvernamental pentru generarea parolelor conforme."
        }
      ]
    }
  ],
qa:[
    {
      "question": "Ce tip de aplicație este cel mai recomandat pentru gestionarea parolelor?",
      "answer": "Password management application – instalată local și securizată cu o parolă principală."
    },
    {
      "question": "Ce procent dintre experții în securitate folosesc manageri de parole?",
      "answer": "73%."
    },
    {
      "question": "Care este formula pentru calculul numărului de parole posibile?",
      "answer": "Număr taste tastatură ^ Lungimea parolei."
    },
    {
      "question": "Ce este un exemplu de parolă mai sigură decât una complexă, dar scurtă?",
      "answer": "Parola „thisisalongerpassword” este mai sigură decât „uS^#16”."
    },
    {
      "question": "Cum pot fi folosite caractere speciale care nu apar pe tastatură?",
      "answer": "Folosind coduri ALT, de exemplu ALT + 0163 = £."
    }
  ]
          },
          {
            name:"Recunoașterea atacurilor de tip phishing",
            content:`🎣 Phishing-ul începe, de obicei, cu un email care pare să vină de la o sursă de încredere — o bancă sau un site cunoscut unde ai cont. Deși emailurile par autentice, ele pot conține următoarele semne de avertizare:

⚠️ Elemente comune în atacurile de phishing:
Logo-uri oficiale
 Atacatorii folosesc logo-uri și elemente grafice care imită site-ul real pentru a păcăli victima. Dar simpla prezență a unui logo nu garantează autenticitatea mesajului.


Linkuri suspecte
 Emailurile de phishing conțin aproape întotdeauna linkuri. Acestea par legitime, dar sunt adesea variante foarte apropiate de adresele reale (ex:
 www.ebay_secure.com, www.e--bay.com, www.e-baynet.com).


Mesaje urgente sau amenințătoare
 Majoritatea atacurilor cer un răspuns rapid (ex: „Contul tău va fi blocat!”). Scopul este de a forța utilizatorul să acționeze fără să verifice.


🔍 Sfat important:
Chiar dacă analizezi cu atenție un email, poate fi dificil să-ți dai seama dacă este phishing. Orice mesaj neașteptat, care cere o acțiune urgentă și pare să vină de la o entitate oficială, trebuie considerat suspect.
🔗 Nu da click pe linkuri din emailuri — adresa afișată (ex: www.ebay.com) poate ascunde o destinație reală periculoasă (ex: www.evil.com).
`,
flashcards:[
    {
      "title": "Cum recunoști un email de phishing",
      "cards": [
        {
          "front": "Care sunt semnele unui email de phishing?",
          "back": "Logo-uri oficiale false, linkuri care imită adrese reale și mesaje urgente sau amenințătoare."
        },
        {
          "front": "Ce trebuie să faci când primești un email suspect cu un link?",
          "back": "Nu da click — linkul afișat poate ascunde o adresă periculoasă."
        }
      ]
    },
    {
      "title": "Tactici comune în atacurile de phishing",
      "cards": [
        {
          "front": "De ce funcționează mesajele urgente în atacurile de phishing?",
          "back": "Pentru că presează utilizatorul să acționeze rapid, fără să verifice autenticitatea mesajului."
        },
        {
          "front": "Ce trebuie considerat suspect într-un email aparent oficial?",
          "back": "Orice cerere neașteptată de a introduce date sau de a accesa rapid un link."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "Care este scopul principal al unui email de phishing?",
      "answer": "Să păcălească victima să acceseze un site fals și să introducă date personale."
    },
    {
      "question": "Cum arată adesea linkurile din emailurile de phishing?",
      "answer": "Sunt adrese care imită site-uri reale, dar conțin mici variații (ex: e--bay.com, ebay_secure.com)."
    }
  ]
          },
          {
            name:"🛡️ Evitarea furtului de identitate",
            content:`Furtul de identitate apare atunci când cineva folosește informațiile tale personale (ex: nume, CNP, număr de card) pentru a comite fraudă sau alte infracțiuni. Protejarea identității presupune două pași esențiali:
🔐 1. Protejează informațiile personale
Toacă documentele financiare care conțin date sensibile înainte de a le arunca.


Nu purta cardul de asigurări sociale (ex: CNP în SUA) în portofel și nu-l scrie pe cecuri.


Nu oferi date personale prin telefon sau email.


Păstrează documentele personale într-un loc sigur acasă.


💳 2. Monitorizează conturile financiare
Fii atent la activități neobișnuite – ex: facturi care nu mai vin sau carduri necerute primite prin poștă.


Verifică apelurile legate de cumpărături suspecte.


Analizează lunar facturile și extrasele de cont, imediat ce le primești.



🧾 Drepturi legale – FACTA (2003)
Legea americană Fair and Accurate Credit Transactions Act (FACTA) permite utilizatorilor să:
obțină gratuit câte un raport de credit la 12 luni de la fiecare din cele 3 agenții naționale,


conteste informațiile eronate, iar agenția are 30 de zile să investigheze și să le corecteze,


adauge o declarație oficială la raport, dacă problema nu este rezolvată.


🔁 Recomandare: solicită câte un raport de credit la fiecare 4 luni, alternativ de la cele 3 agenții. Astfel, poți monitoriza situația ta financiară tot anul, fără costuri.
`,

  flashcards: [
    {
      "title": "Cum îți protejezi identitatea",
      "cards": [
        {
          "front": "Ce pași poți urma pentru a-ți proteja datele personale?",
          "back": "Toacă documentele sensibile, nu purta CNP-ul în portofel, nu oferi date prin telefon/email și păstrează actele într-un loc sigur."
        },
        {
          "front": "Cum poți detecta un posibil furt de identitate?",
          "back": "Monitorizează facturile și extrasele bancare, fii atent la carduri primite fără a le cere sau facturi care nu mai vin."
        }
      ]
    },
    {
      "title": "Drepturi legale și recomandări",
      "cards": [
        {
          "front": "Ce drepturi oferă legea FACTA (2003)?",
          "back": "Acces gratuit anual la un raport de credit de la fiecare din cele 3 agenții, posibilitatea de a contesta erorile și de a adăuga o declarație oficială."
        },
        {
          "front": "Cum poți monitoriza gratuit situația financiară tot anul?",
          "back": "Solicitând câte un raport de credit la fiecare 4 luni, alternativ de la cele 3 agenții."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "Ce trebuie să faci înainte de a arunca documente financiare?",
      "answer": "Să le toci, dacă includ informații personale sensibile."
    },
    {
      "question": "Ce permite FACTA utilizatorilor să facă în cazul unei erori în raportul de credit?",
      "answer": "Să o conteste, iar agenția are obligația să o investigheze în 30 de zile."
    }
  ]
          },
          {
            name:"🔐 Setarea măsurilor de siguranță în rețelele sociale",
            content:`Rețelele sociale sunt o sursă bogată de informații pentru atacatori: date personale, răspunsuri la întrebări de securitate (ex: „Care este numele de fată al mamei tale?”) și multe altele. Din păcate, platformele au adesea setări implicite prea permisive și își modifică frecvent politicile de securitate, adesea fără avertisment.
🛡️ Sfaturi generale de apărare
Ai grijă ce postezi
 Evită postările care pot dezvălui absența de acasă (ex: „Plecat în vacanță 2 săptămâni”) sau informații stânjenitoare. Întreabă-te:
 Ce-ar spune șeful meu? Sau mama mea? înainte de a publica.


Controlează cine poate vedea informațiile tale
 Unele informații pot fi jenante sau compromițătoare dacă ajung la angajatori sau necunoscuți.
 Este recomandat să accepți doar prieteni de încredere și să oferi altora o versiune limitată a profilului (ex: „prieteni restricționați”).


Fii la curent cu setările de securitate
 Acestea se actualizează frecvent. Verifică periodic ce opțiuni ai disponibile și ajustează-le pentru mai mult control.



📘 Recomandări pentru utilizarea sigură a Facebook (Tabelul 2-7)
Recomandare
De ce este importantă
Gândește-te cum vrei să folosești Facebook
Dacă vrei doar să păstrezi legătura cu apropiații, restricționează ce și cui postezi
Citește ghidul de confidențialitate Facebook
Îți explică funcțiile și politicile actualizate
Ajustează setările de confidențialitate
Setările implicite sunt deseori prea permisive
Verifică-ți profilul din perspectiva altora
Folosește opțiunea „Previzualizare ca...”
Alege cu atenție prietenii
Prietenii pot vedea informații private sau fotografii
Afișează un profil limitat cunoscuților
Oferă o versiune restrânsă celor cu care nu vrei să împarți tot
Restricționează Timeline-ul și etichetările
Controlează ce pot posta alții despre tine sau cine te poate eticheta
Dezactivează opțiunile, apoi activează-le selectiv
Mai bine începi cu totul închis și activezi doar ce e necesar

`,

  flashcards: [
    {
      "title": "Importanța confidențialității online",
      "cards": [
        {
          "front": "De ce este riscant să postezi planuri de vacanță sau informații stânjenitoare?",
          "back": "Poate semnala absența de acasă sau afecta reputația personală/profesională."
        },
        {
          "front": "Ce întrebare ar trebui să-ți pui înainte de a posta?",
          "back": "„Ce-ar spune șeful meu? Sau mama mea?”"
        }
      ]
    },
    {
      "title": "Controlul vizibilității profilului",
      "cards": [
        {
          "front": "Cum poți limita accesul altora la informațiile tale?",
          "back": "Acceptând doar prieteni de încredere și folosind opțiunea de „prieteni restricționați”."
        },
        {
          "front": "De ce este importantă funcția „Previzualizare ca...” pe Facebook?",
          "back": "Pentru a vedea cum arată profilul tău din perspectiva altor persoane."
        }
      ]
    },
    {
      "title": "Setări și recomandări de siguranță",
      "cards": [
        {
          "front": "Ce recomandă experții în ceea ce privește opțiunile implicite?",
          "back": "Să începi cu toate setările dezactivate și să activezi doar ce e necesar."
        },
        {
          "front": "De ce trebuie verificate frecvent setările de securitate?",
          "back": "Pentru că platformele își schimbă frecvent politicile fără avertisment."
        }
      ]
    }
  ],
  qa: [
    {
      "question": "De ce este riscant să accepți necunoscuți ca prieteni în rețelele sociale?",
      "answer": "Pot accesa date personale și le pot folosi în scopuri malițioase."
    },
    {
      "question": "Care este o bună practică atunci când setezi confidențialitatea pe rețelele sociale?",
      "answer": "Să începi cu toate opțiunile dezactivate și să activezi doar ce este strict necesar."
    },
    {
      "question": "Ce funcție oferă Facebook pentru a verifica ce văd ceilalți despre tine?",
      "answer": "„Previzualizare ca...”"
    }
  ]
          },
        ]
      }
    ],
    quiz:
    [
      {
    "title": "Quiz 1",
    "totalPoints": 100,
    "questions": [
      {
        "question": "Procesul de furnizare a dovezii că utilizatorul este „autentic” sau real se numește __________.",
        "options": ["identificare", "genuinizare", "autentificare", "înregistrare"],
        "correctAns": "autentificare",
        "points": 20
      },
      {
        "question": "Care dintre următoarele NU este o caracteristică a unei parole slabe?",
        "options": ["informații personale într-o parolă", "o parolă cu mai puțin de șase caractere", "o parolă care folosește atât litere cât și cifre", "un cuvânt comun din dicționar"],
        "correctAns": "o parolă care folosește atât litere cât și cifre",
        "points": 20
      },
      {
        "question": "A înșela pe cineva pentru a obține informații sigure se numește __________.",
        "options": ["inginerie socială", "atac magic", "atac de tip forță brută", "atac subtil"],
        "correctAns": "inginerie socială",
        "points": 20
      },
      {
        "question": "Scopul unui atac de tip phishing este __________.",
        "options": ["captarea tastelor apăsate", "trimiterea unui email fraudulos către un utilizator", "a păcăli un utilizator să divulge informații personale", "duplicarea unui serviciu legitim"],
        "correctAns": "a păcăli un utilizator să divulge informații personale",
        "points": 20
      },
      {
        "question": "Care dintre următoarele poate fi realizat de un hoț de identitate, cu excepția:",
        "options": ["Emiterea de cecuri sau carduri contrafăcute și retragerea tuturor banilor din cont", "Depunerea unui faliment în numele persoanei pentru a evita plata datoriilor", "Deschiderea unui cont bancar în numele persoanei și emiterea de cecuri fără acoperire", "Trimiterea de malware în sistemul contabil online al unei bănci"],
        "correctAns": "Trimiterea de malware în sistemul contabil online al unei bănci",
        "points": 20
      }
    ]
  },
  {
    "title": "Quiz 2",
    "totalPoints": 100,
    "questions": [
      {
        "question": "Care dintre următoarele este un pas pentru prevenirea furtului de identitate, cu excepția:",
        "options": ["Păstrarea informațiilor personale într-un loc sigur", "Purtarea unui card de securitate socială în portofel în locul originalului", "Tocarea documentelor financiare care conțin informații personale", "Necomunicarea informațiilor personale la telefon sau prin email"],
        "correctAns": "Purtarea unui card de securitate socială în portofel în locul originalului",
        "points": 20
      },
      {
        "question": "Parolele se bazează pe care tip de autentificare?",
        "options": ["ceea ce ai", "ceea ce faci", "ceea ce știi", "ceea ce ești"],
        "correctAns": "ceea ce știi",
        "points": 20
      },
      {
        "question": "Un/ o __________ este un nume unic pentru identificare.",
        "options": ["parolă", "valoare", "autentificare", "nume de utilizator"],
        "correctAns": "nume de utilizator",
        "points": 20
      },
      {
        "question": "Care dintre următoarele este o caracteristică a unei parole puternice, cu excepția:",
        "options": ["Trebuie să fie lungă", "Trebuie să fie ușor de memorat", "Trebuie să fie complexă", "Nu trebuie repetată pe mai multe conturi"],
        "correctAns": "Trebuie să fie ușor de memorat",
        "points": 20
      },
      {
        "question": "Ce tehnică folosesc atacatorii în prezent pentru a descoperi o parolă?",
        "options": ["ghicire online", "spargere offline", "regenerare hash", "reproducere de digest"],
        "correctAns": "spargere offline",
        "points": 20
      }
    ]
  },
  {
    "title": "Quiz 3",
    "totalPoints": 100,
    "questions": [
      {
        "question": "Care dintre aceste atacuri asupra parolelor este cel mai temeinic?",
        "options": ["atac de tip dicționar", "atac rapid", "atac de forță brută", "atac grill"],
        "correctAns": "atac de forță brută",
        "points": 20
      },
      {
        "question": "Observarea unei persoane care introduce un cod PIN de la distanță se numește __________.",
        "options": ["urmărire din spate (piggybacking)", "imitare (spoofing)", "privit peste umăr (shoulder surfing)", "supraveghere cibernetică"],
        "correctAns": "privit peste umăr (shoulder surfing)",
        "points": 20
      },
      {
        "question": "Ce este un atac de tip vishing?",
        "options": ["un atac care folosește telefonul în loc de email sau website", "un atac care vizează doar „peștii mari”", "un atac de inginerie socială care folosește mesaje text", "un atac asupra parolelor proiectat să spargă parole lungi"],
        "correctAns": "un atac care folosește telefonul în loc de email sau website",
        "points": 20
      },
      {
        "question": "Un utilizator care introduce americanbank.net în browser în loc de americanbank.com și este dus pe un site fals asemănător este victima __________.",
        "options": ["atacului de redirecționare SRNA", "direcționării URL", "tipografierii greșite (typo squatting)", "atacului de tip jacket"],
        "correctAns": "tipografierii greșite (typo squatting)",
        "points": 20
      },
      {
        "question": "Cum poate un atacator folosi o păcăleală (hoax)?",
        "options": ["Trimițând o păcăleală, atacatorul poate convinge un utilizator să citească emailul mai des", "O păcăleală poate convinge un utilizator că circulă un virus și că trebuie să-și schimbe setările", "Un utilizator care primește mai multe păcăleli poate suna superiorul pentru ajutor", "Păcălelile nu mai sunt folosite de atacatori astăzi"],
        "correctAns": "O păcăleală poate convinge un utilizator că circulă un virus și că trebuie să-și schimbe setările",
        "points": 20
      }
    ]
  },
  {
    "title": "Quiz 4",
    "totalPoints": 100,
    "questions": [
      {
        "question": "Michelle pretinde că este un manager din alt oraș și îl sună pe Eric pentru a-l păcăli să îi dea parola. Ce tip de atac de inginerie socială a realizat Michelle?",
        "options": ["pretexting", "dedublare", "imitare de caracter", "duplicare"],
        "correctAns": "pretexting",
        "points": 20
      },
      {
        "question": "De ce sunt parolele lungi mai puternice decât cele scurte?",
        "options": ["Parolele lungi sunt confuze pentru atacatori", "Parolele lungi necesită mai multe încercări pentru a fi descoperite", "Parolele lungi folosesc mereu caractere speciale, cifre și litere", "Parolele scurte folosesc mai puțină memorie, deci sunt mai ușor de spart"],
        "correctAns": "Parolele lungi necesită mai multe încercări pentru a fi descoperite",
        "points": 20
      },
      {
        "question": "Care dintre următoarele NU este un manager de parole?",
        "options": ["aplicație de gestionare parole", "generator de parole", "seif online", "depozit de hashing"],
        "correctAns": "depozit de hashing",
        "points": 20
      },
      {
        "question": "Care dintre următoarele se găsește de obicei într-un email de tip phishing, cu excepția:",
        "options": ["logo-uri oficiale ale site-ului real", "linkuri web care sunt variații apropiate ale unei adrese legitime", "o cerere urgentă de acțiune imediată", "numărul de telefon al site-ului real"],
        "correctAns": "numărul de telefon al site-ului real",
        "points": 20
      },
      {
        "question": "Care dintre următoarele NU ar putea fi realizată într-un atac de tip shoulder surfing?",
        "options": ["Urmărirea victimei când introduce cardul într-un bancomat", "Observarea unei persoane care tastează o parolă pe tastatură", "Vederea unei persoane care își scrie numărul de securitate socială pe hârtie", "Urmărirea unei persoane care introduce PIN-ul la casă într-un magazin"],
        "correctAns": "Vederea unei persoane care își scrie numărul de securitate socială pe hârtie",
        "points": 20
      }
    ]
  }
    ]




  }];
