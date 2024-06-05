// coaching package Data
const entryPackage = {
    price: '$240',
    features: [
        '4x 1 hr Sessions',
        '1x 10% Future Session Discount',
        'Discord Messaging',
        'Patch + Meta Explanation'
    ],
    buttonLabel: 'Avail Entry',
    tag: 'Best for Starting Out'
};

const basicPackage = {
    price: '$360',
    features: [
        '6x 1 hr Sessions',
        '2x 15% Future Session Discount',
        'Discord Messaging',
        'Patch + Meta Explanation',
        '1x VOD Review'
    ],
    buttonLabel: 'Avail Basic',
    tag: 'Most Popular'
};

const proPackage = {
    price: '$600',
    features: [
        '10x 1 hr Sessions',
        '2x 20% Future Session Discount',
        'Discord Messaging',
        'Patch + Meta Explanation',
        '1x VOD Review',
        '1x Match-up Guide',
        '1x Analysis Tutorial'
    ],
    buttonLabel: 'Avail Pro',
    tag: 'Speciality Coaching Package'
};

const immortalPackage = {
    price: '$2500',
    features: [
        ['Unlimited 1 hr Sessions', 'Discord Messaging', 'Patch + Meta Explanation', 'Pro Training Plan (Any Role)'],
        ['3x VOD Reviews', '1x Match-up Guide', '1x Analysis Tutorial',],
        ['5x Pro Player Analysis Sessions', 'Personal Progress Checkup', 'Immortal Guarantee']
    ],
    buttonLabel: 'Avail Immortal',
    tag: 'Speciality Coaching Package'
};

// training plan Data
const entryPlan = {
    price: '$200',
    features: [
        'Comprehensive Player Analysis',
        'Personalized Practice Plan',
        'Discord Messaging'
    ],
    buttonLabel: 'Avail Entry',
    tag: 'Best for Starting Out'
};

const basicPlan = {
    price: '$300',
    features: [
        'Comprehensive Player Analysis',
        'Personalized Practice Plan',
        'Discord Messaging',
        'Extended Practice Plan'
    ],
    buttonLabel: 'Avail Basic',
    tag: 'Most Popular'
};

const proPlan = {
    price: '$500',
    features: [
        'Comprehensive Player Analysis',
        'Personalized Practice Plan',
        'Discord Messaging',
        'Extended Practice Plan',
        'The Immortal Guarantee'
    ],
    buttonLabel: 'Avail Pro',
    tag: 'Speciality Training Plan'
};

//faq Data
const accordionData = [
    {
        id: 'collapseOne',
        title: 'How do I sign up for coaching sessions?',
        content: 'Provide details on how users can sign up for coaching sessions.'
    },
    {
        id: 'collapseTwo',
        title: 'What is the difference between Training Plans and Coaching Packages?',
        content: 'Explain the key differences between training plans and coaching packages, highlighting unique features and benefits of each.'
    },
    {
        id: 'collapseThree',
        title: 'Which payment methods are accepted?',
        content: 'List the payment methods accepted for purchasing coaching sessions, such as credit cards, PayPal, etc.'
    },
    {
        id: 'collapseFour',
        title: 'Can I switch to a different coaching package after signing up?',
        content: 'Detail the policy or process for changing coaching packages after initial purchase or sign-up.'
    },
    {
        id: 'collapseFive',
        title: 'What happens if I need to reschedule a session?',
        content: 'Describe the procedure for rescheduling a coaching session, including any deadlines or penalties.'
    },
    {
        id: 'collapseSix',
        title: 'How soon can I expect to see improvements in my gameplay?',
        content: 'Provide an overview of the expected timeline for noticeable improvements based on your coaching methodology.'
    },
    {
        id: 'collapseSeven',
        title: 'Will I receive personalized feedback on my performance?',
        content: 'Explain how and when personalized feedback is provided during or after coaching sessions.'
    },
    {
        id: 'collapseEight',
        title: 'Is there a limit to the number of coaching sessions I can book?',
        content: 'Clarify if there is a maximum number of sessions a client can book within a certain time frame.'
    }
];

//testimonial data
const testimonials = [
    {
        img: "images/badges/ranks/immortal.svg",
        title: "Mouceen",
        subtitle: "5000 to 5640",
        description: "I first heard about pain on reddit, and thought to myself that i could try a dota coach, as he wasnt expensive at all compared to other options. I was around 5.1-5.0k before my first coaching session, and ever since Pain has been able to point out mistakes that i wouldnt catch myself rewatching the games. I can feel that I am better as a player knowing concepts i did not think about before, currently 5.3k while still climbing with around 60-70% win rate on carry.Best thing about pain is that he actively answers any of my little questions on discord about dota, which I doubt any of the 'bigger' coaches would do. UPDATE: 5640"
    },
    {
        img: "images/badges/ranks/immortal.svg",
        title: "romel",
        subtitle: "4200 to 6100 mmr",
        description:
            "Pain is an articulate, knowledgeable player that knows how to give just the right amount of feedback so that it is not overwhelming but also provides the biggest impact on your winrate. In our session, he taught me the importance of patience and playing around item timings and to respect the enemy so as not to throw. One of the mistakes I was making was rushing into tier 2 tower pushes with fortification, causing me to throw leads I gained in the early to mid game. This alone has had a positive effect on my winrate. Over the last ~2 weeks I've gone from 4200 to 4700 mmr (Ancient to Divine) and I'm still continuing to climb with an excellent winrate. UPDATE: 6100"
    },
    {
        img: "images/badges/ranks/divine.svg",
        title: "MODE: Replay",
        subtitle: "4400 to 5000 mmr",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img: "images/badges/ranks/immortal.svg",
        title: "MeryaMax",
        subtitle: "6200 to 7000 mmr",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]