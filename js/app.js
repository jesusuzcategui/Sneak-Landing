const UNSPLASH_COUNT = 10;
const UNSPLASH_PAGE = 1;
const UNSPLASH_URL = 'https://api.unsplash.com/photos/random';
const UNSPLASH_ACCESS_KEY = 'uTDLZ02Ck_6NFYk0m2bxkK9cqRnA2Twj6Hl82lvUbIE';
const UNSPLASH_SECRET_KEY = 'DQfx2HealzsGq5AMDzFbAgF7RoB_1EDSWXl5639MnsM';

const findImages = () => {
    let images = [];
    const request_uri = UNSPLASH_URL + '?client_id=' + UNSPLASH_ACCESS_KEY + '&count=' + UNSPLASH_COUNT;

    fetch(request_uri)
    .then(response => response.json())
    .then((photos) => {
        images = photos;
        const html_container = document.querySelector("#gallery_container");
        let html_result = ``;
        images.forEach((element, i)=>{
            html_result += `<div class="item">
                                <img src="${element.urls.regular}">
                            </div>`;
        });

        html_container.innerHTML = html_result;
    })
    .catch((error)=>{
        console.error(error);
    });
};

const toggleView = (mode = 0) => {
    
    let target = document.querySelector("#gallery_container");

    if(mode == 0){
        target.classList.replace('masonry', 'column');
    } else {
        target.classList.replace('column', 'masonry');
    }
};

const loadmore = () => {
    findImages();
};

const closeMobileMenu = () => {
    const mobileMenuElement = document.querySelector('#sidebar__mobile');
    mobileMenuElement.style.left = '-100%';
};

const openMobileMenu = () => {
    const mobileMenuElement = document.querySelector('#sidebar__mobile');
    mobileMenuElement.style.left = '0%';
};

document.addEventListener("DOMContentLoaded", (event)=>{
    findImages();
});