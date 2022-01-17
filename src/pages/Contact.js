import React from 'react'
import './contact.scss'
import '../i18n'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <>
      <section>
        <span className='heading'>{t('page.contact')}</span>
        <div className='contact' id='contact'>
          <div className='contact__box'>
            <div className='contact__left'>
              <h2 className='contact__heading'>{t('page.contact')}</h2>
              <form className='form'>
                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder={t('contact.name')}
                    required
                  />
                  <label for='name' className='form__label'>
                    {t('contact.name')}
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='email'
                    className='form__input'
                    placeholder={t('contact.email')}
                    required
                  />
                  <label for='email' className='form__label'>
                    {t('contact.email')}
                  </label>
                </div>
                <div className='form__group'>
                  <textarea
                    className='form__input form__smg'
                    placeholder={t('contact.message')}
                    required
                  />
                  <label for='email' className='form__label'>
                    {t('contact.message')}
                  </label>
                </div>

                <div className='form__group'>
                  <button className='card__btn form__btn'>
                    {t('contact.send')} &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
