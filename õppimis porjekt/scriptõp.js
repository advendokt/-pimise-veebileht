document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses-container');

    const courses = [
        { id: 1, title: 'HTML alused', description: 'Õpi HTML-i põhialuseid.', link: 'webÕpimineHtml.html' },
        { id: 2, title: 'CSS põhikursus', description: 'Õpi CSS-i põhialuseid.', link: 'webÕpimineCss.html' },
        { id: 3, title: 'JavaScript sissejuhatus', description: 'Õpi JavaScripti põhialuseid.', link: 'webÕpimineJs.html' }
    ];

    function displayCourses() {
        courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.classList.add('course');
            courseElement.innerHTML = `
                <h2 style="color: #555;">${course.title}</h2>
                <p>${course.description}</p>
                <a href="${course.link}" class="course-link">Mine kursusele</a>
                
            `;
            coursesContainer.appendChild(courseElement);
        });
    }

    displayCourses();
});