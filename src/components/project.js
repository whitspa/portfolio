import React, { useState } from 'react';

export default function Project({ users }) {
    return (
      <div className="container">
        <h1>Project:</h1>
        <ul className="list-group">
          {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
          {Projects.map((Project) => (
            <li className="list-project"
            //  key={project.login.uuid}> syntax to set up the project key?
              {`${project.title} ${project.deployed} (${project.github}) (${project.image})`}
            </li>
          ))}
        </ul>
      </div>
    );
  }