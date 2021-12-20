import React from 'react'
import './skill.scss'
import data from '../data/dataskill.js'
import circles from '../data/datacircle'

const Skill = () => {
  return (
    <section>
      <div className='heading-1'>Skills</div>
      <div className='skill'>
        <div className='skill-left'>
          {data.map((skill) => {
            const { id, name, precents } = skill
            return (
              <div className='skill__group' key={id}>
                <div className='skill__name'>{name}</div>
                <div className='skill__bar'>
                  <div className='skill__bar--num'>{precents}%</div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='skill-right'>
          {circles.map((circle) => {
            const { id, name, precents } = circle
            return (
              <div className='chart' key={id}>
                <h2 className='chart__name'>{name}</h2>
                <div className='chart__circle'>
                  <div class='outer'>
                    <div className='inner'></div>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width='160px'
                    height='160px'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stop-color='#e91e63' />
                        <stop offset='100%' stop-color='#673ab7' />
                      </linearGradient>
                    </defs>
                    <circle
                      id='circle1'
                      cx='80'
                      cy='80'
                      r='70'
                      stroke-linecap='round'
                    />
                  </svg>
                  <h3 className='chart__circle--num'>
                    {precents}
                    <span>%</span>
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skill
