// const aboutTabs = document.querySelectorAll(".tab");

// const aboutContent = document.querySelectorAll(".tab-content");

// document.addEventListener('DOMContentLoaded' , () => {
//     if(aboutTabs) {
//     aboutTabs[0].click();
// }
// });

// aboutTabs.forEach((tab) => {
//     tab.addEventListener('click' , (e) => {
//         e.preventDefault();

//         aboutTabs.forEach((a) => {
//             a.classList.remove("active");
//         });

//         tab.classList.add("active");

//         aboutContent.forEach((c) => {
//             c.classList.remove("active");
//         });

//         document.getElementById(tab.dataset.section).classList.add("active");

//         if(activeTab === "experience") {
//             const experiences = document.querySelector(".experience-list");

//             const experienceList = [{
//                 title: "Hands-on Development Experience ",
//                 details: "Currently building practical experience through full-stack projects, algorithmic problem solving, and continuous learning. Focused on applying MERN stack skills to real-world scenarios while strengthening system design and coding fundamentals."
//             }];

//             const experienceContent = experienceList.map((ele) => {
//                 return `
//                 <div class="experience-box" key=${ele?.id}>
//                         <h4>${ele?.title}</h4>
//                 <p>${ele?.details}</p>
//                     </div>
//                 `
//             }).join("");

//             if(experience) {
//                 experience.innerHTML = experienceContent;
//             }
//         }
//     })
// })


const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded', () => {
    if (aboutTabs.length > 0) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all tabs
        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        // Remove active class from all contents
        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        // Show selected content
        const activeSection = tab.dataset.section;
        document.getElementById(activeSection).classList.add("active");

        // ✅ Fix here
        if (activeSection === "experience") {
            const experiences = document.querySelector(".experience-list");

            const experienceList = [{
                title: "Hands-on Development Experience",
                details: "Currently building practical experience through full-stack projects, algorithmic problem solving, and continuous learning. Focused on applying MERN stack skills to real-world scenarios while strengthening system design and coding fundamentals."
            }];

            const experienceContent = experienceList.map((ele) => {
                return `
                    <div class="experience-box">
                        <h4>${ele.title}</h4>
                        <p>${ele.details}</p>
                    </div>
                `;
            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if(activeSection === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [{
                id: 1,
                year: "2023 - 2027",
                degree: "Bachelor of Engineering (B.E.) in Computer Engineering — Pursuing",
                institute: "V.V.P. Engineering College , Rajkot",
                details: "Currently pursuing a Bachelor of Engineering in Computer Engineering with a focus on software development, full-stack web development, and problem solving (Data Structures and Algorithms).",
            } , 
            {
                id: 2,
                year: "2021 - 2022",
                degree: "Higher Secondary Education (12th Grade) — GSEB Board",
                institute: "Modi School , Rajkot",
                details: "Built a strong academic foundation in Physics, Chemistry, and Mathematics, strengthening analytical and conceptual understanding.",
            } , 
            {
                id: 3,
                year: "2019 - 2020",
                degree: "Secondary School Education (10th Grade) - GSEB Board",
                institute: "Tapasvi School , Rajkot",
                details: "Completed secondary education with foundational subjects such as Mathematics, Science, Social Science, English, Gujarati, and Hindi.",
            }];

            const educationContent = educationList.map((ele) => {
                return `
                    <div class="experience-box">
                        <h4>${ele.degree}</h4>
                        <h5>${ele.year}</h5>
                        <h5>${ele.institute}</h5>
                        <p>${ele.details}</p>
                    </div>
                `;
            }).join("");

            if(education) {
                education.innerHTML = educationContent;
            }
        } else if(activeSection === "skills") {
            const skills = document.querySelector(".skill-list");

            const skillList = [{
                id: 1,
                name: "HTML5" ,
                icon: "devicon-html5-plain colored",
            } , 
            {
                id: 2,
                name: "CSS3" ,
                icon: "devicon-css3-plain colored",
            } , 
            {
                id: 3,
                name: "Javascript" ,
                icon: "devicon-javascript-plain colored",
            } , 
            {
                id: 4,
                name: "Node.js" ,
                icon:"devicon-nodejs-plain colored",
            } , 
            {
                id: 5,
                name: "React.js" ,
                icon: "devicon-react-original colored",
            } , 
            {
                id: 6,
                name: "MongoDB" ,
                icon: "devicon-mongodb-plain colored",
            } , 
            {
                id: 7,
                name: "MySQL" ,
                icon: "devicon-mysql-plain colored",
            } , 
            {
                id: 8,
                name: "Bootstrap" ,
                icon: "devicon-bootstrap-plain colored",
            } , 
            {
                id: 9,
                name: "Tailwind CSS" ,
                icon:"devicon-tailwindcss-plain colored",
            },
            {
                id: 10,
                name: "C++" ,
                icon: "devicon-cplusplus-plain colored",
            } , 
            {
                id: 11,
                name: "Express.js" ,
                icon: "devicon-express-original",
            } , 
            {
                id: 12,
                name: "Git" ,
                icon:"fa-brands fa-git-alt",
            }];

            const skillContent = skillList.map((ele) => {
                return `
                <div class="skill-box">
                    <i class="${ele.icon}"></i>
                    <span>${ele.name}</span>
                </div>
                `;
            }).join("");

            if(skills) {
                skills.innerHTML = skillContent;
            }

            
        } else if(activeSection === "about-me") {
            const info = document.querySelector(".my-info");

            const infoList = [{
                id:1,
                key: "Name : " ,
                value: "Mahek K. Zinzuvadiya" ,
            } , 
            {
                id:2,
                key: "Degree : " ,
                value: "B.E. Computer Engineering" ,
            } , 
            {
                id:3,
                key: "City : " ,
                value: "Rajkot",
            } , 
            {
                id:4,
                key: "Nationality : " ,
                value: "Indian",
            } , 
            {
                id:5,
                key: "Country : " ,
                value: "India" ,
            } , 
            {
                id:6,
                key: "Beyond Coding : ",
                value: "Karate , Drawing / Sketching , Music , Exploring new places" ,
            } , 
            {
                id:7,
                key: "Experience Level : " ,
                value: "Student Developer",
            } , 
            {
                id:8,
                key: "Phone : " ,
                value: "(+91) 7383043058",
            }, 
            {
                id:9,
                key: "Email : " ,
                value: "mahekzinzuvadiya8@gmail.com",
            }]

            const infoContent = infoList.map((ele) => {
                return `
                <div class="my-info">
                    <span>${ele.key}</span>
                    <span>${ele.value}</span>
                </div>
                `;
            }).join("");

            if(info) {
                info.innerHTML = infoContent;
            }
        } 
    });
});



