import printAuthForm from '../pages/Auth/auth';
import printEventCreatorForm from '../pages/Events/Event-Creator/eventCreator';
import printEventsForm from '../pages/Events/events';
import printEditProfileForm from '../pages/Profile/Edit-Profile/editProfile';
import printHomePage from '../pages/Home/home';
import printUserProfile from '../pages/Profile/profile';
import querySelectorChecker from '../utils/QuerySelector/querySelectorChecker';

const app = querySelectorChecker('#app', 'appConfig');
const footer = querySelectorChecker('.tsc-footer', 'appConfig');
const header = querySelectorChecker('.tsc-header', 'appConfig');
let HTMLElementsWithListeners = [];
const loaderClassName = 'tsc-loader';
const loaderTimeout = 2000;
const main = querySelectorChecker('.tsc-main', 'appConfig');
const tsc = querySelectorChecker('.tsc', 'appConfig');
let state = {
    currentPage: 'home'
};

export const appConfig = {
    appId: app.id,
    currentPage: state.currentPage,
    footerClassName: footer.className,
    headerClassName: header.className,
    HTMLElementsWithListeners,
    loaderClassName,
    loaderTimeout,
    mainClassName: main.className,
    scClassName: tsc.className
};

export const createFieldData = (className, name, title, inputType = 'text', inputId = '', placeholderText = '') => {
    return {
        className,
        inputId,
        inputType,
        name,
        placeholderText,
        title
    }
};

export const homeAboutParagraphs = [
    {
        text: 'Founded in 2020, The SymphoClass was born from a simple idea: to connect passionate music students with world-class instructors regardless of geographical limitations. Our platform bridges the gap between talented musicians seeking knowledge and experienced instructors eager to share their expertise.'
    }, {
        text: 'We believe that quality music education should be accessible to everyone. Our mission is to democratize access to exceptional musical instruction and foster a global community of musicians who inspire and support each other.'
    }
];

export const homeAboutStats = [
    {
        number: '5000+',
        label: 'Active Students'
    },
    {
        number: '750+',
        label: 'Expert Instructors'
    },
    {
        number: '45+',
        label: 'Countries Represented'
    }
];

export const homeAboutTeamMembers = [
    {
        name: 'Sofía Martínez',
        imgSrc: '#',
        role: 'Founder & CEO',
        bio: 'Former concert pianist with a passion for music education and technology. Sofía founded The SymphoClass to make quality music instruction accessible worldwide.'
    },
    {
        name: 'David Kim',
        imgSrc: '#',
        role: 'CTO',
        bio: 'Violinist and software engineer who combines his love for music and technology to create innovative solutions for music education.'
    },
    {
        name: 'Emma Johnson',
        imgSrc: '#',
        role: 'Head of Education',
        bio: 'Former professor at Juilliard with over 20 years of experience in music education. Emma ensures the highest quality of instruction on our platform.'
    }
];

export const homeFeatures = [
    {
        icon: 'fa-music',
        title: 'Expert Instructors',
        paragraph: 'Connect with renowned musicians and educators from prestigious institutions worldwide'
    }, {
        icon: 'fa-calendar-check',
        title: 'Easy Scheduling',
        paragraph: 'Book masterclasses that fit your schedule with our intuitive calendar system'
    }, {
        icon: 'fa-globe',
        title: 'Global Community',
        paragraph: 'Join a worldwide network of musicians, students, and educators passionate about music'
    }, {
        icon: 'fa-graduation-cap',
        title: 'Personalized Learning',
        paragraph: 'Receive tailored instruction that addresses your specific musical goals and challenges'
    }
];

export const homeFooterColumns = [
    {
        title: 'Platform',
        items: ['Features', 'Testimonials', 'Pricing']
    },
    {
        title: 'Company',
        items: ['About Us', 'Careers', 'Contact']
    },
    {
        title: 'Legal',
        items: ['Terms', 'Privacy', 'Cookies']
    }
];

export const homeHeaderMenuItems = ['Features', 'Testimonials', 'About', 'Login'];

export const homeTestimonials = [
    {
        name: 'María Rodríguez',
        role: 'Piano Instructor, Madrid Conservatory',
        paragraph: `"SymphoClass transformed my teaching career. I now connect with students from around the world
                  without leaving my studio."`
    }, {
        name: 'James Chen',
        role: 'Violin Student',
        paragraph: `"As a student in a small town, I never thought I'd have access to world-class violin instruction.
                  SymphoClass made it possible."`
    }
];

export const pageRenderers = {
    create_event: printEventCreatorForm,
    edit_profile: printEditProfileForm,
    events: printEventsForm,
    home: printHomePage,
    login: printAuthForm,
    profile: printUserProfile,
    register: printAuthForm
};

export const userInfo = {
    email: 'randomuser@email.com',
    fullname: 'Random User',
    img: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1736876054/pngtree-user-profile-icon-image-vector-png-image_12640450_ejfhhg.png',
    username: 'random_user'
};