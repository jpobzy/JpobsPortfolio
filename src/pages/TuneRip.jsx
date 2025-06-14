import GradientText from "../components/gradient/GradientText"
import TuneRipShowcase from "../components/carousel/TuneRipShowcase"

function TuneRip(){

    return (
        <div>
            <div className="mb-[200px] ">
                <div className="   text-[150px] ml-[50px] -mt-[30px]">
                    <GradientText
                        colors={["#FFD1BA", "#FF8C42", "#FF6B6B", "#FF5DA2", "#8F5EFF", "#3D348B"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        TuneRip
                    </GradientText>
                </div>
            
 
            </div>

            <section className="info">
                <div className="mx-auto mt-[400px] w-[800px] text-center">
                    <div className="text-[40px]  mx-auto ">What is TuneRip?</div>
                    <div className="mt-[10px]">{"TuneRip is a desktop application designed to convert YouTube videos into MP3 files. Users can customize their downloads by choosing their own cover art, track title, genre, and artist information. In addition to downloading individual videos, TuneRip also supports bulk downloading from playlists and entire YouTube channels, making it easy to build and organize a personal music library."}</div>
                </div>

                    {/* <div className="w-[900px] mx-auto mt-[100px] mb-[100px]">
                                <img src={homeImg} />
                    </div>     

                <div className="mt-[60px]  mx-auto w-[900px] text-center">
                    <div className="mt-[100px] text-[40px] mx-auto ">Overview</div>
                    <div className="mt-[10px] mb-[40px]">{"- AutoLab is a sophisticated course management platform developed by Carnegie Mellon University students and faculty. It offers instructors automated programming assessments and tracks scores via web-based technology. Along with automatic evaluation and score tracking, AutoLab provides a comprehensive set of services, including grading, assignment distribution, code annotation, plagiarism detection, and more."}</div>
                    <div className="mb-[40px]">{"- Our goal was to redesign and enhance the existing version of the AutoLab system utilized by the University at Buffalo for the evaluation of students' programming assignments."}</div>
                    <div>{"- Our team, composed of alumni with experience on the AutoLab system, undertook a comprehensive redevelopment. During the process, I honed my project management and teamwork skills and gained insights into executing real-world programming projects."}</div>
                    <div className="mt-[100px] text-[40px] mx-auto ">Why we want to build a replacement:</div>
                    <div className="mt-[10px] mb-[40px]">{"Autolab faced reliability issues, including poor performance and grading inaccuracies. These led to downtime and incorrect feedback for students, causing classes to reschedule assignments. To prevent future issues, we designed DevU with stability and reliability in mind, reducing the need for unscheduled maintenance and outages. To illustrate the reliability issues faced by Autolab, I have included a graph from the Tango VMs showing the number of job errors and job failures. As you can see from the graph, the rate of errors and failures is small but the number is usually less than 5. However this is still relatively high, leading to the need for a more stable solution. That's why we've built DevU with stability and reliability as our top priority."}</div>
                </div>

                <div className="mx-auto text-center w-[1000px]">
                    <img src={tango} />
                </div> */}
            </section>  

            {/* <section id="workflow">
                 <div className="mx-auto w-[800px] text-center">
                    <div className="mt-[20px] font-bold text-[40px]">How the current autolab works:</div>


                    <div className="text-[40px] mx-auto mt-[20px]">AUTOGRADING:</div>
                    <div className="mt-[10px]">{"AutoGrading, a key feature of AutoLab, allows real-time evaluation and grading of student programming assignments in a variety of languages and software packages. This provides immediate feedback and improves the student learning experience compared to traditional methods."}</div>
                    <div className="text-[40px] mx-auto mt-[25px]">SCOREBOARD</div>
                    <div className="mt-[10px]">{"The Scoreboard in AutoLab elevates the student experience with its real-time display of anonymous, autograded scores that foster a sense of community and friendly competition. This dynamic duo of autograding and scoreboard creates an optimal learning atmosphere that inspires students to perform at their best, while keeping them informed and on track."}</div>
                    <div className="text-[40px] mx-auto mt-[25px]">SECURITY</div>
                    <div className="mt-[10px]">{"Tango is a powerful web service that drives the efficiency of Autolab's job management. It provides secure isolation for student code by provisioning Docker containers and reporting results to the Autolab UI. This leads to increased scalability, ensuring that submissions can be processed quickly and efficiently, while minimizing the risk of malware."}</div>
                
                
                

                    <div className="text-[40px] mx-auto mt-[30px]">How DevU works:</div>
                    <div className="mt-[10px] mb-[20px]">{"AutoGrading, a key feature of AutoLab, allows real-time evaluation and grading of student programming assignments in a variety of languages and software packages. This provides immediate feedback and improves the student learning experience compared to traditional methods."}</div>
                    
                    <img src={controlflow}></img>
                </div>
            </section>


            <section id="testing">
                <div className="mx-auto text-center w-[800px] mt-[20px] ">
                    <div className="text-[40px] mx-auto ">My Role:</div>
                    <div className="mt-[10px]">{"In my role on the DevU project, I was tasked with working on various components, including courses, assignments, submissions, the assignments section, and the course sections. At the start, I collaborated with another student specifically on the courses and assignments entities. We utilized a separate branch on Github to share and exchange code. My first task was to familiarize myself with the project structure and make necessary corrections, such as fixing typos. As I gained a better understanding of the code, I became increasingly involved in coding and committing changes. My first entity involved creating controller tests for the courses and assignments entities, which involved handling HTTP requests and verifying their correct handling. Once the work on the courses and assignments entities was finalized and merged with the master branch, I was tasked with completing the Submissions entity on my own."}</div>
                    <div className="text-[40px] mx-auto mt-[20px]">Testing</div>
                    <div className="mt-[10px]">{"For testing there are two types of testing that is required to be conducted. One for the entities individual files like the controller and serializer and testing in Postman for the entity itself. The individual tests required individual testing files, for example the submissions controller file requires a submissions controller test file which uses Jest, a popular testing framework, to verify that the controller behaves correctly in different scenarios. The tests cover four main aspects:"}</div>
                    
                    <div className="mt-[20px] -mb-[10px]">{"Getting all submissions (GET /submissions)"}</div>
                    <div className="mt-[10px] -mb-[10px]">{"Getting a submission by ID (GET /submissions/:id)"}</div>
                    <div className="mt-[10px] -mb-[10px]">{"Creating a new submission (POST /submissions)"}</div>
                    <div className="mt-[10px] ">{"Updating a submission (PUT /submissions/:id)"}</div>
                    
                    <div className="mt-[20px]">{"The second type of testing focuses on the entity as a whole. To accomplish this, I utilized Postman to create and manage assignments and courses data by inputting the required information in the POST request body. I then verified the data's accuracy by utilizing GET requests and edited the data through PUT requests. This testing guarantees that the data is accurately stored and easily accessible in the database. Below are images showcasing the step-by-step process of conducting these tests in Postman."}</div>
                    
                    
                </div>
            </section> */}


            <section id="projectImages" className="h-[800px]">
                <div className="mx-auto">
                    <TuneRipShowcase />
                </div>
            </section>

            <section id="howItWorks" className="text-center h-[400px] w-[800px] mx-auto">
                <div className="mx-auto">
                    <div className="text-[40px] ">How it works:</div>
                    <div className="mt-[10px]">{"TuneRip is built with an Electron + Vite + React frontend styled using Tailwind CSS, and a Python Flask backend connected to a MongoDB database via PyMongo. The stack enables a fast, responsive desktop experience with seamless data handling and persistent storage."}</div>
                    
                    <div className="text-[40px] mt-[40px] ">Whats next?</div>
                    <div className="mt-[10px]">{"I'm currently exploring ways to integrate AI to automatically parse and embed lyrics into MP3 metadata, making them accessible in music players that support lyric display. Upcoming features also include a filter system to skip unwanted tracks before downloading and tools to edit previously saved files so that users can chaneg album art, title, genre, and artist information."}</div>
                    <div className="mt-[10px]">{"Explore our project by visiting the "}{<a href="https://github.com/UBAutograding/devU-api">Github Repository!</a>}</div>
                </div>
            </section>


                <div className='h-[50px]'></div>

        </div>
    )
}

export default TuneRip