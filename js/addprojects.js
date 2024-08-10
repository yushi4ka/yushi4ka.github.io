const mainLink = document.getElementById('main-link');
const mainSection = document.getElementById('main');

function switchPage(page) {
    mainLink.classList.remove('active');
    mainSection.classList.remove('active');

    if (page === 'main') {
        mainLink.classList.add('active');
        mainSection.classList.add('active');
    }
}

mainLink.addEventListener('click', () => switchPage('main'));

const projectList = document.getElementById('project-list');
const projects = [
    {
        name: 'SakuraChat',
        ico: './img/SakuraChat.png',
        download: 'https://modrinth.com/plugin/sakurachat',
        update: [
            '+ Add change language'
        ]
    },
    {
        name: 'SakuraHeads',
        ico: './img/SakuraHeads.png',
        download: 'https://modrinth.com/plugin/sakuraheads',
        update: [
            'No changelog specified.'
        ]
    }
];

projects.forEach(project => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectHeader = document.createElement('div');
    projectHeader.id = 'project-header';

    const projectIco = document.createElement('img');
    projectIco.id = 'project-ico';
    projectIco.src = project.ico;

    const projectName = document.createElement('h4');
    projectName.id = 'project-name';
    projectName.textContent = project.name;

    const projectDownload = document.createElement('a');
    projectDownload.id = 'project-download';
    projectDownload.href = project.download;
    projectDownload.textContent = 'Download';

    const projectContainer2 = document.createElement('div');
    projectContainer2.id = 'project-container';

    const projectUpdate = document.createElement('h5');
    projectUpdate.id = 'project-update';
    projectUpdate.textContent = 'Update:';

    const projectUpdateInfo = document.createElement('div');
    projectUpdateInfo.id = 'project-update-info';
    project.update.forEach(update => {
        const updateItem = document.createElement('p');
        updateItem.textContent = update;
        projectUpdateInfo.appendChild(updateItem);
    });

    projectHeader.appendChild(projectIco);
    projectHeader.appendChild(projectName);
    projectHeader.appendChild(projectDownload);

    projectContainer2.appendChild(projectUpdate);
    projectContainer2.appendChild(projectUpdateInfo);

    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(projectContainer2);

    projectList.appendChild(projectContainer);
});
