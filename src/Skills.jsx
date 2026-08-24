const skills = [

    {
        name: "HTML",
        image: "assets/html.jfif",
        level: "90%"
    },

    {
        name: "CSS",
        image: "assets/css.jfif",
        level: "85%"
    },

    {
        name: "JavaScript",
        image: "assets/js.jfif",
        level: "80%"
    },

    {
        name: "React",
        image: "assets/react.png",
        level: "75%"
    },

    {
        name: "Python",
        image: "assets/Python.jfif",
        level: "80%"
    },

    {
        name: "MySQL",
        image: "assets/mysql.jfif",
        level: "80%"
    },

    {
        name: "GitHub",
        image: "assets/GitHub.jfif",
        level: "75%"
    }

];


function Skills() {

    return (

        <div className="skills-container">

            {skills.map((skill) => (

                <div
                    className="skill-card"
                    key={skill.name}
                >

                    <img
                        src={skill.image}
                        alt={skill.name}
                    />

                    <h3>
                        {skill.name}
                    </h3>


                    <div className="skill-bar">

                        <div
                            className="skill-progress"
                            style={{
                                width: skill.level
                            }}
                        ></div>

                    </div>


                    <span>
                        {skill.level}
                    </span>

                </div>

            ))}

        </div>

    );

}


ReactDOM
    .createRoot(
        document.getElementById("skills-root")
    )
    .render(<Skills />);