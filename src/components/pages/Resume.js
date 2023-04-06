import React from 'react';

export default function Resume() {
  return (
    <div className='section-heading container'>
    <h2 className='page-heading'>Resume</h2>
    <iframe src="https://docs.google.com/document/d/1UQbHJ_gIy3XgeRo-U14TURjhCjXB4cEb/edit"></iframe>
    <h3><a href={process.env.PUBLIC_URL+ "/resources/resumewsun.pdf/"} download>Download Resume</a></h3>
    </div>
  );
}