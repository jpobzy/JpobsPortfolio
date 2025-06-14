function Bio(){
    return (
    <div className="mb-[]">
        <section className="info">
            <div className="mx-auto mt-[] w-[800px] text-center">
                <div className="text-[40px]  mx-auto ">About me</div>
                <div className="mt-[10px]">{"I'm a software developer with a background in computer science and a passion for building clean, functional tools. Whether it's a web app, automation script, or full-stack platform, I enjoy turning ideas into code that solves real problems. Currently exploring React, JavaScript, and Python-based backends."}</div>
            </div>

               
            {/* <div className="mt-[60px]  mx-auto w-[900px] text-center">
                <div className="mt-[100px] text-[40px] mx-auto ">Overview</div>
                <div className="mt-[10px] mb-[40px]">{"- AutoLab is a sophisticated course management platform developed by Carnegie Mellon University students and faculty. It offers instructors automated programming assessments and tracks scores via web-based technology. Along with automatic evaluation and score tracking, AutoLab provides a comprehensive set of services, including grading, assignment distribution, code annotation, plagiarism detection, and more."}</div>
                <div className="mb-[40px]">{"- Our goal was to redesign and enhance the existing version of the AutoLab system utilized by the University at Buffalo for the evaluation of students' programming assignments."}</div>
                <div>{"- Our team, composed of alumni with experience on the AutoLab system, undertook a comprehensive redevelopment. During the process, I honed my project management and teamwork skills and gained insights into executing real-world programming projects."}</div>
                <div className="mt-[100px] text-[40px] mx-auto ">Why we want to build a replacement:</div>
                <div className="mt-[10px] mb-[40px]">{"Autolab faced reliability issues, including poor performance and grading inaccuracies. These led to downtime and incorrect feedback for students, causing classes to reschedule assignments. To prevent future issues, we designed DevU with stability and reliability in mind, reducing the need for unscheduled maintenance and outages. To illustrate the reliability issues faced by Autolab, I have included a graph from the Tango VMs showing the number of job errors and job failures. As you can see from the graph, the rate of errors and failures is small but the number is usually less than 5. However this is still relatively high, leading to the need for a more stable solution. That's why we've built DevU with stability and reliability as our top priority."}</div>
            </div> */}

            {/* <div className="mx-auto text-center w-[1000px]">
                <img src={tango} />
            </div> */}
        </section>  

    </div>  
    )
}

export default Bio;