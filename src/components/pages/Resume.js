import React from 'react';

export default function Resume() {
  return (
    <div className='section-heading container'>
    <h2 className='page-heading'>Resume</h2>
    <iframe src="https://docs.google.com/document/d/e/2PACX-1vSIB4MR66fNEeL_pY0RIJe5vpi4TdBEwttMFVoLOgIY19lsHpfhZJtp3Yo15gruE25O_NhKVlAB5_rc/pub?embedded=true"></iframe>
    <h3><a href={process.env.PUBLIC_URL+ "/resources/Resume.pdf"} download>Download Resume</a></h3>
    </div>
  );
}