/**
 * API URL configuration
 * Change this to match your backend server URL
 */
const API_URL = "http://localhost:8080/api";

/**
 * DOM Elements
 */
document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  checkAuthStatus();

  // Setup form event listeners
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }
});

/**
 * Handles user login
 * @param {Event} event - The form submit event
 */
async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    // Store token and user data
    localStorage.setItem("token", data.token);
    localStorage.setItem("userData", JSON.stringify(data.user));

    // Redirect to home page
    window.location.href = "index.html";
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.add("show");
  }
}

/**
 * Handles user registration
 * @param {Event} event - The form submit event
 */
async function handleRegister(event) {
  // console.log("Form submission handler called");
  // if (event) {
  //   event.preventDefault();
  //   console.log("Default prevented");
  // }
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    // Store token and user data
    localStorage.setItem("token", data.token);
    localStorage.setItem("userData", JSON.stringify(data.user));

    // Redirect to home page
    window.location.href = "index.html";
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.add("show");
  }
}

/**
 * Checks if user is authenticated
 */
function checkAuthStatus() {
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  // Add login/register links or user profile to all pages
  updateNavbar(!!token, userData);
}

/**
 * Updates navbar based on authentication status
 * @param {boolean} isLoggedIn - Whether user is logged in
 * @param {Object} userData - User data object
 */
function updateNavbar(isLoggedIn, userData) {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  // Remove any existing auth links
  const existingAuthLinks = navbar.querySelectorAll(".auth-nav-item");
  existingAuthLinks.forEach((link) => link.remove());

  if (isLoggedIn && userData) {
    // Create profile dropdown
    const profileDropdown = document.createElement("div");
    profileDropdown.className = "profile-dropdown auth-nav-item";
    profileDropdown.innerHTML = `
      <button class="profile-button" onclick="toggleDropdown()">
        ${userData.name} ▼
      </button>
      <div id="profileDropdown" class="dropdown-content">
        <a href="profile.html">Profile</a>
        <a href="#" onclick="logout()">Logout</a>
      </div>
    `;
    navbar.appendChild(profileDropdown);
  } else {
    // Add login and register links
    const loginLink = document.createElement("a");
    loginLink.href = "login.html";
    loginLink.className = "auth-nav-item";
    loginLink.textContent = "Login";

    const registerLink = document.createElement("a");
    registerLink.href = "register.html";
    registerLink.className = "auth-nav-item";
    registerLink.textContent = "Register";

    navbar.appendChild(loginLink);
    navbar.appendChild(registerLink);
  }
}

/**
 * Toggles the profile dropdown menu
 */
function toggleDropdown() {
  document.getElementById("profileDropdown").classList.toggle("show-dropdown");
}

/**
 * Logs out the user
 */
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  window.location.href = "index.html";
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches(".profile-button")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-dropdown")) {
        openDropdown.classList.remove("show-dropdown");
      }
    }
  }
};
