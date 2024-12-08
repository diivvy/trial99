import { Auth } from 'aws-amplify';

document.getElementById('signupForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const user = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,          // default
        given_name: firstName,
        family_name: lastName
      }
    });
    console.log('Signup successful', user);
    window.location.href = 'login.html'; // Redirect to login page after signup
  } catch (error) {
    console.error('Error signing up:', error);
  }
});
