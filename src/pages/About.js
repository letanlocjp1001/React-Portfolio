import React from 'react'
import Tilt from 'react-parallax-tilt'
import './About.scss'
import AboutImg from '../img/about.jpg'

function About() {
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
                  <h2>About me</h2>
                  <p>
                    私はチームワークを大切にすることです。大学時代に様々な活動に参加しました。その活動の中で、問題に直面した時、自分一人で解決しようとするのではなく、必ず仲間と相談し、一緒に解決してきました。そうする事で、より良い判断が出来ましたし、仲間との絆も深めること出来ました。
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
          <div className='about__right'>
            <pre>
              <span className='about__icon'>
                &#123; <br />
              </span>
              <span className='about__parent'>"author"</span>&#58;
              <span className='about__children'>"Le Tan Loc"</span>&#44;
              <br />
              <span className='about__parent'>"birthday" </span>&#58;
              <span className='about__children'>"1994/01/10"</span>&#44;
              <br />
              <span className='about__parent'>"country" </span>&#58;
              <span className='about__children'>"VietNam"</span>&#44;
              <br />
              <span className='about__parent'>"description"</span>&#58;
              <span className='about__children'>"ECC Computer 専門学校"</span>
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
              <span className='about__parent'>"資格" </span>&#58;
              <span className='about__children'>"日本語能力試験 N2 合格"</span>
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
        <span className='heading'>about</span>
      </section>
    </>
  )
}

export default About
