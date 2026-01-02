

// ---------- MODAL FUNCTIONS ----------
function openModal(topic) {
    console.log("Button clicked:", topic);

    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    if (topic === "Chandrayan-3") {
        content.innerHTML = `
        <h2 class="text-3xl mb-4 text-white">Chandrayaan-3</h2>
        <p class="mb-4 text-white ">
            Chandrayaan-3 is ISRO's lunar mission that achieved a successful
            soft landing near the Moon's south pole in 2023.
        </p>
        <img src="https://evincism.com/wp-content/uploads/2023/08/chandrayaan-3-successful-landing-1-1280x720.jpg"
             class="rounded-xl">
        `;
    }

    else if(topic==="JWST"){
        content.innerHTML = `
        <h2 class="text-3xl mb-4 text-white">James Webb Space Telescope (JWST)</h2>
        <p class="mb-4 text-white">
            The James Webb Space Telescope is the most powerful space telescope ever built,
            observing the universe in infrared.
        </p>
        <img src="https://www.eoportal.org/ftp/satellite-missions/j/JWST_130722/JWST_Auto5E.jpeg"
             class="rounded-xl">
        `;
    }

    else if(topic==="Voyager"){
        content.innerHTML = `
        <h2 class="text-3xl mb-4 text-white">Voyager Missions</h2>
        <p class="mb-4 text-white">
            The twin Voyager spacecraft have journeyed beyond our solar system,
            sending back invaluable data.
        </p>
        <img src="https://cdn.zmescience.com/wp-content/uploads/2017/09/Voyager_spacecraft.jpg"
             class="rounded-xl">
        `;
    }

    else if (topic === "SatelliteTracker") {
        content.innerHTML=`
        <h2 class="text-3xl mb-4 text-white">Satellite Orbit Tracker</h2>
        <p class="mb-4 text-white">
        A Python-based satellite orbit visualization tool using Matplotlib
        It is a real-time satellite tracking system that visualizes satellite orbits using Two-Line Element (TLE) data from CelesTrak. The project fetches live satellite data, calculates orbital positions and velocities, and displays animated trajectories using Matplotlib.
        This project was built to explore how satellites move around Earth and how
        their motion can be represented visually through code. github link:https://github.com/Stephania-Kamryn/Satellite-orbit-tracker
        </p>
        <a href="https://github.com/Stephania-Kamryn/Satellite-orbit-tracker" target="blank" class="text-blue-500 underline mb-4 block">
        View on GitHub <img src="satellite tracker snip.png" alt="Satellite Orbit Tracker Screenshot" class="rounded-xl">
        </a>`;
            
        }
        modal.classList.remove("hidden");
    }

    

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// ---------- WAIT FOR HTML ----------
document.addEventListener("DOMContentLoaded", () => {

    // ---------- MODAL BUTTON ----------
    const openBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("modal");

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            openModal("Chandrayan-3");
        });
    }

    // ---------- THEME TOGGLE ----------
    const toggleBtn = document.getElementById("themeToggle");
    const html = document.documentElement;

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            //body.classList.toggle("dark");
            //body.classList.toggle("bg-white");
            //body.classList.toggle("text-white");
            //body.classList.toggle("text-gray-900");
            //document.documentElement.classList.toggle("dark")
            html.classList.toggle("dark");
        });
    }

    // ---------- STAR FIELD ----------
    
    const starfield = document.getElementById("starField");
    const STAR_COUNT = 500; // denser stars

    if (starfield) {
        for (let i = 0; i < STAR_COUNT; i++) {
            const star = document.createElement("div");
            star.className = "star";

            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 0.5 + 0.3}s`;

            starfield.appendChild(star);
        }
    }

});
