const projectList = [
            {
                id:1,
                img: "assets/portfolio.png" ,
                title: "Personal Portfolio Website" ,
                tech: ["HTML5","CSS3","JavaScript","Responsive Design"],
                details: "A modern and responsive personal portfolio website developed to showcase my skills, projects, and educational background. The website features structured sections, dynamic content rendering using JavaScript, and a clean user interface to provide smooth navigation. It highlights my development abilities while presenting my work and achievements in a professional and visually appealing way.",
                live: "http://127.0.0.1:5500/index.html",
                github: "https://github.com/MahekKZ/Personal-Portfolio-Website",
            } , 
            {
                id:2,
                img: "assets/sportify.png" ,
                title: "Spotify Homepage UI Clone" ,
                tech: ["HTML5","CSS3","Responsive Layout"],
                details:  "A front-end clone of Spotify's homepage built using HTML5 and CSS3. The project focuses on recreating the layout, structure, and visual styling of the original interface while practicing modern CSS techniques such as flexbox, positioning, and responsive layout design. It demonstrates attention to UI details and strong understanding of front-end design fundamentals.",
                live: "https://mahekkz.github.io/Spotify-Homepage-UI-clone/",
                github: "https://github.com/MahekKZ/Spotify-Homepage-UI-clone",
            } , 
            {
                id:3,
                img: "assets/simon-says.png" ,
                title: "Simon-says Game" ,
                tech: ["HTML5","CSS3","JavaScript"],
                details:  "An interactive Simon Says memory game developed using HTML5, CSS3, and JavaScript. The game generates a sequence of colors that the player must remember and repeat correctly as the levels increase. It demonstrates JavaScript logic building, DOM manipulation, event handling, and dynamic user interaction while providing a fun and engaging gameplay experience.",
                live: "https://mahekkz.github.io/Simon-Says-Game/",
                github: "https://github.com/MahekKZ/Simon-Says-Game",
            } , 
            {
                id:4,
                img: "assets/sidebar.png" ,
                title: "CSS Sidebar Menu" ,
                tech: ["HTML5", "CSS3", "Flexbox", "CSS Transitions"],
                details:"A sidebar navigation layout built using only HTML5 and CSS3. The toggle functionality is implemented using the checkbox technique combined with modern CSS properties like transitions and positioning. This project focuses on learning creative CSS methods to build interactive UI components without using JavaScript.",
                live: "https://mahekkz.github.io/CSS-Sidebar-Menu/",
                github: "https://github.com/MahekKZ/CSS-Sidebar-Menu",
            }
]

const projects = document.querySelector(".project-list");

            const projectContent = projectList.map((ele, index) => {
                return `
                <div class="project-card">
                   <img src="${ele.img}" alt="project">
                   <h4>${ele.title}</h4>
                   <button class="more-btn" data-index="${index}">More</button>
                </div>
                `
            }).join("");

            if(projects) {
                projects.innerHTML = projectContent;
            }            


            
const popup = document.getElementById("project-popup");

/* OPEN POPUP WHEN CLICKING MORE */
document.addEventListener("click", function(e){

    if(e.target.classList.contains("more-btn")){

        const index = e.target.dataset.index;
        const project = projectList[index];

        popup.innerHTML = `
        <div class="popup-content">

            <span class="close-btn">&times;</span>

            <img src="${project.img}" alt="project">

            <h2>${project.title}</h2>

            <p>${project.details}</p>

            <div class="tech-stack">
                ${project.tech.map(t => `<span>${t}</span>`).join("")}
            </div>

            <div class="popup-links">
                <a href="${project.live}" target="_blank">Live Demo</a>
                <a href="${project.github}" target="_blank">Github</a>
            </div>

        </div>
        `;

        popup.style.display = "flex";
    }

});


/* CLOSE POPUP BUTTON */
document.addEventListener("click", function(e){

    if(e.target.classList.contains("close-btn")){
        popup.style.display = "none";
    }

});


/* CLOSE WHEN CLICKING OUTSIDE */
window.addEventListener("click", function(e){
    if(e.target === popup){
        popup.style.display = "none";
    }
});