import { SiOpenaigym } from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Explore",
        path: '#explore'
    },
    {
        name: "About",
        path: '#about'
    },
    {
        name: "Faqs",
        path: '#faqs'
    },
   
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Dubai",
        info: "Intense cardio workouts to boost endurance and torch calories.",
        path: "/programs/111",
        image: require("./images/dubai.jpg")
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "China",
        info: "A dynamic blend of strength training exercises for muscle sculpting",
        path: "/programs/222",
        image: require("./images/china.jpg")
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Ghana",
        info: "Find balance, flexibility, and inner peace through mindful yoga practice",
        path: "/programs/333",
        image: require("./images/ghana.jpg")
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Japan",
        info: "High-intensity interval training to maximize fat burn and overall fitness",
        path: "/programs/444",
        image: require("./images/japan.jpg")
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "World Class Service",
        desc: "World Class Service: Experience luxury and personalized attention with our world-class service onboard and on the ground."
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Best Price",
        desc: "Customer Satisfaction: Your happiness is our priority. We ensure exceptional customer satisfaction with every flight."
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Five Star Hotels",
        desc: "Cheap Price: Fly affordably without compromising on quality. Enjoy great deals and discounted fares with us."
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Customer Satisfaction",
        desc: "Five-Star Hotels: Indulge in opulence with our partnerships with top-notch five-star hotels at your destination."
    }
]









export const faqs = [
    {
        id: 1,
        question: " What is the baggage allowance for my flight ?",
        answer: "Baggage allowance varies by fare type. Check our website for specific details."
    },
    {
        id: 2,
        question: "Can I change my flight date after booking ?",
        answer: "Yes, flight date changes are permitted. Fees may apply. Contact our customer service for assistance."
    },
    {
        id: 3,
        question: "Are meals provided during the flight ? ",
        answer: "Complimentary meals are served on international flights. Snacks available on shorter routes."
    },
    {
        id: 4,
        question: "How early should I arrive at the airport for check-in ?",
        answer: "We recommend arriving 2 hours before departure for domestic flights and 3 hours for international."
    },
    {
        id: 5,
        question: "Can I request a special meal due to dietary restrictions?",
        answer: "Yes, we accommodate special meal requests. Inform us during booking or contact customer service."
    },
    {
        id: 6,
        question: "What are the available payment options for booking ?",
        answer: "We accept major credit/debit cards and online payment methods. Secure your booking hassle-free."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Sarah",
        quote:"Sunny Travels made my dream vacation a reality! Their excellent service, smooth booking process, and affordable fares exceeded my expectations." ,
        job: "Marketing Executive",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Michael",
        quote: "I've flown with Sunny Travels multiple times, and they never disappoint. Their customer service is top-notch, and the flights are always on time.",
        job: "Soccer Player",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Lisa",
        quote: "Booking with Sunny Travels was a breeze! The website is user-friendly, and their five-star hotel partnerships made my trip extra special.",
        job: "University Lecturer",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 4,
        name: "Jake",
        quote: "I highly recommend Sunny Travels for their exceptional customer satisfaction. They truly go above and beyond to ensure a pleasant flying experience." ,
        job: "Personal Trainer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 5,
        name: "Emily",
        quote: "Sunny Travels offered the best prices for my travel plans. I got great value for my money without compromising on comfort.", job: "Pharmacist",
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