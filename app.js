// Selectors
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const errorMessage = document.querySelector(".error-msg");
const displayUserDetails = document.querySelector(".user-details");
const bodyElement = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-btn");

// Functions
// Function that fetches data from the API
const getUserData = async () => {
  try {
    if (searchInput.value !== "") {
      const username = searchInput.value;
      const url = `https://api.github.com/users/${username}`;
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error("could not fetch user data");
      }
      const data = await response.json();
      // Display the user datails section
      displayUserDetails.style.display = "block";
      // Clear search input
      searchInput.value = "";
      return data;
    } else {
      alert("Please input a Github username");
    }
  } catch (error) {
    // Get the viewport width
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    // Check if the screen width matches the media query
    if (mediaQuery.matches) {
      // Display error message to users
      errorMessage.style.display = "block";
    } else {
      alert("No result");
    }
    displayUserDetails.style.display = "none";
    searchInput.value = "";
  }
};

// Function that checks for the user's data
async function searchUser() {
  try {
    const data = await getUserData();
    getDate(data);
    getProfileData(data);
    getProfileStats(data);
    getOtherDetails(data);
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

// Function that gets profile stats
function getProfileStats(data) {
  const repos = document.querySelector(".repos-nr");
  const followersNr = document.querySelector(".followers-nr");
  const followingNr = document.querySelector(".following-nr");
  repos.textContent = data.public_repos;
  // Get number of followers
  followersNr.textContent = data.followers;
  // Get number of following
  followingNr.textContent = data.following;
}

// Function that displays links and the remaining details
function getOtherDetails(data) {
  const location = document.querySelectorAll(".links-wrapper p")[0];
  const githubLink = document.querySelector(".github-link");
  const twitterUsername = document.querySelectorAll(".links-wrapper p")[1];
  const company = document.querySelectorAll(".links-wrapper p")[2];
  // Assign the data (using nullish coalescing)
  githubLink.href = data.html_url;
  location.textContent = data.location ?? "Not available";
  githubLink.textContent = data.html_url ?? "Not available";
  twitterUsername.textContent = data.twitter_username ?? "Not available";
  company.textContent = data.company ?? "Not available";
  // Save all elements in an aray to be able to style the ones that aren't available
  const otherElements = [location, githubLink, twitterUsername, company];
  otherElements.forEach((element) => {
    if (element.textContent === "Not available") {
      element.classList.add("not-available");
    }
  });
}

// Function that toggles the theme of the page
function changeTheme() {
  const toggleIcon = toggleBtn.querySelector(".toggle-icon img");
  const toggleText = toggleBtn.querySelector("span");
  // Change the theme
  bodyElement.classList.toggle("dark-mode");
  // Replace toggle button text and icon for dark mode
  const isDarkMode = bodyElement.classList.contains("dark-mode");
  toggleText.textContent = isDarkMode ? "Light" : "Dark";
  toggleIcon.src = isDarkMode ? "icons/icon-sun.svg" : "icons/icon-moon.svg";
}

// Event listeners
searchBtn.addEventListener("click", searchUser);
searchInput.addEventListener("input", () => {
  // Hide error message
  errorMessage.style.display = "none";
});
toggleBtn.addEventListener("click", changeTheme);
