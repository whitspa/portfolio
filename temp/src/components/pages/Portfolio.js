import React, { useState } from 'react';
import projects from "./resources/projects.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Portfolio() {
  const [projectdetail] = useState(projects)
  return (
    <div className='section-heading container'>
      <h2 className='page-heading'>Portfolio</h2>
      <div className='d-flex flex-wrap justify-content-evenly'>
        {projectdetail.map((project, key) => {
          return (
            <Card key={key} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + project.screnshot} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                {project.description}
                </Card.Text>
                <Button variant="primary"><a href={project.live} rel="noreferrer" target="_blank">LIVE</a></Button>
                <Button variant="primary"><a href={project.github} rel="noreferrer"target="_blank">github</a></Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  );
}