import React from 'react'
import './About.scss'
import AboutImg from '../img/about.jpg'

function About() {
  return (
    <>
      <section className='about' id='about'>
        <h1 className='heading-1'>about.</h1>
        <div className='about__position'>
          <div className='about__left'>
            <div className='about__img'>
              <figure className='about__shape'>
                <img src={AboutImg} alt='about' className='about__photo' />
                <figcaption className='about__name'>Le Tan Loc</figcaption>
              </figure>
            </div>
          </div>
          <div class='about__right'>
            <pre>
              <span class='about__icon'>
                &#123; <br />
              </span>
              <span class='about__parent'>"author"</span>&#58;
              <span class='about__children'>"Le Tan Loc"</span>&#44;
              <br />
              <span class='about__parent'>"birthday" </span>&#58;
              <span class='about__children'>"1994/01/10"</span>&#44;
              <br />
              <span class='about__parent'>"country" </span>&#58;
              <span class='about__children'>"VietNam"</span>&#44;
              <br />
              <span class='about__parent'>"description"</span>&#58;
              <span class='about__children'>"ECC Computer 専門学校"</span>&#44;
              <br />
              <span class='about__parent'>"repository" </span>&#58; &#123;{' '}
              <br />
              <span class='about__parent'>"url" </span>&#58;
              <span class='about__children'>"github.com/letanlocjp1001"</span>
              &#44;
              <br />
              <span class='about__parent'>"type" </span>&#58;
              <span class='about__children'>"github.com/letanlocjp1001"</span>
              &#44;
              <br />
              <span class='about__parent'>"engines" </span>&#58; &#91; <br />
              <span class='about__children about__children--chil'>"HTML"</span>
              &#44;
              <br />
              <span class='about__children about__children--chil'>"CSS"</span>
              &#44;
              <br />
              <span class='about__children about__children--chil'>
                "JavaScript"
              </span>
              &#44;
              <br />
              <span class='about__children about__children--chil'>
                "Photoshop"
              </span>
              &#44;
              <br />
              <span class='about__children about__children--chil'>
                "Illustrator"
              </span>
              &#44;
              <br />
              <span class='about__children about__children--chil'>"Figma"</span>
              &#44;
              <br />
              <span class='about__children about__children--chil'>"XD"</span>
              &#44;
              <br />
              <span class='about__parent'> </span>]&#44; <br />
              <span class='about__parent'>"dependencies" </span>&#58; &#123;{' '}
              <br />
              <span class='about__parent--children'>"ReactJs" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent--children'>"NodeJs" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent--children'>"A-Frame" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent--children'>"SCSS" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent--children'>"Pug" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent'> </span>&#125;&#44; <br />
              <span class='about__parent'>
                devDependencies&#58;{' '}
              </span>&#123; <br />
              <span class='about__parent--children'>"Game" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent--children'>"Music" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent--children'>"Coder" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent--children'>"Anime" </span>&#58;
              <span class='about__children'>"^5.0.0"</span>&#44;
              <br />
              <span class='about__parent'> </span>&#125; <br />
              <span class='about__icon'>&#125;</span>
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
