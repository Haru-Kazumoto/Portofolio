import React from 'react';
import './content.css';

const Content = () => {
  return (
    <div className='container-content'>
      {/* Home page */}
      <div class="blob">
        <p>
          <span class="hello">Hello, i'm</span><br/>
          <span class="name">Ziaurrahman Athaya</span><br />
          <span className="developer">Backend Developer.</span>
        </p>
        <img src="../src/assets/blob.png" alt="blank" />
      </div>
      <div class="image-developer">
        <img src="../src/assets/me_mirror_selfie_2.jpeg" alt="blank" />
      </div>

      {/*  */}
      <div><h1>hello</h1></div>
    </div>
  )
}

export default Content
