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
      <section className='about'>
        <div className='about__position'>
          <div className='about__left'>
            <Tilt>
              <div className='about__boxs'>
                <div className='about__box'>
                  <img src={AboutImg} alt='' />
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
                &#123; <br />
              </span>
              <span className='about__parent'>{t('about.author')} </span>&#58;
              <span className='about__children'>{t('about.name')}</span>&#44;
              <br />
              <span className='about__parent'>{t('about.birthday')} </span>&#58;
              <span className='about__children'>{t('about.year')}</span>&#44;
              <br />
              <span className='about__parent'>{t('about.country')} </span>&#58;
              <span className='about__children'>{t('about.countryname')}</span>
              &#44;
              <br />
              <span className='about__parent'>{t('about.school')} </span>&#58;
              <span className='about__children'>{t('about.schoolname')}</span>
              &#44;
              <br />
              <span className='about__parent'>"repository" </span>&#58; &#123;{' '}
              <br />
              <span className='about__parent'>"url" </span>&#58;
              <span className='about__children'>
                "github.com/letanlocjp1001"
              </span>
              &#44;
              <br />
              <span className='about__parent'>{t('about.qualify')} </span>
              &#58;
              <span className='about__children'>{t('about.language')}</span>
              &#44;
              <br />
              <span className='about__parent'>"engines" </span>&#58; &#91;{' '}
              <br />
              <span className='about__children about__children--chil'>
                "HTML"
              </span>
              &#44;
              <br />
              <span className='about__children about__children--chil'>
                "CSS"
              </span>
              &#44;
              <br />
              <span className='about__children about__children--chil'>
                "JavaScript"
              </span>
              &#44;
              <br />
              <span className='about__children about__children--chil'>
                "Photoshop"
              </span>
              &#44;
              <br />
              <span className='about__children about__children--chil'>
                "Illustrator"
              </span>
              &#44;
              <br />
              <span className='about__children about__children--chil'>
                "Figma"
              </span>
              &#44;
              <br />
              <span className='about__children about__children--chil'>
                "XD"
              </span>
              &#44;
              <br />
              <span className='about__parent'> </span>]&#44; <br />
              <span className='about__parent'>"dependencies" </span>&#58; &#123;{' '}
              <br />
              <span className='about__parent--children'>"ReactJs" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span className='about__parent--children'>"NodeJs" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span className='about__parent--children'>"A-Frame" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span className='about__parent--children'>"SCSS" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span className='about__parent--children'>"Pug" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span className='about__parent'> </span>&#125;&#44; <br />
              <span className='about__parent'>
                devDependencies&#58;{' '}
              </span>&#123; <br />
              <span className='about__parent--children'>"Game" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span className='about__parent--children'>"Music" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span className='about__parent--children'>"Coder" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span className='about__parent--children'>"Anime" </span>&#58;
              <span className='about__children'>"^5.0.0"</span>&#44;
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
