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
    { name: "متجر الأمل",
     image: "img/IMG_٢٠٢٤١٢٢٢_٠٩٠٢٣٦_(512_x_512_pixel).png",
     description: "متجر الأمل للبيع المنتجات الغذائيه",
     link: "https://github.com/appsudan/download/raw/refs/heads/main/app/%D9%85%D8%AA%D8%AC%D8%B1_%D8%A7%D9%84%D8%A3%D9%85%D9%84.apk" },
   
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
