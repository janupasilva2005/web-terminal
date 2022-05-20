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

const selectedColor = colorSchemes.blackOnLightYellow;
const currentVersion = 1.0;

const headerString = "janupasilva@gmail.com";

const helpCommands = [
  "history - Shows the previous commands entered",
  "info - Shows the info the creator",
  "color - Change the color schems",
  "version - Show the version",
];

const input = document.getElementById("input"); // User input
const historyContainer = document.getElementById("history");
const headerElement = document.getElementById("header");

// Array to store all the commands user entered
let historyArray = [];

/**
 * Create the output
 */
const createHistory = (command) => {
  const historyItem = document.createElement("div"); // Creating history item
  historyItem.innerHTML = `<p style='color: ${selectedColor.text}'>${command}</p>`;

  historyContainer.append(historyItem); // Adding the item to top history
};

const setInputEmpty = (e) => {
  // Setting the input field to null
  e.target.value = "";
};

const showHeader = (command) => {
  const header = document.createElement("p");
  header.style.color = "#00CD00";
  header.innerHTML =
    headerString +
    ":~$ " +
    `<span color='${selectedColor.text}'>${command}</span>`;

  historyContainer.append(header);
};

const addToHistory = (command) => {
  historyArray.push(command);
};

// Input event function
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addToHistory(e.target.value);

    switch (e.target.value) {
      case "help":
        showHeader("help");

        helpCommands.forEach((cmd) => {
          createHistory(cmd);
        });
        setInputEmpty(e);

        return;
      case "info":
        showHeader("info");

        createHistory("show info");
        setInputEmpty(e);

        return;

      case "version":
        showHeader("version");

        createHistory(`Version ${currentVersion.toFixed(1)}`);
        setInputEmpty(e);

        return;
      case "history":
        showHeader("history");

        historyArray.forEach((historyItem, index) => {
          createHistory(index + 1 + ": " + historyItem);
        });

        setInputEmpty(e);

        return;
      default:
        showHeader(e.target.value);

        createHistory("Command Not found");
        setInputEmpty(e);

        return;
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
  // Set the window color to default color
  document.body.style.backgroundColor = selectedColor.background;

  headerElement.style.color = "#00CD00";
  headerElement.innerHTML = headerString + " :~$";

  input.style.color = selectedColor.text;
  input.focus();
});
