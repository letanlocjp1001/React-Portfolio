import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <>
      <span className='heading'>Contact</span>
      <section>
        <div className='contact'>
          <div className='contact__box'>
            <div className='contact__left'>
              <h2 className='contact__heading'>Contact Us</h2>
              <form className='form'>
                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='Full name'
                    required
                  />
                  <label for='name' className='form__label'>
                    Full name
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='email'
                    className='form__input'
                    placeholder='Email address'
                    required
                  />
                  <label for='email' className='form__label'>
                    Email address
                  </label>
                </div>
                <div className='form__group'>
                  <textarea
                    className='form__input form__smg'
                    placeholder='Message'
                    required
                  />
                  <label for='email' className='form__label'>
                    Message
                  </label>
                </div>

                <div className='form__group'>
                  <button className='card__btn form__btn'>Send &rarr;</button>
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
