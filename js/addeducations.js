const educationsLink = document.getElementById('educations-link');
const educationSection = document.getElementById('education-info');
function switchPage(page) {
    educationsLink.classList.remove('active');
    educationSection.classList.remove('active');

    if (page === 'education') {
        educationsLink.classList.add('active');
        educationSection.classList.add('active');
    }
}

educationsLink.addEventListener('click', () => switchPage('education'));

const educationList = document.getElementById('educations-list');
const education = [
    {
        name: 'LangUtil.java',
        ico: './img/LangUtil.png',
        read: './LangUtil.html',
        update: [
            'Информация о том как сделать локализацию для своего плагина.',
        ]
    }
];

education.forEach(education => {
    const educationContainer = document.createElement('div');
    educationContainer.classList.add('education-container');

    const educationHeader = document.createElement('div');
    educationHeader.id = 'education-header';

    const educationIco = document.createElement('img');
    educationIco.id = 'education-ico';
    educationIco.src = education.ico;

    const educationName = document.createElement('h4');
    educationName.id = 'education-name';
    educationName.textContent = education.name;

    const educationRead = document.createElement('a');
    educationRead.id = 'education-read';
    educationRead.href = education.read;
    educationRead.textContent = 'Read';

    const educationContainer2 = document.createElement('div');
    educationContainer2.id = 'education-container';

    const educationUpdate = document.createElement('h5');
    educationUpdate.id = 'education-update';
    educationUpdate.textContent = 'Info:';

    const educationUpdateInfo = document.createElement('div');
    educationUpdateInfo.id = 'education-update-info';
    education.update.forEach(update => {
        const updateItem = document.createElement('p');
        updateItem.textContent = update;
        educationUpdateInfo.appendChild(updateItem);
    });

    educationHeader.appendChild(educationIco);
    educationHeader.appendChild(educationName);
    educationHeader.appendChild(educationRead);

    educationContainer2.appendChild(educationUpdate);
    educationContainer2.appendChild(educationUpdateInfo);

    educationContainer.appendChild(educationHeader);
    educationContainer.appendChild(educationContainer2);

    educationList.appendChild(educationContainer);
});
