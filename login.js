import { Auth } from 'aws-amplify';

document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const user = await Auth.signIn(email, password);
    console.log('Login successful', user);
    window.location.href = 'dashboard.html'; // Redirect to dashboard after login
  } catch (error) {
    console.error('Error logging in:', error);
  }
});
