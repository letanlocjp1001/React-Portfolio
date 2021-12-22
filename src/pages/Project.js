import React from 'react'
import Tilt from 'react-parallax-tilt'
import './project.scss'
import data from '../data/dataproject'
import Img from '../img/img1.jpg'

const Project = () => {
  return (
    <section>
      <div className='project'>
        {data.map((project) => {
          const { id, img, title, detail, url } = project

          return (
            <Tilt>
              <div className='project__card' key={id}>
                <div className='project__card--view'>
                  <div className='card__img'>
                    <img src={Img} alt={title} />
                  </div>
                  <div className='card__body'>
                    <div className='card__title'>{title}</div>
                    <div className='card__details'>{detail}</div>
                    <a href={url} className='card__btn'>
                      Project
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          )
        })}
      </div>
      <span className='heading'>project</span>
    </section>
  )
}

export default Project
