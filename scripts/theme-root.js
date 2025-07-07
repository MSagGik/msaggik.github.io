const themeImageButton = document.querySelector("[data-theme-image]");
const themeLink = document.getElementById("theme");
let currentTheme = localStorage.getItem("theme") || "light";

const themes = {
  light: {
    css: "css/style_light.css",
    buttonImage: "media/settings/ic_light_theme.webp",
  },
  dark: {
    css: "css/style_night.css",
    buttonImage: "media/settings/ic_night_theme.webp",
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
  themeImageButton.src = themes[currentTheme].buttonImage;
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