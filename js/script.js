const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const themeSwitch = document.querySelector('.theme-switch');

function switchPage(page) {
    aboutLink.classList.remove('active');
    projectsLink.classList.remove('active');
    aboutSection.classList.remove('active');
    projectsSection.classList.remove('active');

    if (page === 'about') {
        aboutLink.classList.add('active');
        aboutSection.classList.add('active');
    } else if (page === 'projects') {
        projectsLink.classList.add('active');
        projectsSection.classList.add('active');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    if (document.body.classList.contains('dark-mode')) {
        themeSwitch.textContent = 'Light Mode';
    } else {
        themeSwitch.textContent = 'Dark Mode';
    }
}

aboutLink.addEventListener('click', () => switchPage('about'));
projectsLink.addEventListener('click', () => switchPage('projects'));

themeSwitch.addEventListener('click', toggleDarkMode);

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.textContent = 'Light Mode';
    } else {
        document.body.classList.remove('dark-mode');
        themeSwitch.textContent = 'Dark Mode';
    }
}

const projectList = document.getElementById('project-list');
const projects = [
    {
        name: 'SakuraChat',
        ico: './img/SakuraChat.png',
        download: 'https://modrinth.com/user/yushi4ka',
        update: [
            '+ Add Messages above players',
            '+ Add Custom Emoji'
        ]
    },
    {
        name: 'SakuraHeads',
        ico: './img/SakuraHeads.png',
        download: 'https://modrinth.com/user/yushi4ka',
        update: [
            '+ Fix /sheads reload'
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
