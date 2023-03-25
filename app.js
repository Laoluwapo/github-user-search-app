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

// Function that checks for the user's data
async function searchUser() {
  try {
    const data = await getUserData();
    getDate(data);
    getProfileData(data);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

// Function that gets the date
function getDate(data) {
  // Input date string from API
  const apiDateStr = data.created_at;
  // Create a date object from the input string
  const apiDate = new Date(apiDateStr);
  // Create an option for formatting the date
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  // Format the date to the desired output format
  const outputDateStr = apiDate.toLocaleDateString("en-NG", options);
  const date = document.querySelector(".profile-date");
  const displayDate = "Joined " + outputDateStr;
  date.textContent = displayDate;
}

// Function that gets other details of the user
function getProfileData(data) {
  const username = document.querySelector(".profile-name");
  const profileUsername = document.querySelector(".profile-username");
  const profilePicture = document.querySelector(".dp-wrapper img");
  const userBio = document.querySelector(".profile-desc");
  username.textContent = data.name;
  profileUsername.textContent = "@" + data.login;
  // Get image url from api and assign it to the profile img
  const profileUrl = data.avatar_url;
  profilePicture.src = profileUrl;
  // Get user bio
  if (data.bio) {
    userBio.textContent = data.bio;
  }
}

// Event listeners
searchBtn.addEventListener("click", searchUser);
searchInput.addEventListener("input", () => {
  // Hide error message
  errorMessage.style.display = "none";
});
