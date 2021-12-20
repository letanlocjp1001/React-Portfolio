import React from 'react'
import Img1 from '../img/img1.jpg'
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.jpg'
import Img4 from '../img/img4.jpg'
import Img5 from '../img/img5.jpg'
import Img6 from '../img/img6.jpg'
import Img7 from '../img/img7.jpg'
import Img8 from '../img/img8.jpg'

const Project = () => {
  return (
    <div>
      <div class='content'>
        <div className='workBx'>
          <div className='imgBx'>
            <img src={Img1} alt='img' />
          </div>
          <div className='textBx'>
            <h3>Project 01</h3>
          </div>
        </div>
        <div className='workBx'>
          <div className='imgBx'>
            <img src={Img2} alt='' />
          </div>
          <div className='textBx'>
            <h3>Project 02</h3>
          </div>
        </div>
        <div className='workBx'>
          <div className='imgBx'>
            <img src={Img3} alt='' />
          </div>
          <div className='textBx'>
            <h3>Project 03</h3>
          </div>
        </div>
        <div className='workBx'>
          <div className='imgBx'>
            <img src={Img4} alt='' />
          </div>
          <div className='textBx'>
            <h3>Project 04</h3>
          </div>
        </div>
        <div className='workBx'>
          <div className='imgBx'>
            <img src={Img5} alt='' />
          </div>
          <div className='textBx'>
            <h3>Project 05</h3>
          </div>
        </div>
        <div className='workBx'>
          <div className='imgBx'>
            <img src={Img6} alt='' />
          </div>
          <div className='textBx'>
            <h3>Project 06</h3>
          </div>
        </div>
        <div className='workBx'>
          <div className='imgBx'>
            <img src={Img7} alt='' />
          </div>
          <div className='textBx'>
            <h3>Project 07</h3>
          </div>
        </div>
        <div className='workBx'>
          <div className='imgBx'>
            <img src={Img8} alt='' />
          </div>
          <div className='textBx'>
            <h3>Project 0</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
