import './style.css'
import deleteLoader from './src/utils/Loader/deleteLoader';
import printLoader from './src/utils/Loader/printLoader';
import printLoginForm from './pages/Login/login';

printLoader();
printLoginForm();

setTimeout(function () {
    deleteLoader();
}, 2000);