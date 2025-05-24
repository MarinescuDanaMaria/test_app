export const PracticeOption=
[
    {
        name:'Quiz',
        image:require('./../assets/images/quizz.png'),
        icon:require('./../assets/images/quiz1.png'),
        path:'/quiz'

    },
    {
        name:'Flashcards',
        image:require('./../assets/images/flashcard.png'),
        icon:require('./../assets/images/layers.png'),
        path:'/flashcards'
        //icon:require('./../assets/images/flashcard1.png')

    },
    {
        name:'Întrebări & Răspunsuri',
        image: require('./../assets/images/notes.png'),
        icon:require('./../assets/images/qa1.png'),
        path:'/questionAnswer'

    },
    // {
    //     name:'Simulator Atacuri',
    //     image: require('./../assets/images/img_hacker.jpg'),
    //     icon:require('./../assets/images/banner4.png'),
    //     path:'/(tabs)/simulator'
    // }
]

export const imageAssets=
{
 '/banner2.png':require('./../assets/images/banner2.png'),
 '/banner3.png':require('./../assets/images/banner3.png'),
 '/banner4.png':require('./../assets/images/banner4.png'),
 '/banner5.png':require('./../assets/images/banner5.png')
}

export const ProfileMenu = [
    {
        name: 'Cursurile mele',
        icon: 'book', //Ionic Icons 
        path: '/(tabs)/home'
    },
    {
        name: 'Harta cursurilor',
        icon: 'analytics-outline', //Ionic Icons 
        path: '/(tabs)/progress'
    },
    {
        name: 'Simulator atacuri',
        icon: 'shield-outline',
        path: '/(tabs)/simulator'
    },
    {
        name: 'Logout',
        icon: 'log-out', //Ionic Icons 
        path: '/login'
    }
]