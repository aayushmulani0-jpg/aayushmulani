// Aayush Mulani Portfolio Script

const projects = [
  {
    title: "To-Do App",
    path: "projects/todo-app/index.html",
    description: "A simple app to manage daily tasks with add and delete functionality."
  },
  {
    title: "Quiz App",
    path: "projects/quiz-app/index.html",
    description: "An interactive quiz application built using JavaScript and DOM manipulation."
  },
  {
    title: "Weather App",
    path: "projects/weather-app/index.html",
    description: "Fetches real-time weather data using an API and displays it in a clean UI."
  }
];

const projectList = document.getElementById("project-list");
const viewer = document.getElementById("viewer");
const frame = document.getElementById("project-frame");
const backBtn = document.getElementById("back-btn");
const projectsSection = document.getElementById("projects");

// Generate project cards dynamically
projects.forEach(proj => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
  `;
  card.addEventListener("click", () => {
    projectsSection.style.display = "none";
    viewer.classList.remove("hidden");
    frame.src = proj.path;
  });
  projectList.appendChild(card);
});

// Back button
backBtn.addEventListener("click", () => {
  viewer.classList.add("hidden");
  projectsSection.style.display = "block";
  frame.src = "";
});
