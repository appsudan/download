if (window.matchMedia('(display-mode: standalone)').matches) {
    // الموقع يُعرض كـ "تطبيق ويب"
}
 else {
    // الموقع يُعرض في المتصفح
    window.addEventListener('load', function() {
        if (!window.navigator.standalone) {
            // يمكن إضافة إشعار للمستخدم بتثبيت التطبيق
        }
    });
}

const apps = [
    { name: "ZOOLCRYPTO",
     image: "img/IMG_٢٠٢٥٠٧١٤_١٤٣٤٤٩_(512_x_512_pixel).jpg",
     description: "متجر خدمات اكترونيه",
     link: "https://github.com/appsudan/download/raw/refs/heads/main/app/ZOOLCRYPTO.apk" },
   
];

const container = document.getElementById("appContainer");

function displayApps() {
    container.innerHTML = "";
    apps.forEach(app => {
        const appCard = document.createElement("div");
        appCard.classList.add("app-card");
        appCard.innerHTML = `
            <img src="${app.image}" alt="${app.name}">
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <a href="${app.link}" target="_blank"><button>تحميل</button></a>
        `;
        container.appendChild(appCard);
    });
}

displayApps();
