import './HeroSection.sass'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import heroImg from '../../assets/hero.png'
import { useTranslation } from 'react-i18next'

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className='hero'>
      <div className='hero__content'>
        <h1 className='hero__title'>{t('hero.title')}</h1>
        <p className='hero__desc'>{t('hero.desc')}</p>
        <div className='hero__socials'>
          <a
            href='https://www.linkedin.com/in/vanjadulikravic/'
            target='_blank'
            rel='noreferrer'
          >
            <FiLinkedin className='hero__social' />
          </a>
          <a href='https://github.com/vanjadu' target='_blank' rel='noreferrer'>
            <FiGithub className='hero__social' />
          </a>
        </div>
      </div>
      <div className='hero__img-cont'>
        <img src={heroImg} alt='hero' className='hero__img' />
      </div>
    </section>
  )
}

export default HeroSection
