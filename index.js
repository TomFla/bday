// Tracking user Auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    setupUI(user);
    console.log("user login");
  } else {
    setupUI();
    console.log("user Logout");
  }
});

// Creating user
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const userEmail = signupForm["signup-email"].value;
  const userPassword = signupForm["signup-password"].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(userEmail, userPassword).then((cred) => {
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// Login user
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userEmail = loginForm["login-email"].value;
  const userPassword = loginForm["login-password"].value;

  auth.signInWithEmailAndPassword(userEmail, userPassword).then((cred) => {
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});

// Logout user
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});
