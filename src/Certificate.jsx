const certificates = [

    {
        title: "iOS App Development",
        organization: "Gerogy Academy",
        file: "certificates/gerogy.jfif"
    },

    {
        title: "Java Programming",
        organization: "Aalan Tech",
        file: "certificates/Aalan tech.pdf"
    },

    {
        title: "Full Stack Development",
        organization: "GUVI",
        file: "certificates/guvi.jpeg"
    },

    {
        title: "Web Development",
        organization: "CodeBind Technologies",
        file: "certificates/codebind.pdf"
    }

];


function Certificates() {

    return (

        <div className="certificate-container">

            {certificates.map((certificate) => (

                <div
                    className="certificate-card"
                    key={certificate.title}
                >

                    <div className="certificate-icon">

                        <i className="fa-solid fa-certificate"></i>

                    </div>


                    <h3>
                        {certificate.title}
                    </h3>


                    <p>
                        {certificate.organization}
                    </p>


                    <a
                        href={certificate.file}
                        target="_blank"
                    >

                        View Certificate

                    </a>

                </div>

            ))}

        </div>

    );

}


ReactDOM
    .createRoot(
        document.getElementById("certificates-root")
    )
    .render(<Certificates />);