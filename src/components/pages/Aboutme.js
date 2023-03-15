import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Aboutme() {
  return (
    <div className='section-heading container'>
      <h2 className='page-heading'>About Me</h2>
      <Card.Img variant="top" src={process.env.PUBLIC_URL +"/images/avatar.png"} />
      <p>
        Hello. My name is Whit Spaulding. I am a software engineer and a
        small business consultant who has worked with clients in retail, manufacturing,
        education, and the military. My areas of expertise are turnaround consulting, 
        training/coaching, and leadership development. Check out my portfolio of recent projects 
        completed on my way to becoming a full stack web developer. I look forward to working
        with you!
      </p>
    </div>
  );
}