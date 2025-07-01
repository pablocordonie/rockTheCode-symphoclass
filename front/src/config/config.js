import printAuthForm from '../pages/Auth/auth';
import printEventsForm from '../pages/Events/events';
import printEditProfileForm from '../pages/Edit-Profile/editProfile';
import printHomePage from '../pages/Home/home';
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
    tscClassName: tsc.className
};

export const barsClassNames = ['fa-solid', 'fa-bars'];

export const createFieldData = (className, id, name, title, inputType = 'text', placeholderText = '') => {
    return {
        className,
        id,
        inputType,
        name,
        placeholderText,
        title
    }
};

export const homeAboutParagraphs = [
    {
        text: 'Fundado en 2020, The SymphoClass nació a partir de una simple idea: conectar a estudiantes apasionados por la música con el mejor profesorado a nivel mundial sin limitaciones geográficas de por medio. Nuestra plataforma busca infundir el mejor conocimiento musical posible para nuestros alumnos a través de gente ávida de compartir su enorme experiencia con ellos.'
    }, {
        text: 'Creemos que la calidad educativa no debe estar rivalizada con la accesibilidad a dicha educación. Por lo tanto, nuestra misión es democratizar el acceso al aprendizaje musical de gran nivel y fomentar una comunidad global de músicos que se inspiren y se apoyen mutuamente.'
    }
];

export const homeAboutStats = [
    {
        number: '5000+',
        label: 'Estudiantes'
    },
    {
        number: '750+',
        label: 'Profesores'
    },
    {
        number: '45+',
        label: 'Países'
    }
];

// TO-DO: Añadir un url con la imagen de cada miembro del equipo
export const homeAboutTeamMembers = [
    {
        name: 'Sofía Martínez',
        imgSrc: '#',
        role: 'Fundadora & Directora Ejecutiva',
        bio: 'Ex-pianista apasionada por la conjunción entre la educación musical y la tecnología. Sofía fundó The SymphoClass para que el aprendizaje musical de calidad fuera accesible a todo el mundo.'
    },
    {
        name: 'David Kim',
        imgSrc: '#',
        role: 'Director de Software',
        bio: 'Violonchelista e ingeniero de software que combina su amor por la música y la tecnología para conseguir crear soluciones innovadoras para The SymphoClass.'
    },
    {
        name: 'Emma Johnson',
        imgSrc: '#',
        role: 'Jefa de Educación',
        bio: 'Con más de 20 años de experiencia en la educación musical, Emma supone para nosotros poder enseñar a nuestros alumnos con la más alta calidad en nuestra plataforma.'
    }
];

export const homeFeatures = [
    {
        icon: 'fa-music',
        title: 'Instrucción Inmejorable',
        paragraph: 'Conecta con los artistas y educadores más reconocidos y prestigiosos a nivel mundial'
    }, {
        icon: 'fa-calendar-check',
        title: 'Agenda Flexible',
        paragraph: 'Reserva el taller que mejor encaje con tu experiencia y con tu tiempo'
    }, {
        icon: 'fa-globe',
        title: 'Comunidad Global',
        paragraph: 'Únete a la mayor red de artistas apasionados por la música'
    }, {
        icon: 'fa-graduation-cap',
        title: 'Aprendizaje Personalizado',
        paragraph: 'Recibe la mejor enseñanza para cubrir tus metas musicales'
    }
];

export const homeFooterColumns = [
    {
        title: 'Plataforma',
        items: ['Características', 'Testimonios', 'FAQ']
    },
    {
        title: 'Empresa',
        items: ['Propósito', 'Trayectoria', 'Contacto']
    },
    {
        title: 'Legalidad',
        items: ['Términos', 'Privacidad', 'Cookies']
    }
];

export const homeHeaderMenuItems = [
    {
        item: 'features',
        title: 'Características'
    },
    {
        item: 'testimonials',
        title: 'Testimonios'
    },
    {
        item: 'about',
        title: 'Propósito'
    },
    {
        item: 'login',
        title: 'Login'
    }
];

export const homeTestimonials = [
    {
        name: 'María Rodríguez',
        role: 'Profesora de Piano, Conservatorio Real de Madrid',
        paragraph: `"The SymphoClass ha cambiado mi vida laboral por completo. Ahora conecto con estudiantes de todo el mundo sin salir de mi estudio."`
    }, {
        name: 'James Chen',
        role: 'Estudiante de Violín, Berklee College of Music de Valencia',
        paragraph: `"Vivir en el extranjero me impedía acceder a la mejor enseñanza de mi instrumento, el violín. The SymphoClass me lo ha facilitado."`
    }
];

export const pageRenderers = {
    edit_profile: printEditProfileForm,
    events: printEventsForm,
    home: printHomePage,
    login: printAuthForm,
    register: printAuthForm
};

export const userIconClassNames = ['fa-solid', 'fa-user', 'fa-sm'];

export const userInfo = {
    email: 'randomuser@email.com',
    fullname: 'Random User',
    img: 'https://res.cloudinary.com/ddd5cycm4/image/upload/v1736876054/pngtree-user-profile-icon-image-vector-png-image_12640450_ejfhhg.png',
    username: 'random_user'
};