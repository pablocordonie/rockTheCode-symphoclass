import './style.css'

const getUsers = async () => {
  const response = await fetch('http://localhost:8080/api/v1/user');
  const users = await response.json();

  printUsers(users);
};

const printUsers = (users) => {
  const app = document.querySelector('#app');
  const main = document.createElement('main');

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

  app.appendChild(main);
  return app;
};

getUsers();
