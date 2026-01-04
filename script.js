

// ---------- MODAL FUNCTIONS ----------
function openModal(topic) {
    console.log("Button clicked:", topic);

    const modal = document.getElementById("modal");
    const content = document.getElementById("modalContent");

    if (topic === "Chandrayan-3") {
        content.innerHTML = `
        <h2 class="text-3xl mb-4 text-white">Chandrayaan-3</h2>
        <p class="mb-4 text-white ">
        *Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate end-to-end capability in safe landing and roving on the lunar surface. 
        <br>
        *It consists of Lander and Rover configuration. It will be launched by LVM3 from SDSC SHAR, Sriharikota. 
        <br>
        *The propulsion module will carry the lander and rover configuration till 100 km lunar orbit. The propulsion module has Spectro-polarimetry of Habitable Planet Earth (SHAPE) payload to study the spectral and Polari metric measurements of Earth from the lunar orbit.
        <br>
        *<b>Lander payloads:</b> Chandra's Surface Thermophysical Experiment (ChaSTE) to measure the thermal conductivity and temperature; Instrument for Lunar Seismic Activity (ILSA) for measuring the seismicity around the landing site; Langmuir Probe (LP) to estimate the plasma density and its variations. A passive Laser Retroreflector Array from NASA is accommodated for lunar laser ranging studies.
        <br>
        *<b>Rover payloads:</b> Alpha Particle X-ray Spectrometer (APXS) and Laser Induced Breakdown Spectroscope (LIBS) for deriving the elemental composition in the vicinity of landing site.
        <br>
        <br>
        for more info  <a href="https://www.isro.gov.in/Chandrayaan3_Details.html" 
        class="text-blue-500 hover:underline" 
        target="_blank" >click here</a>
        </p>
        <img src="https://evincism.com/wp-content/uploads/2023/08/chandrayaan-3-successful-landing-1-1280x720.jpg"
             class="rounded-xl">
        `;
    }

    else if(topic==="JWST"){
        content.innerHTML = `
        <h2 class="text-3xl mb-4 text-white">James Webb Space Telescope (JWST)</h2>
        <p class="mb-4 text-white">
            *The James Webb Space Telescope is the most powerful space telescope ever built,
            observing the universe in infrared.
            <br>
            *It is the largest telescope in space, and is equipped with high-resolution and high-sensitivity instruments, allowing it to view objects too old, distant, or faint for the Hubble Space Telescope.
            <br>
            *It is designed to answer outstanding questions about the Universe and to make breakthrough discoveries in all fields of astronomy. 
            <br>
            *Webb will see farther into our origins: from the formation of stars and planets, to the birth of the first galaxies in the early Universe.
            <br>
            *Webb is an international partnership between NASA, ESA and CSA. The telescope launched on an Ariane 5 from Europe's Spaceport in French Guiana.
            <br>
            The launch<br>
            <b>Launch date</b>: 25 December 2021<br>
            <b>Launch location</b>: Europe's Spaceport in French Guiana<br>
            <b>Launch vehicle</b>: Ariane 5<br>
            <b>Orbit</b>: Lagrange point 2, 1.5 million km from Earth<br>
            <br>
            <a href="https://www.esa.int/Science_Exploration/Space_Science/Webb" class="text-blue-500 hover:underline" target="_blank">click here for more info</a>


        </p>
        <img src="https://www.eoportal.org/ftp/satellite-missions/j/JWST_130722/JWST_Auto5E.jpeg"
             class="rounded-xl">
        `;
    }

    else if(topic==="Voyager"){
        content.innerHTML = `
        <h2 class="text-3xl mb-4 text-white">Voyager Missions</h2>
        <p class="mb-4 text-white">
            *The twin Voyager spacecraft have journeyed beyond our solar system,
            sending back invaluable data.<br>
            *Voyager 1 and Voyager 2 were launched to take advantage of a rare planetary alignment, enabling flybys of Jupiter and Saturn, with Voyager 2 continuing on to Uranus and Neptune.<br>
            *They provided the first detailed images and data of the outer planets, revealing Jupiter's turbulent atmosphere, Saturn's rings, Uranus's tilted magnetic field, and Neptune's active weather systems.<br>
            *Despite being designed for a 5-year mission, both probes are still operational today, sending data from billions of kilometers away. Voyager 1 is the farthest human-made object from Earth.<br>
            <br>
            <a href="https://en.wikipedia.org/wiki/Voyager_program" class="text-blue-500 hover:underline" target="_blank">click here for more info</a>

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
