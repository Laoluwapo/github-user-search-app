# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

### Screenshots

![](./screenshots/Desktop%20view%20darkmode.png)
![](./screenshots/Desktop%20view%20lightmode.png)
![](./screenshots/Mobile%20view%20darkmode.jpg)
![](./screenshots/Mobile%20view%20lightmode.jpg)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/github-user-search-app-ijiZ1eFuI0)
- Live Site URL: [Add live site URL here](https://github-user-search-app-by-ag.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
const mediaQuery = window.matchMedia("(min-width: 768px)");
if (mediaQuery.matches) {
  errorMessage.style.display = "block";
}
and;
const options = {
  day: "2-digit",
  month: "short",
  year: "numeric",
};
const outputDateStr = apiDate.toLocaleDateString("en-NG", options);
```

### Useful resources

- [Stackoverflow](https://www.stackoverflow.com) - This helped me figure out a way to format the date and how to target specific screen sizes using JS. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Laoluwapo](https://www.frontendmentor.io/profile/laoluwaapo)
- Twitter - [@laoluwaapo](https://www.twitter.com/laoluwaapo)
