// Selectors
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const errorMessage = document.querySelector(".error-msg");

// Functions
// Function that fetches data from the API
const getUserData = async () => {
  try {
    const username = searchInput.value;
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("could not fetch user data");
    }
    const data = await response.json();
    searchInput.value = "";
    return data;
  } catch (error) {
    // Display error message to users
    errorMessage.style.display = "block";
    searchInput.value = "";
  }
};
