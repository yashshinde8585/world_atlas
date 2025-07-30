
World Atlas 🌍
<p align="center">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
</p>

<p align="center">
An interactive and responsive single-page application that allows users to explore countries around the world. Built with React and Vite, this project serves as a modern, fast, and user-friendly guide to global information.
</p>

<p align="center">
<a href="[YOUR_LIVE_DEMO_URL_HERE]"><strong>View Live Demo »</strong></a>
</p>

<br/>

<!-- You can replace this with a screenshot or a GIF of your application -->

<p align="center">
<img src="[YOUR_SCREENSHOT_OR_GIF_URL_HERE]" alt="World Atlas Application Screenshot" width="800"/>
</p>

✨ Features
Interactive World Map: A visually engaging way to start exploring.

Comprehensive Country Data: Fetches and displays a list of all countries with key information.

Dynamic Search: Instantly find any country by typing in the search bar.

Filter by Region: Easily filter countries by continent (Africa, Americas, Asia, Europe, Oceania).

Detailed Country View: Click on any country to navigate to a detailed page showing:

Native Name, Population, Region, Sub Region, and Capital

Top Level Domain, Currencies, and Languages

Responsive Design: A clean and fully responsive layout that works on all devices, from mobile phones to desktops.

Client-Side Routing: Built as a Single Page Application (SPA) using react-router-dom for seamless and fast navigation without page reloads.

Loading & Error States: Includes a loading spinner during data fetching and a user-friendly error page for a smooth user experience.

🛠️ Technologies Used
This project was built using a modern front-end stack:

Core: React.js

Build Tool: Vite

Routing: React Router (react-router-dom)

Styling: CSS3

Linting: ESLint

Deployment: [e.g., Netlify, Vercel, GitHub Pages]

📂 Project Structure
The project follows a standard component-based architecture to keep the codebase organized and maintainable.

<div style="position: relative;">
<button onclick="copyCode(this)" style="position: absolute; top: 0.5em; right: 0.5em; padding: 0.25em 0.5em; font-size: 0.8em; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">Copy</button>

/src
|-- /api
|   |-- countryData.json      # Local JSON data for countries
|   |-- postAPI.jsx           # Data fetching logic
|
|-- /assets                   # Static assets like SVGs
|
|-- /components
|   |-- /Layouts              # Components that define page structure (AppLayout, CountryCard)
|   |-- /UI                   # Reusable UI elements (Header, Footer, Loader)
|
|-- /pages                    # Top-level components for each route (Home, Country, About)
|
|-- App.jsx                   # Main application component
|-- main.jsx                  # Main entry point with routing setup

</div>

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm installed on your machine.

You can download them from nodejs.org.

Installation
Clone the repository:

<div style="position: relative;">
<button onclick="copyCode(this)" style="position: absolute; top: 0.5em; right: 0.5em; padding: 0.25em 0.5em; font-size: 0.8em; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">Copy</button>
sh git clone https://github.com/[YOUR_USERNAME]/[YOUR_REPOSITORY_NAME].git 
</div>

Navigate to the project directory:

<div style="position: relative;">
<button onclick="copyCode(this)" style="position: absolute; top: 0.5em; right: 0.5em; padding: 0.25em 0.5em; font-size: 0.8em; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">Copy</button>
sh cd [YOUR_REPOSITORY_NAME] 
</div>

Install NPM packages:

<div style="position: relative;">
<button onclick="copyCode(this)" style="position: absolute; top: 0.5em; right: 0.5em; padding: 0.25em 0.5em; font-size: 0.8em; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">Copy</button>
sh npm install 
</div>

Running the Application
To run the app in development mode, use the following command. This will start the Vite development server, usually on http://localhost:5173.

<div style="position: relative;">
<button onclick="copyCode(this)" style="position: absolute; top: 0.5em; right: 0.5em; padding: 0.25em 0.5em; font-size: 0.8em; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">Copy</button>

npm run dev

</div>

To create a production build of the app, run:

<div style="position: relative;">
<button onclick="copyCode(this)" style="position: absolute; top: 0.5em; right: 0.5em; padding: 0.25em 0.5em; font-size: 0.8em; background: #6c757d; color: white; border: none; border-radius: 3px; cursor: pointer;">Copy</button>

npm run build

</div>

🤝 Contact
[Your Name] - [Your Email Address] - [Link to your LinkedIn or Portfolio]

Project Link: [suspicious link removed][YOUR_USERNAME]/[YOUR_REPOSITORY_NAME]

<script>
function copyCode(button) {
const codeBlock = button.nextElementSibling;
const code = codeBlock.innerText;

const textarea = document.createElement(&#39;textarea&#39;);
textarea.value = code;
document.body.appendChild(textarea);
textarea.select();
document.execCommand(&#39;copy&#39;);
document.body.removeChild(textarea);

button.innerText = &#39;Copied!&#39;;
setTimeout(() =&gt; {
  button.innerText = &#39;Copy&#39;;
}, 2000);

}
</script>
