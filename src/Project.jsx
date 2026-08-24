const projects = [

    {
        icon: "🩺",
        title: "ThyroScanner",

        description:
            "An Explainable Ensemble Learning based web application for accurate thyroid disease prediction using Machine Learning.",

        technologies:
            "Python | Flask | HTML | CSS | JavaScript | MySQL"
    },


    {
        icon: "💻",
        title: "Personal Portfolio",

        description:
            "A modern responsive portfolio website designed to showcase my education, skills, certifications and projects.",

        technologies:
            "HTML | CSS | JavaScript | React"
    }

];


function Projects() {

    return (

        <div className="project-container">

            {projects.map((project) => (

                <div
                    className="project-card"
                    key={project.title}
                >

                    <div className="project-icon">

                        {project.icon}

                    </div>


                    <h3>
                        {project.title}
                    </h3>


                    <p>
                        {project.description}
                    </p>


                    <h4>
                        Technologies
                    </h4>


                    <p className="technology">
                        {project.technologies}
                    </p>


                    <button
                        onClick={() =>
                            alert(
                                project.title +
                                " project selected!"
                            )
                        }
                    >

                        View Project

                    </button>

                </div>

            ))}

        </div>

    );

}


ReactDOM
    .createRoot(
        document.getElementById("projects-root")
    )
    .render(<Projects />);