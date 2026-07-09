const media = document.querySelector(".contact-media");

const contactList = [
    {
        id:1,
        icon: "fa-solid fa-phone",
        name: "Phone",
        value: "(+91) 7383043058",
        href: "tel:+917383043058",
    } , 
    {
        id:2,
        icon: "fa-solid fa-envelope",
        name: "Email",
        value: "mahekzinzuvadiya8@gmail.com",
        href: "mailto:mahekzinzuvadiya8@gmail.com",
    } , 
    {
        id: 3,
        name: "Location",
        value: "Rajkot, India",
        icon: "fa-solid fa-globe",
        href: "#"
    }
];

const contactContent = contactList.map((ele) => {
    return `
    <div class="media" data-id="${ele?.id}">
                        <span>
                            <i class="${ele?.icon}"></i>
                        </span>

                        <div class="contact-value">
                            <p>${ele?.name}</p>
                            <a href="${ele?.href}">${ele?.value}</a>
                        </div>
                    </div>
    `;
}).join("");

if(media) {
    media.innerHTML = contactContent;
}

// send contact message

document.getElementById('contact-form').addEventListener("submit" , (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if(!name || !email || !phone || !message) {
        return alert("All fields are mandatory!");
    }

    emailjs.send("service_92ujx7k" , "template_hnt1ge8" , {
        name , email , phone , message,
    }).then(() => {
        alert("Message sent !");
        document.getElementById("contact-form").reset(); 
                        console.log('SUCCESS!');
                    }, (error) => {
                        alert("Message Error !");
                        console.log('FAILED...', error);
                    });
});