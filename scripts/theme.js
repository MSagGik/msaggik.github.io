const themeImageButton = document.querySelector("[data-theme-image]");
const themeImageExperience = document.querySelector("[data-theme-image-experience]");
const themeLink = document.getElementById("theme");
let currentTheme = localStorage.getItem("theme") || "light";

const themes = {
  light: {
    css: "../css/style_light.css",
    buttonImage: "../media/settings/ic_light_theme.webp",
    imageExperience: "../media/about/image_experience_light.webp",
  },
  dark: {
    css: "../css/style_night.css",
    buttonImage: "../media/settings/ic_night_theme.webp",
    imageExperience: "../media/about/image_experience_night.webp",
  },
};

function changeTheme() {
  if (currentTheme === "light") {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }

  localStorage.setItem("theme", currentTheme);

  updateThemeCSS();
  updateThemeButtonImage();
}

function updateThemeCSS() {
  themeLink.href = themes[currentTheme].css;
}

function updateThemeButtonImage() {
  if (themeImageButton) {
    themeImageButton.src = themes[currentTheme].buttonImage;
  }
  if (themeImageExperience) {
    themeImageExperience.src = themes[currentTheme].imageExperience;
  }
}

if (themeImageButton) {
  themeImageButton.addEventListener("click", function () {
    changeTheme();
  });
}

if (currentTheme === "dark") {
  updateThemeCSS();
  updateThemeButtonImage();
}