const adsContainer = document.getElementById('ads-imgs');
const ads = [
    {
        img: './img/SakuraSMP.png',
        alt: 'SakuraSMP',
        link: 'https://discord.gg/vFssu5YrpT'
    },
    {
        img: './img/MeowStudio.png',
        alt: 'MeowStudio',
        link: 'https://discord.gg/JsVH4KSF'
    },
    {
        img: './img/WinterDev.png',
        alt: 'WinterDev',
        link: 'https://discord.gg/f3M5aZufpc'
    }
];

function getRandomAd() {
    const randomIndex = Math.floor(Math.random() * ads.length);
    return ads[randomIndex];
}

function displayAd(ad) {
    const adLink = document.createElement('a');
    adLink.href = ad.link;
    adLink.target = '_blank';

    const adImage = document.createElement('img');
    adImage.src = ad.img;
    adImage.alt = ad.alt;
    adImage.id = 'ads-img';

    adLink.appendChild(adImage);

    adsContainer.innerHTML = '';
    adsContainer.appendChild(adLink);
}

displayAd(getRandomAd());

setInterval(() => {
    displayAd(getRandomAd());
}, 10000);
