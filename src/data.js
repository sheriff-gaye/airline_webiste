import { SiOpenaigym } from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Service",
        path: '/gallery'
    },
    // {
    //     name: "Plans",
    //     path: '/plans'
    // },
    // {
    //     name: "Trainers",
    //     path: '/trainers'
    // },
    // {
    //     name: "Contact",
    //     path: '/contact'
    // }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Cardio Blast",
        info: "Intense cardio workouts to boost endurance and torch calories.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Strength Fusion",
        info: "A dynamic blend of strength training exercises for muscle sculpting",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Yoga Flow",
        info: "Find balance, flexibility, and inner peace through mindful yoga practice",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "HIIT Ignite",
        info: "High-intensity interval training to maximize fat burn and overall fitness",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Fun Energize",
        desc: "Infusing energy and enjoyment into workouts to make fitness a fun and fulfilling experience."
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Balance Wellness",
        desc: "Promoting a holistic approach to fitness that encompasses physical, mental, and emotional well-being."
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Integrity Trust",
        desc: "Building trust through honest and transparent practices and maintaining the highest level of integrity."
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Passion Drive",
        desc: "Fueling dedication and enthusiasm for fitness and personal growth."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "It is recommended to engage in moderate-intensity aerobic activity for at least 150 minutes per week, or vigorous-intensity activity for 75 minutes per week, along with muscle-strengthening exercises twice a week."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time of day to work out depends on individual preferences and schedules. Choose a time that aligns with your energy levels and allows for consistency."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "The duration of your workouts depends on your fitness goals and individual preferences, but a general guideline is around 30 minutes to an hour."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, warming up before workouts is essential. It prepares your body by increasing blood flow, flexibility, and range of motion, reducing the risk of injuries."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "It depends on your fitness goals. If you want to build muscle and strength, focus on strength training. For overall health, doing both cardio and strength training is beneficial."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes, lifting weights for strength training is highly beneficial as it helps build muscle, increase bone density, improve overall strength, and enhance athletic performance."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Sarah",
        quote: "Since joining the gym and consistently working out, I've seen incredible changes in my physique and energy levels",
        job: "Marketing Executive",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Michael",
        quote: "As a professional athlete, the gym has been instrumental in improving my performance and maintaining peak physical condition.", 
        job: "Soccer Player",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Lisa",
        quote: "The gym has not only helped me lose weight but also boosted my confidence and provided a great social atmosphere",
         job: "University Lecturer",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 4,
        name: "Jake",
        quote: "I've gained strength and transformed my body thanks to the gym's well-designed workout programs and supportive trainers",
         job: "Personal Trainer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 5,
        name: "Emily",
        quote: "Regular gym sessions have greatly improved my mental health, reducing stress and anxiety while boosting my overall well-being.", job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            { feature: 'Group Classes', available: true },
            { feature: 'Personalized Training', available: true },
            { feature: 'Cardio Equipment', available: true },
            { feature: 'Weight Machines', available: true },
            { feature: 'Sauna Access', available: true },
            { feature: 'Nutrition Guidance', available: false },
            { feature: 'Towel Service', available: false },
            { feature: 'Locker Rental', available: false },
            { feature: 'Monthly Progress Tracking', available: false },
            { feature: 'Eighth Feature', available: false },
            { feature: 'Hydration Station', available: false },
            { feature: 'Flexible Membership Options', available: false },
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            { feature: 'VIP Training', available: true },
            { feature: 'Unlimited Classes', available: true },
            { feature: 'Private Sessions', available: true },
            { feature: 'Advanced Equipment', available: true },
            { feature: 'Sports Massage', available: true },
            { feature: 'Body Composition Analysis', available: true },
            { feature: 'Pool Access', available: true },
            { feature: 'Exclusive Workshops', available: true },
            { feature: 'Complimentary Supplements', available: true },
            { feature: 'High-Intensity Interval Training', available: false },
            { feature: 'Individualized Meal Plans', available: false },
            { feature: 'Exclusive Events', available: false },
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            { feature: '24/7 Gym Access', available: true },
            { feature: 'Personal Concierge', available: true },
            { feature: 'Elite Trainer Selection', available: true },
            { feature: 'State-of-the-Art Facilities', available: true },
            { feature: 'Private Locker Room', available: true },
            { feature: 'Cryotherapy Sessions', available: true },
            { feature: 'Premium Sports Equipment', available: true },
            { feature: 'Advanced Recovery Tools', available: true },
            { feature: 'Unlimited Spa Access', available: true },
            { feature: 'Exclusive Retreats', available: true },
            { feature: 'Performance Testing', available: true },
            { feature: 'Customized Fitness App', available: true },
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]