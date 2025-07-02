/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Bettina Messmer",
    title: "Hi all, I'm Bettina",
    subTitle: [emoji(
        "A passionate third-year machine learning Ph.D. student 🤖"
    ),
        <span>My research focuses on advancing the optimization and resource efficiency of deep learning architectures, supervised by <a
            target="_blank" rel="noopener noreferrer" href="https://people.epfl.ch/martin.jaggi">Prof. Martin Jaggi</a> in the laboratory of Machine Learning and Optimization (<a
            target="_blank" rel="noopener noreferrer" href="https://www.epfl.ch/labs/mlo/">MLO</a>).</span>,
        emoji('In the past I gained extensive software engineering experience in developing data processing and management platforms 👩‍💻.')],
    resumeLink:
        "", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/beme248",
    linkedin: "https://www.linkedin.com/in/bettina-messmer-627722115",
    gmail: "bettina.messmer@epfl.ch",
    scholar: "https://scholar.google.com/citations?user=XS_VFksAAAAJ",
    // gitlab: "https://gitlab.com/saadpasta",
    // facebook: "https://www.facebook.com/saad.pasta7",
    // medium: "https://medium.com/@saadpasta",
    // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "swift",
            fontAwesomeClassname: "fab fa-swift"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Harvard University",
            logo: require("./assets/images/harvardLogo.png"),
            subHeader: "Master of Science in Computer Science",
            duration: "September 2017 - April 2019",
            desc: "Participated in the research of XXX and published 3 papers.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            schoolName: "Stanford University",
            logo: require("./assets/images/stanfordLogo.png"),
            subHeader: "Bachelor of Science in Computer Science",
            duration: "September 2013 - April 2017",
            desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
            descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend/Design", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Ph.D. Candidate",
            company: "EPFL",
            companylogo: require("./assets/images/epfl.png"),
            date: "2022 – Present",
            desc: "My Ph.D. focuses on the optimization and resource efficiency of deep learning architectures. My work encompasses projects, such as:",
            descBullets: [
                'Investigating update dynamics of neurons',
                'Delving into the training and design choices of Mixture of Experts (MoEs)',
                'Exploring network architectures to identify designs that could improve future resource efficiency'
            ]
        },
        {
            role: "Team Lead",
            company: "Palantir",
            companylogo: require("./assets/images/palantir.png"),
            date: "2019 – 2022",
            desc: "As the leader of a product team, I guided the development of services dedicated to managing computations, with a focus on orchestration and scheduling. My core responsibilities included introducing new features and strategically redesigning service components to meet future demands, all while ensuring stable operations. In my role as team lead, I was committed to fostering the growth of my team members and efficiently prioritizing projects, ensuring that our objectives aligned with the broader organizational goals."
        },
        {
            role: "Senior Software Engineer",
            company: "1plusx",
            companylogo: require("./assets/images/1plusx.png"),
            date: "2016 – 2019",
            desc: "As a Machine Learning Engineer at an early-stage startup, I developed and maintained diverse data processing pipelines. My primary focus was on designing data pipelines and machine learning models to process and categorize content from millions of web pages.",
            descBullets: []
        },
    ]
};

const achievementSection = {
    title: emoji("Publications 📚"),
    subtitle: "",

    achievementsCards: [
        {
            title: "FineWeb2: One Pipeline to Scale Them All--Adapting Pre-Training Data Processing to Every Language",
            subtitle:
                "This work presents a new pipeline for curating pre-training datasets, adaptable to any language; its design choices were validated through extensive ablation before being scaled to create FineWeb2, a massive multilingual release for over 1000 languages.",
            authors: [{name: 'Guilherme Penedo'}, {name: 'Hynek Kydlíček'}, {name: 'Vinko Sabolčec'}, {
                name: 'Bettina Messmer',
                bold: true
            }, {name: 'Negar Foroutan'}, {name: 'Amir Hossein Kargaran'}, {name: 'Colin Raffel'}, {name: 'Martin Jaggi'}, {name: 'Leandro Von Werra'}, {name: 'Thomas Wolf'}],
            footerLink: [
                {
                    name: "arXiv (2025)",
                    url: "https://arxiv.org/abs/2506.20920"
                },
            ]
        },
        {
            title: "Enhancing Multilingual LLM Pretraining with Model-Based Data Selection",
            subtitle:
                "This work introduces a model-based data selection framework to enhance multilingual LLM pretraining and release high quality dataset in 20 languages.",
            authors: [{name: 'Bettina Messmer*', bold: true}, {name: 'Vinko Sabolčec*'}, {name: 'Martin Jaggi'}],
            footerLink: [
                {
                    name: "ICLR Workshop DATA-FM (2025)",
                    url: "https://arxiv.org/pdf/2502.10361"
                },
            ]
        },
        {
            title: "On-device collaborative language modeling via a mixture of generalists and specialists",
            subtitle:
                "This paper presents CoMiGS, an on-device collaborative learning framework that leverages a mixture of shared generalist and local specialist expert, effectively addressing heterogeneity in both user data and computational resources in a collaborative environment.",
            authors: [{name: 'Dongyang Fan*'}, {
                name: 'Bettina Messmer*',
                bold: true
            }, {name: 'Nikita Doikov'}, {name: 'Martin Jaggi'}],
            footerLink: [
                {
                    name: "ICML (2025)",
                    url: "https://arxiv.org/pdf/2409.13931"
                },
            ]
        },
        {
            title: "Analyzing & reducing the need for learning rate warmup in GPT training",
            subtitle:
                "This study examines why learning rate warmup benefits training, identifies key metrics for measuring update size impact, and presents methods to reduce for warmup.",
            authors: [{name: 'Atli Kosson'}, {name: 'Bettina Messmer', bold: true}, {name: 'Martin Jaggi'}],
            footerLink: [
                {
                    name: "NeurIPS (2024)",
                    url: "https://proceedings.neurips.cc/paper_files/paper/2024/file/059445c2d5b3ef918079851628fef1d6-Paper-Conference.pdf"
                },
            ]
        },
        {
            title: "Towards an empirical understanding of MoE design choices",
            subtitle:
                "This study delves into the training and design choices of Mixture of Experts (MoEs), focusing on their impact on model performance and expert specialization.",
            authors: [{name: 'Dongyang Fan*'}, {name: 'Bettina Messmer*', bold: true}, {name: 'Martin Jaggi'}],
            footerLink: [
                {
                    name: "ICLR Workshop ME-FoMo (2024)",
                    url: "https://arxiv.org/abs/2402.13089"
                },
            ]
        },
        {
            title: "Rotational Equilibrium: How Weight Decay Balances Learning Across Neural Networks",
            subtitle:
                "We explain how weight decay and other methods benefit neural network training by modulating the update dynamics of neurons",
            authors: [{name: 'Atli Kosson*'}, {name: 'Bettina Messmer*', bold: true}, {name: 'Martin Jaggi'}],
            footerLink: [
                {
                    name: "ICML (2024)",
                    url: "https://arxiv.org/abs/2305.17212"
                },
            ]
        },
    ],
    display: true // Set false to hide this section, defaults to true
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    achievementSection,
    isHireable
};
