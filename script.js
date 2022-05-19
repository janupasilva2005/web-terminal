/**
 * Terminal color schemes
 */
const colorSchemes = {
  // Default color scheme
  solarizedDark: {
    background: "#002B36",
    text: "#839496",
  },
  blackOnLightYellow: {
    background: "#FFFFDD",
    text: "#000000",
  },
  blackOnWhite: {
    background: "#FFFFFF",
    text: "#000000",
  },
  grayOnBlack: {
    background: "#000000",
    text: "#AAAAAA",
  },
  greenOnBlack: {
    background: "#000000",
    text: "#00FF00",
  },
  whiteOnBlack: {
    background: "#000000",
    text: "#FFFFFF",
  },
};

// Terminal container
const mainContainer = document.getElementById("container");

window.addEventListener("DOMContentLoaded", () => {
  // Set the window color to default color
  mainContainer.style.backgroundColor = colorSchemes.solarizedDark.background;
});
