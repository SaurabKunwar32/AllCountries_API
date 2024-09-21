document.addEventListener("DOMContentLoaded", () => {
  const modes = document.getElementById("modes");
  const icons = document.getElementById("moon");
  const para = document.getElementById("para");

  let darkMode = localStorage.getItem("darkMode");

  const enableDarkMode = () => {
    document.body.classList.add("dark");
    document.body.classList.add("darkM");
    icons.classList.replace("fa-moon", "fa-sun");
    para.innerText = "Light Mode";
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark");
    document.body.classList.remove("darkM");
    icons.classList.replace("fa-sun", "fa-moon");
    para.innerText = "Dark Mode";
    localStorage.setItem("darkMode", "disabled");
  };


  // If the daek mode is enabled previously then enable it 
  if (darkMode === "enabled") {
    enableDarkMode();
  }

  modes.addEventListener("click", () => {
    DarkM = localStorage.getItem("darkMode");
    if (DarkM !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});
