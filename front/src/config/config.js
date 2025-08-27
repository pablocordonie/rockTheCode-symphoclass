import printAuthForm from '../pages/Auth/auth'; // Función para renderizar el formulario de autenticación
import printEventsForm from '../pages/Events/events'; // Función para renderizar la página de eventos
import printEditProfileForm from '../pages/Edit-Profile/editProfile'; // Función para renderizar la edición de perfil
import printHomePage from '../pages/Home/home'; // Función para renderizar la página principal
import querySelectorChecker from '../utils/QuerySelector/querySelectorChecker'; // Utilidad para seleccionar elementos del DOM con comprobación

// URL base de la API, obtenida de las variables de entorno
const API_URL = import.meta.env.VITE_API_URL;

// Elemento raíz de la aplicación
const app = querySelectorChecker('#app', 'appConfig');

// Elemento del footer
const footer = querySelectorChecker('.tsc-footer', 'appConfig');

// Elemento del header
const header = querySelectorChecker('.tsc-header', 'appConfig');

// Array para almacenar elementos con listeners activos
let HTMLElementsWithListeners = [];

// Clase CSS para el loader
const loaderClassName = 'tsc-loader';

// Tiempo de espera para mostrar el loader (en ms)
const loaderTimeout = 2000;

// Elemento principal del contenido
const main = querySelectorChecker('.tsc-main', 'appConfig');

// Clase base para iconos sólidos (FontAwesome)
const solidIcon = 'fa-solid';

// Clase base de la app
const tsc = querySelectorChecker('.tsc', 'appConfig');

// Estado inicial de la aplicación
let state = {
    currentPage: 'login' // Página actual
};

// Datos del usuario actual
let userData = {
    email: 'randomuser@email.com', // Email del usuario
    fullname: 'Random User',       // Nombre completo
    img: '',                       // URL de la imagen de perfil
    token: '',                     // Token de autenticación
    username: 'random_user'        // Nombre de usuario
};

// Objeto de configuración global de la aplicación
export const appConfig = {
    appId: app.id, // ID del elemento raíz
    currentPage: state.currentPage, // Página actual
    footerClassName: footer.className, // Clase del footer
    headerClassName: header.className, // Clase del header
    HTMLElementsWithListeners, // Elementos con listeners activos
    loaderClassName, // Clase del loader
    loaderTimeout, // Tiempo de espera del loader
    mainClassName: main.className, // Clase principal del contenido
    solidIcon, // Clase base para iconos sólidos
    tscClassName: tsc.className, // Clase base de la app
    urlsList: { // URLs de la API
        eventsUrl: `${API_URL}/events`, // URL para eventos
        loginUrl: `${API_URL}/auth/login`, // URL para login
        profileUrl: `${API_URL}/users`, // URL para usuarios
        registerUrl: `${API_URL}/auth/register` // URL para registro
    },
    userData // Datos del usuario actual
};

// Clases para el icono de menú (hamburguesa)
export const barsClassNames = [solidIcon, 'fa-bars'];

// Función para crear la configuración de un campo de formulario
export const createFieldData = (className, id, name, title, inputType = 'text', placeholderText = '') => {
    return {
        className,        // Clase CSS del campo
        id,               // ID del campo
        inputType,        // Tipo de input
        name,             // Nombre del campo
        placeholderText,  // Placeholder del campo
        title             // Título o label del campo
    }
};

// Párrafos para la sección "About" de la página principal
export const homeAboutParagraphs = [
    {
        text: 'Fundado en 2020, The SymphoClass nació a partir de una simple idea: conectar a estudiantes apasionados por la música con el mejor profesorado a nivel mundial sin limitaciones geográficas de por medio. Nuestra plataforma busca infundir el mejor conocimiento musical posible para nuestros alumnos a través de gente ávida de compartir su enorme experiencia con ellos.'
    }, {
        text: 'Creemos que la calidad educativa no debe estar rivalizada con la accesibilidad a dicha educación. Por lo tanto, nuestra misión es democratizar el acceso al aprendizaje musical de gran nivel y fomentar una comunidad global de músicos que se inspiren y se apoyen mutuamente.'
    }
];

// Estadísticas para mostrar en la sección "About"
export const homeAboutStats = [
    {
        number: '5000+', // Número de estudiantes
        label: 'Estudiantes'
    },
    {
        number: '750+', // Número de profesores
        label: 'Profesores'
    },
    {
        number: '45+', // Número de países
        label: 'Países'
    }
];

// Miembros del equipo para la sección "About"
export const homeAboutTeamMembers = [
    {
        name: 'Sofía Martínez', // Nombre
        role: 'Fundadora & Directora Ejecutiva', // Rol
        bio: 'Ex-pianista apasionada por la conjunción entre la educación musical y la tecnología. Sofía fundó The SymphoClass para que el aprendizaje musical de calidad fuera accesible a todo el mundo.' // Biografía
    },
    {
        name: 'David Kim',
        role: 'Director de Software',
        bio: 'Violonchelista e ingeniero de software que combina su amor por la música y la tecnología para conseguir crear soluciones innovadoras para The SymphoClass.'
    },
    {
        name: 'Emma Johnson',
        role: 'Jefa de Educación',
        bio: 'Con más de 20 años de experiencia en la educación musical, Emma supone para nosotros poder enseñar a nuestros alumnos con la más alta calidad en nuestra plataforma.'
    }
];

// Características principales de la plataforma
export const homeFeatures = [
    {
        icon: 'fa-music', // Icono de FontAwesome
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

// Columnas para el footer de la página principal
export const homeFooterColumns = [
    {
        title: 'Plataforma', // Título de la columna
        items: ['Características', 'Testimonios', 'FAQ'] // Elementos de la columna
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

// Elementos del menú de la cabecera
export const homeHeaderMenuItems = [
    {
        item: 'features', // Identificador del elemento
        title: 'Características' // Título visible
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
        title: 'Iniciar sesión'
    }
];

// Testimonios para mostrar en la página principal
export const homeTestimonials = [
    {
        name: 'María Rodríguez', // Nombre
        role: 'Profesora de Piano, Conservatorio Real de Madrid', // Rol
        paragraph: `"The SymphoClass ha cambiado mi vida laboral por completo. Ahora conecto con estudiantes de todo el mundo sin salir de mi estudio."` // Testimonio
    }, {
        name: 'James Chen',
        role: 'Estudiante de Violín, Berklee College of Music de Valencia',
        paragraph: `"Vivir en el extranjero me impedía acceder a la mejor enseñanza de mi instrumento, el violín. The SymphoClass me lo ha facilitado."`
    }
];

// Mapeo de páginas a funciones de renderizado
export const pageRenderers = {
    edit_profile: printEditProfileForm, // Renderiza la edición de perfil
    events: printEventsForm,            // Renderiza la página de eventos
    home: printHomePage,                // Renderiza la página principal
    login: printAuthForm,               // Renderiza el login
    register: printAuthForm             // Renderiza el registro
};

// Clases para el icono de usuario
export const userIconClassNames = [solidIcon, 'fa-user', 'fa-sm'];