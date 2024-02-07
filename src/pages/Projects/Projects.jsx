import React, { useState } from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import projectEmoji from '../../assets/images/skillsimg.png';
import './Projects.css';
import { projectData } from './ProjectsJson';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(9); // State to manage the number of visible projects
  const [showLess, setShowLess] = useState(false); // State to manage showing less projects

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 9); // Increase the number of visible projects by 9
    setShowLess(true); // Show the "Show Less" button
  };

  const showLessProjects = () => {
    setVisibleProjects(9); // Set the number of visible projects back to 9
    setShowLess(false); // Hide the "Show Less" button
  };

  return (
    <>
      <Header background="#FFFFFF" projectTextDecoration={"underline"} />
      <div className="projectContainer d-flex justify-content-around">
        <div>
          <h1 className="projectTitle">
            My Projects<img className="projectEmoji mx-3 mb-4" src={projectEmoji} alt="" />
          </h1>
        </div>
      </div>
      <div className="row mx-0 mt-5">
        {projectData.slice(0, visibleProjects).map((project, index) => ( // Display only the visible projects
          <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" key={index}>
            <Card style={{ width: '22rem', height: '600px', marginBottom:'75px' }}>
              <Card.Img className='mb-2' variant="top" height="200" style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                src={project.img} />
              <Card.Body style={{ height: '100%', overflowY: 'auto' }}>
                <Card.Title className='text-left'>{`${index + 1}- ${project.projectName}`}</Card.Title>
                <Card.Text className='text-left'>{project.description}</Card.Text>
                {project.skills && (
                  <div>
                    <p className="text-left">Skills:</p>
                    <ul>
                      {project.skills.map((skill, skillIndex) => (
                        <li className='text-left' key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card.Body>
              {project.adminliveLink ? (
                <div className='row align-items-end my-3 mx-1 flex-wrap justify-content-center'>
                  <div className='col-6'>
                    <Button className='projectButton' href={project.liveLink}>
                      Live Project
                    </Button>
                  </div>
                  <div className='col-6'>
                    <Button className='projectButton' href={project.githubLink}>
                      Github link
                    </Button>
                  </div>
                  <div className='col-6 mt-3'>
                    <Button className='projectButton' href={project.adminliveLink}>
                      Admin link
                    </Button>
                  </div>
                </div>
              ) : (
                project.liveLink && project.githubLink ? (
                  <div className='row align-items-end my-3 mx-1 justify-content-center'>
                    <div className='col-6'>
                      <Button className='projectButton' href={project.liveLink}>
                        Live Project
                      </Button>
                    </div>
                    <div className='col-6'>
                      <Button className='projectButton' href={project.githubLink}>
                        Github link
                      </Button>
                    </div>
                  </div>
                ) : project.liveLink ? (
                  <div className='d-flex justify-content-center align-items-end my-3 mx-3'>
                    <Button className='projectButton' href={project.liveLink}>
                      Live Project
                    </Button>
                  </div>
                ) : (
                  <div className='d-flex justify-content-center align-items-end my-3 mx-3'>
                    <Button className='projectButton' href={project.githubLink}>
                      Github link
                    </Button>
                  </div>
                )
              )}
            </Card>
          </div>
        ))}
      </div>
      {visibleProjects < projectData.length && !showLess && ( // Display the "Load More" button if there are more projects to show
        <div className="d-flex justify-content-center my-5">
          <Button className="showButton" onClick={loadMoreProjects}>Load More</Button>
        </div>
      )}
      {showLess && ( // Display the "Show Less" button if more projects are shown
        <div className="d-flex justify-content-center my-5 ">
          <Button className="showButton" onClick={showLessProjects}>Show Less</Button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Projects;
