// Dynamically populate featured projects on the home page
document.addEventListener('DOMContentLoaded', function() {
    const featuredProjectsSection = document.querySelector('.featured-projects');

    // Example data for featured projects
    const featuredProjectsData = [
        { title: 'Project 1', description: 'FishFeast Express' },
        { title: 'Project 2', description: 'Community Response App' },
        { title: 'Project 3', description: 'Ambulance Booking System' },
        { title: 'Project 4', description: 'Electronic Voting System' },

    ];

    featuredProjectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        featuredProjectsSection.appendChild(projectCard);
    });
});
var imageSources = ["p3.jpg","p9.jpg","p7.jpg"];

var currentIndex= 0;
var interval = 3000;
function changeImage() {
    document.getElementById("profile").src = imageSources(currentIndex + 1) %
    imageSources.length;

}
setInterval(changeImage,interval);