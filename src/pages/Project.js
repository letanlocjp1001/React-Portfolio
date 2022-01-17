import React from 'react'
import Tilt from 'react-parallax-tilt'
import * as FaIcons from 'react-icons/fa'
import './project.scss'
import { useTranslation } from 'react-i18next'
// import data from '../data/dataproject'
import Project1 from '../img/project1.svg'
import Project2 from '../img/logo.png'
import Project3 from '../img/logo-img.png'
import '../i18n'

const Project = () => {
  const { t } = useTranslation()
  return (
    <section>
      <div className='project'>
        <Tilt className='project__card'>
          <div>
            <div className='card__img'>
              <img src={Project1} alt='Moment × Memory' />
            </div>
            <div className='card__body'>
              <div className='card__title'>Moment × Memory</div>
              <div className='card__details'>
                moment × memoryは パーティを行う人たち(主催者)と
                パーティを盛り上げる人たち(パフォーマー)を
                マッチングさせるサービスになっています。
                主に結婚式、社内パーティを
                予定されている方は是非ともご利用ください
              </div>
              <div className='card__language'>
                <span className='html5'>
                  <FaIcons.FaHtml5 />
                </span>
                <span className='css3'>
                  <FaIcons.FaCss3 />
                </span>
                <span className='js'>
                  <FaIcons.FaJs />
                </span>
              </div>
              <a
                href='http://click.ecc.ac.jp/ecc/letanloc/Portfolio/work/Project_01/MomentMemorie/'
                className='card__btn'
              >
                {t('page.project')}
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt className='project__card'>
          <div>
            <div className='card__img'>
              <img src={Project2} alt='Portfolio' />
            </div>
            <div className='card__body'>
              <div className='card__title'>Portfolio</div>
              <div className='card__details'>
                リアクトでポートフォリオを作成して、フロントエンドエンジニアを志望していますので、アニメーションよくやっています。言語も変更できます。
              </div>
              <div className='card__language'>
                <span className='react'>
                  <FaIcons.FaReact />
                </span>
                <span className='scss'>
                  <FaIcons.FaSass />
                </span>
              </div>
              <a
                href='https://letanlocportfolio.netlify.app/'
                className='card__btn'
              >
                {t('page.project')}
              </a>
            </div>
          </div>
        </Tilt>
        <Tilt className='project__card'>
          <div>
            <div className='card__img'>
              <img src={Project3} alt='Restaurant' />
            </div>
            <div className='card__body'>
              <div className='card__title'>Restaurant</div>
              <div className='card__details'>
                一年生の時、HTML, CSS,Js
                の知識を習得するのためにRestaurantを作成しました。
                レスポンシブも初めてやっていました。パソコン以外スマートフォンかアイパットを見えます。
              </div>
              <div className='card__language'>
                <span className='html5'>
                  <FaIcons.FaHtml5 />
                </span>
                <span className='css3'>
                  <FaIcons.FaCss3 />
                </span>
                <span className='js'>
                  <FaIcons.FaJs />
                </span>
              </div>
              <a
                href='http://click.ecc.ac.jp/ecc/letanloc/Portfolio/work/Project_05/Restaurant/'
                className='card__btn'
              >
                {t('page.project')}
              </a>
            </div>
          </div>
        </Tilt>
      </div>
      <span className='heading'>{t('page.project')}</span>
    </section>
  )
}

export default Project
