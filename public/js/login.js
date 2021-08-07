const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("Login form 1")
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log("Login form 2")
  if (email && password) {
    console.log("Login form 3")
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posters/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const signup  = () =>{
    document.location.replace('/signup')
}

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


document.querySelector('#signup').addEventListener('click', signup);
