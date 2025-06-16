import Carousel from 'react-bootstrap/Carousel';
import './DevuProjectShowcase.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Carousel.css'

import carosuel1img1 from '../../components/projects/images/oldimages/devu/login/frontImage.png'
import carosuel1img2 from '../../components/projects/images/oldimages/devu/login/login.png'
import carosuel1img3 from '../../components/projects/images/oldimages/devu/login/refreshToken.png'
import carosuel1img4 from '../../components/projects/images/oldimages/devu/login/authkey.png'

import coursesimg1 from '../../components/projects/images/oldimages/devu/courses/courses1.png'
import coursesimg2 from '../../components/projects/images/oldimages/devu/courses/courses2.png'
import coursesimg3 from '../../components/projects/images/oldimages/devu/courses/courses3.png'
import coursesimg4 from '../../components/projects/images/oldimages/devu/courses/courses4.png'
import coursesimg5 from '../../components/projects/images/oldimages/devu/courses/courses5.png'
import coursesimg6 from '../../components/projects/images/oldimages/devu/courses/courses6.png'
import coursesimg7 from '../../components/projects/images/oldimages/devu/courses/courses7.png'

import assignmentsimg1 from '../../components/projects/images/oldimages/devu/assignments/assignments1.png'
import assignmentsimg2 from '../../components/projects/images/oldimages/devu/assignments/assignments2.png'
import assignmentsimg3 from '../../components/projects/images/oldimages/devu/assignments/assignments3.png'
import assignmentsimg4 from '../../components/projects/images/oldimages/devu/assignments/assignments4.png'
import assignmentsimg5 from '../../components/projects/images/oldimages/devu/assignments/assignments5.png'
import assignmentsimg6 from '../../components/projects/images/oldimages/devu/assignments/assignments6.png'
import assignmentsimg7 from '../../components/projects/images/oldimages/devu/assignments/assignments7.png'

import submissionsimg1 from '../../components/projects/images/oldimages/devu/submissions/submissions1.png'
import submissionsimg2 from '../../components/projects/images/oldimages/devu/submissions/submissions2.png'
import submissionsimg3 from '../../components/projects/images/oldimages/devu/submissions/submissions3.png'
import submissionsimg4 from '../../components/projects/images/oldimages/devu/submissions/submissions4.png'
import submissionsimg5 from '../../components/projects/images/oldimages/devu/submissions/submissions5.png'
import submissionsimg6 from '../../components/projects/images/oldimages/devu/submissions/submissions6.png'
import submissionsimg7 from '../../components/projects/images/oldimages/devu/submissions/submissions7.png'

function DevuProjectShowcase() {
  return (
    <div>
        <Tabs className="mt-[90px]">
            <div className='mx-auto lg:w-[900px] text-center'>
            <TabList>
                <Tab>Creating an account</Tab>
                <Tab>Testing courses entity</Tab>
                <Tab>Testing courses entity</Tab>
                <Tab>Testing courses entity</Tab>
            </TabList>                
            </div>

            <TabPanel>
                <Carousel className='mx-auto lg:w-[900px] overflow-visible' indicators={true} interval={null}>
                <Carousel.Item>
                <img className="h-full w-full object-contain " src={carosuel1img1}/>
                    <Carousel.Caption className='!mt-[203px]'>
                        <div className='!-mb-[200px]'></div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src={carosuel1img2}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>Loging into the API through Postman</div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src={carosuel1img3}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>Copy the refresh token</div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={carosuel1img4}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px] '>{"Put the refresh token in the header Authorization: Bearer {{token}}"}</div>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </TabPanel>
            <TabPanel>
                <Carousel className='mx-auto lg:w-[900px] ' indicators={true} interval={null}>
                <Carousel.Item>
                <img className="h-full w-full object-contain " src={coursesimg1}/>
                    <Carousel.Caption className='!mt-[203px]'>
                        <div className='!-mb-[200px]'>{"Retrieve a List of Courses with an Empty Library (GET Request)"}</div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src={coursesimg2}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>{"Create a New Course with Missing Information (POST Request)"}</div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src={coursesimg3}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>{"Establish a Fully Informed Course (POST Request)"}</div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={coursesimg4}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>{"Adjust the End Date of an Existing Course to a Random Year (PUT Request)"}</div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={coursesimg5}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>{"Verify the Successful Update of a Specific Course (GET Request)"}</div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={coursesimg6}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>{"Create an Additional Course, with the ID Automatically Incremented to the Next Available Number (POST Request)"}</div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={coursesimg7}/>
                    <Carousel.Caption>
                        <div className='!-mb-[200px]'>{"Fetch an Overview of All Courses in the Library (GET Request)"}</div>
                    </Carousel.Caption>
                </Carousel.Item>


                </Carousel>
            </TabPanel>
            <TabPanel>
                <Carousel className='mx-auto lg:w-[900px]' indicators={true} interval={null}>
                    <Carousel.Item>
                    <img className="h-full w-full object-contain " src={assignmentsimg1}/>
                        <Carousel.Caption className='!mt-[203px]'>
                            <div className='!-mb-[200px]'>{"Get assignments (none created) - GET request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={assignmentsimg2}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Create empty assignment - POST request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={assignmentsimg3}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Create assignment for CSE 312 - POST request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={assignmentsimg4}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Update assignment 1 due date - PUT request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={assignmentsimg5}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Confirm update - GET request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={assignmentsimg6}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Create assignment for CSE 116 - POST request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={assignmentsimg7}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Get assignments - GET request"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
            </TabPanel>
            <TabPanel>
                <Carousel className='mx-auto lg:w-[900px] overflow-visible' indicators={true} interval={null}>
                    <Carousel.Item>
                    <img className="h-full w-full object-contain " src={submissionsimg1}/>
                        <Carousel.Caption className='!mt-[203px]'>
                            <div className='!-mb-[200px]'>{"Retrieve a List of Courses with an Empty Library (GET Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={submissionsimg2}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Create a New Course with Missing Information (POST Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                        <img src={submissionsimg3}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Establish a Fully Informed Course (POST Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={submissionsimg4}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Adjust the End Date of an Existing Course to a Random Year (PUT Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={submissionsimg5}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Verify the Successful Update of a Specific Course (GET Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={submissionsimg6}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Create an Additional Course, with the ID Automatically Incremented to the Next Available Number (POST Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={submissionsimg7}/>
                        <Carousel.Caption>
                            <div className='!-mb-[200px]'>{"Fetch an Overview of All Courses in the Library (GET Request)"}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </TabPanel>
        </Tabs>
    </div>

  );
}

export default DevuProjectShowcase;