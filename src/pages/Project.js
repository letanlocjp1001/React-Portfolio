import React from 'react'
import Tilt from 'react-parallax-tilt'
import * as FaIcons from 'react-icons/fa'
import { SiPug } from 'react-icons/si'
import './project.scss'
import { useTranslation } from 'react-i18next'
// import data from '../data/dataproject'
import Project1 from '../img/project1.svg'
import Project2 from '../img/project2.svg'
import Project3 from '../img/logo-img.png'
import Project4 from '../img/logo-green-2x.png'
import Project5 from '../img/project5.png'
import Project6 from '../img/project6.png'
import '../i18n'

const Project = () => {
  const { t } = useTranslation()
  return (
    <section>
      <div className='project'>
        <div className='project__margin'>
          <Tilt>
            <div className='project__card'>
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
                  target='_blank'
                  rel='noreferrer'
                >
                  {t('page.project')}
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        <div className='project__margin'>
          <Tilt>
            <div className='project__card'>
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
                  target='_blank'
                  rel='noreferrer'
                >
                  {t('page.project')}
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        <div className='project__margin'>
          <Tilt>
            <div className='project__card'>
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
                  target='_blank'
                  rel='noreferrer'
                >
                  {t('page.project')}
                </a>
              </div>
            </div>
          </Tilt>
        </div>

        <div className='project__margin'>
          <Tilt>
            <div className='project__card'>
              <div className='card__img'>
                <img src={Project4} alt='Natours' />
              </div>
              <div className='card__body'>
                <div className='card__title'>Natours</div>
                <div className='card__details'>
                  Natoursとはあなたの旅行の目的や行き先に合わせて、宿泊を含めた国内観光のプランを旅色コンシェルジュが
                  無料でご提案いたします。
                  また、ご希望に応じて紹介した旅館・ホテルの予約代行をいたします。おすすめスポットやグルメ情報のみの紹介も可能です。
                </div>
                <div className='card__language'>
                  <span className='html5'>
                    <FaIcons.FaHtml5 />
                  </span>
                  <span className='scss'>
                    <FaIcons.FaSass />
                  </span>
                </div>
                <a
                  href='http://click.ecc.ac.jp/ecc/letanloc/Natours/'
                  className='card__btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  {t('page.project')}
                </a>
              </div>
            </div>
          </Tilt>
        </div>

        <div className='project__margin'>
          <Tilt>
            <div className='project__card'>
              <div className='card__img'>
                <img src={Project5} alt='Trillo' />
              </div>
              <div className='card__body'>
                <div className='card__title'>Trillo</div>
                <div className='card__details'>
                  Natoursとはあなたの旅行の目的や行き先に合わせて、宿泊を含めた国内観光のプランを旅色コンシェルジュが
                  無料でご提案いたします。
                  また、ご希望に応じて紹介した旅館・ホテルの予約代行をいたします。おすすめスポットやグルメ情報のみの紹介も可能です。
                </div>
                <div className='card__language'>
                  <span className='pug'>
                    <SiPug />
                  </span>
                  <span className='gulp'>
                    <FaIcons.FaGulp />
                  </span>
                  <span className='scss'>
                    <FaIcons.FaSass />
                  </span>
                </div>
                <a
                  href='http://click.ecc.ac.jp/ecc/letanloc/Trillo/'
                  className='card__btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  {t('page.project')}
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        <div className='project__margin'>
          <Tilt>
            <div className='project__card'>
              <div className='card__img'>
                <img src={Project6} alt='Trillo' />
              </div>
              <div className='card__body'>
                <div className='card__title'>Trillo</div>
                <div className='card__details'>
                  Natoursとはあなたの旅行の目的や行き先に合わせて、宿泊を含めた国内観光のプランを旅色コンシェルジュが
                  無料でご提案いたします。
                  また、ご希望に応じて紹介した旅館・ホテルの予約代行をいたします。おすすめスポットやグルメ情報のみの紹介も可能です。
                </div>
                <div className='card__language'>
                  <span className='pug'>
                    <SiPug />
                  </span>
                  <span className='gulp'>
                    <FaIcons.FaGulp />
                  </span>
                  <span className='scss'>
                    <FaIcons.FaSass />
                  </span>
                </div>
                <a
                  href='http://click.ecc.ac.jp/ecc/letanloc/Trillo/'
                  className='card__btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  {t('page.project')}
                </a>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
      <span className='heading'>{t('page.project')}</span>
    </section>
  )
}

export default Project
