//video URL
const vidURL = "https://www.youtube.com/embed/I7SdMEzi718?si=3q6LZVst78_I_765";

// stat Data
const statsValues = {
    mmr: '9K',
    students: '300+',
    coachingHrs: '2000',
    views: '2.5M'
};


// coaching package Data
const entryPackage = {
    price: '$280',
    features: [
        '4x 1 Hour Sessions',
        'Discord Messaging',
        'Patch + Meta Explanation'
    ],
    buttonLabel: 'Avail Entry',
    tag: 'Value Pack'
};

const basicPackage = {
    price: '$420',
    features: [
        '6x 1 Hour Sessions',
        'Discord Messaging',
        'Patch + Meta Explanation',
        '1x VOD Review'
    ],
    buttonLabel: 'Avail Basic',
    tag: 'Best For Starting Out'
};

const proPackage = {
    price: '$700',
    features: [
        '10x 1 Hour Sessions',
        'Discord Messaging',
        'Patch + Meta Explanation',
        '1x VOD Review',
        '1x Match-up Guide',
        '1x Analysis Tutorial'
    ],
    buttonLabel: 'Avail Pro',
    tag: 'Most Popular'
};

const immortalPackage = {
    price: '$2500',
    features: [
        ['Unlimited 1 Hour Sessions', 'Discord Messaging', 'Patch + Meta Explanation', 'Pro Training Plan (Any Role)'],
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
    tag: 'Value Pack'
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
    tag: 'Most Popular'
};

//faq Data
const accordionData = [
    {
        id: 'collapseOne',
        title: 'How do I sign up for coaching sessions?',
        content: 'Click on the Avail Button on your desired package and you will be redirected to discord from where you can directly message Pain to reserve your slot'
    },
    {
        id: 'collapseTwo',
        title: 'What is the difference between Training Plans and Coaching Packages?',
        content: 'Training Plan does not include 1 on 1 coaching. It is a document that is formed after analysis of your most recent 10 games. In this document, you will have your mistakes highlighted that are keeping you stagnant and you will be given practices to overcome these mistakes, which will help you climb MMR. On the other hand, Coaching Packages include 1 on 1 coaching on call, everything is done visually.'
    },
    {
        id: 'collapseThree',
        title: 'Which payment methods are accepted?',
        content: 'Currently, Wise & Crypto (USDT) are accepted. Wise is very easy to setup and If you have trouble with it, Pain can guide you as well. If none of these work, you can discuss this with Pain on Discord'
    },
    {
        id: 'collapseFour',
        title: 'Can I switch to a different coaching package after signing up?',
        content: 'It depends on what package you currently have, how many sessions have been used and whether there are slots available for the package you want to upgrade to.'
    },
    {   
        id: 'collapseFive',
        title: 'What happens if I need to reschedule a session?',
        content: 'Pain does not have an issue with rescheduling. However, it will not be entertained more than once and you will lose a session. This is to ensure that the time of both parties is not wasted.'
    },
    {
        id: 'collapseSix',
        title: 'How soon can I expect to see improvements in my gameplay?',
        content: "You should see improvement almost instantely. Most of Pain's students have seen improvement right after the first session."
    },
    {
        id: 'collapseSeven',
        title: 'Will I receive personalized feedback on my performance?',
        content: "Yes. Every player is different and unique. Pain's Coaching Style caters towards everyone"
    },
    {
        id: 'collapseEight',
        title: 'Is there a limit to the number of coaching sessions I can book?',
        content: 'No.'
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
        img: "images/badges/ranks/legend.svg",
        title: "iisereb",
        subtitle: "1800 to 3540",
        description: 
        "Pain is great. I was able to get from crusader 3 to legend 3 in a matter of months. It took me around 3-4 month and weekly coaching (aka replay analysis) with Pain. He points out my mistakes in my unsuccessful games and he points out the good things that I improved on. No micromanagement, just straight to the point and no bs. If you listen and apply, you will improve. He told me if you blame your team, then delete dota.  I listened. I deleted XD. But then came back, had another session with my boy Pain and got to legend 3. I maintain my winrate at around 70%, but dota is full of surprises, so I believe its very good. Last thing to say: I have been coached by other people and so far pain has been the best."},
    {
        img: "images/badges/ranks/legend.svg",
        title: "DOVAREME",
        subtitle: "1800 to 3000 mmr",
        description: 
"        I've been playing dota since I started playing PC Games, I first calibrated as a herald when i started  playing ranked and battled my way all the way up to Archon over a few years however I got stuck. I took Pain on as a coach after watching one of his videos. You wouldn't think it but its simple shit that he says during coaching sessions like 'hit more creeps' that make you win games. DOTA's not complicated if you follow simple formulas to win is what I am learning during my coaching sessions. So if you want to level up and rank up I'd recommend Pain. I ranked up 4 times in about a month after taking him on as a coach if that gives you an idea of effectiveness. Only take on coaching sessions if you are coachable and willing to fix your bad habits and the MMR will come easily." 
    },
    {
        img: "images/badges/ranks/ancient.svg",
        title: "Shlorky",
        subtitle: "2300 to 4220 mmr",
        description: 
"        I had recently hit a huge plateau after having some confidence shattering losses. I am mainly a position 1 player and my biggest issues in my matches were having no clue how to adapt to a hard lane matchup as well as not knowing how to play from behind. It felt like every time I played a new game I would end up throwing the lane somehow and having zero impact for the next 20-30 minutes.Our first session Pain pointed out a few mistakes I had been making in my matches as well as teaching me some fundamentals that I could abuse to win lanes that would otherwise be very difficult. At the end of our session he gave me a goal to have a good first 15-20 minutes in each pub from here on out.  At first it took some time to adjust to the things I was taught, but after a few games of practicing and memorizing the techniques we talked about I started to gain momentum and I haven't shown signs of stopping! After just ONE session with Pain I have gained over 500 mmr soloqueuing. I feel like right now I am playing the best Dota I have ever played and know that if I ever hit another wall I have a reliable coach to fall back on! I am looking forward to learning more about my favorite game in the near future."},
    {
        img: "images/badges/ranks/ancient.svg",
        title: "Key",
        subtitle: "1800 to 4000 mmr",
        description: 
        "Went from Crusader 3 {September 19. 2023} to legend 3 {November 19, 2023} in the span of weeks. Took Private lessons and group sessions all together. Had to slow down private lessons cause I wasn't improving much and we kept going over the same mistakes, I wanted to take time to improve what I learned and was hard stuck archon 5 until everything clicked, now I'm back to improving again. I would recommend pain if you're wanting to improve. Take you're time and let things set in before ordering again. 10/10 would recommend. I'll leave updates every time I move up a rank. UPDATE: I have reached Ancient" },
        {
            img: "images/badges/ranks/ancient.svg",
            title: "bigupcryptic",
            subtitle: "3500 to 4200",
            description:
"            Only had 2 sessions with @Pain- so far and already gained 700 plus mmr in just half a month. Very insightful coach, makes it very clear how to win games. Would highly recommend 💯"},
      {
            img: "images/badges/ranks/divine.svg",
            title: "LUKE",
            subtitle: "3500 to 4620",
            description:
"            Been working with Pain for several months now, climbed over 1000 mmr and finally hit divine today. The way he explains my mistakes is super motivating and I always wanna queue 10+ pubs after a coaching session with him."},
       {
            img: "images/badges/ranks/immortal.svg",
            title: "PROTOSS",
            subtitle: "3500 to 5640 mmr",
            description:
"            I just want to say thank you to Pain as he's one of the reasons why I reached Immortal! We have started since I was Legend IV or something, and we have been slowly making progress together by analyzing my games and seeing what works and what does not. If you are ever looking for a coach that can help you climb the ladder, Pain is your guy! Thanks!"        },
        {
            img: "images/badges/ranks/divine.svg",
            title: "Comrade Poppinoff",
            subtitle: "2400 to 4620 mmr",
            description:
"            I was hard stuck at legend for about 6 years. Since I've started coaching I climbed from a low of Archon 3 to Divine 1 in about 3 months and I'm easily playing the best dota of my life with no cheap cheese strats or single hero spamming. I had weekly replay sessions with Pain. He's very thoughtful and doesn't mind humouring me when I have a theory that is completely wrong. He'll test it out and convince me one way or another and win me round when most coaches will say 'no that's wrong do x'. He is an absolute beast at laning and doing some 1v1s with him really opened my eyes. I had a 75% lane winrate at Legend before coaching but he completely demolished me and taught me the importance of maintaining basics like Last hitting that everyone wants to ignore but are probably the most important thing. On top of that he's just a chilled guy, I like him and I hope he keeps doing well. His passion for dota is obvious as I see him online all the time watching replays and it's awesome talking to him about the meta and stuff. Hopefully I'll hit immortal one day soon and if I do he'll be a massive reason why. Cheers Pain, you're a good one!" },
    
    
    
    
    
    
    
    ]
