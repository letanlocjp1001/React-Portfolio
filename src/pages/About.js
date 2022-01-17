import React from 'react'
import Tilt from 'react-parallax-tilt'
import { useTranslation } from 'react-i18next'
import './About.scss'
import AboutImg from '../img/about.jpg'
import '../i18n'

function About() {
  const { t } = useTranslation()
  return (
    <>
      <section className='about' id='about'>
        <div className='about__position'>
          <div className='about__left'>
            <Tilt>
              <div className='about__boxs'>
                <div className='about__box'>
                  <img src={AboutImg} alt='about' />
                </div>
                <div className='about__details'>
                  <h2>{t('about.title')}</h2>
                  <p>{t('about.text')}</p>
                </div>
              </div>
            </Tilt>
          </div>
          <div className='about__right'>
            <pre>
              <span className='about__icon'>
                <span>&#123;</span> <br />
              </span>
              <span className='about__parent'>"{t('about.author')}" </span>
              <span>&#58;</span>
              <span className='about__children'>"{t('about.name')}"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'>"{t('about.birthday')}" </span>
              <span>&#58;</span>
              <span className='about__children'>"{t('about.year')}"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'>"{t('about.country')}" </span>
              <span>&#58;</span>
              <span className='about__children'>
                "{t('about.countryname')}"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'>"{t('about.school')}" </span>
              <span>&#58;</span>
              <span className='about__children'>"{t('about.schoolname')}"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'>"repository" </span>
              <span>&#58;</span> <span>&#123;</span> <br />
              <span className='about__parent'>"url" </span>
              <span>&#58;</span>
              <span className='about__children'>
                "github.com/letanlocjp1001"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'>{t('about.qualify')} </span>
              <span>&#58;</span>
              <span className='about__children'>{t('about.language')}</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'>"engines" </span>
              <span>&#58;</span> <span>&#91;</span> <br />
              <span className='about__children about__children--chil'>
                "HTML"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__children about__children--chil'>
                "CSS"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__children about__children--chil'>
                "JavaScript"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__children about__children--chil'>
                "Photoshop"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__children about__children--chil'>
                "Illustrator"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__children about__children--chil'>
                "Figma"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__children about__children--chil'>
                "XD"
              </span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'> </span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'>"dependencies" </span>
              <span>&#58;</span> <span>&#123;</span> <br />
              <span className='about__parent--children'>"ReactJs" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent--children'>"NodeJs" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent--children'>"A-Frame" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent--children'>"SCSS" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent--children'>"Pug" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'> </span>&#125;<span>&#44;</span>{' '}
              <br />
              <span className='about__parent'>
                devDependencies <span>&#58;</span>{' '}
              </span>
              <span>&#123;</span> <br />
              <span className='about__parent--children'>
                "{t('about.game')}"{' '}
              </span>
              <span>&#58;</span>
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent--children'>
                "{t('about.music')}"{' '}
              </span>
              <span>&#58;</span>
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent--children'>
                "{t('about.coder')} "{' '}
              </span>
              <span>&#58;</span>
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent--children'>
                "{t('about.anime')} "{' '}
              </span>
              <span>&#58;</span>
              <span className='about__children'>"^5.0.0"</span>
              <span>&#44;</span>
              <br />
              <span className='about__parent'> </span>&#125; <br />
              <span className='about__icon'>&#125;</span>
            </pre>
          </div>
        </div>
        <span className='heading'>{t('page.about')}</span>
      </section>
    </>
  )
}

export default About
