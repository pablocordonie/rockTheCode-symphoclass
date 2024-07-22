import './style.css'
import postLoginForm from './pages/Login/login';

export const BASE_URL = 'http://localhost:8080/api/v1';
/*
const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/user`);
  const users = await response.json();

  printUsers(users);
};

const printUsers = (users) => {
  const main = document.querySelector('main');


  users.forEach(user => {
    if (user.role === 'user') {
      main.innerHTML += `
      <div class="user">
        <h2>${user.fullname}</h2>
        <h3>${user.username}</h3>
        <p>${user.email}</p>
      </div>
    `;
    }
  });

  return main;
};
*/
//getUsers();
postLoginForm();
