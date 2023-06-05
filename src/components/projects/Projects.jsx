function Projects() {
    return (
      <section>
        <hr id="projects" />
        <h2>Projects</h2>
        <div className="projects-container">
          
          {/* Repeat this structure for each project */}
          <div className="project-card">  
            <a href="https://fantastic-puppy-a523c3.netlify.app" target="_blank">
              <img src="Images/Holidaze.PNG" alt="Accommodation Booking Site" />
              <p>Accommodation Booking Site</p>
              <a
                href="https://github.com/martinMr79/project-exam2-martin-mroz#holidaze-accommodation-booking-site"
                className="project-github-link"
                target="_blank"
              >
                View code <i className="fab fa-github"></i>
              </a>
            </a>
          </div>
  
          {/* Project cards end */}
        </div>
      </section>
    );
  }
  

  export default Projects; 