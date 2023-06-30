import { useTranslation } from 'react-i18next'
import './ExperienceSection.sass'

const ExperienceSection = () => {
  const { t } = useTranslation()

  return (
    <section className='exp'>
      <h1 className='exp__title'>{t('experience.title')}</h1>
      <div className='exp__container'>
        <div className='exp__item'>
          <p className='exp__item-title'>
            {t('experience.jobs.phoenix.position')} -{' '}
            {t('experience.jobs.phoenix.company')} (
            {t('experience.jobs.phoenix.date')})
          </p>
          <p className='exp__item-description'>
            {t('experience.jobs.phoenix.desc')}
          </p>
        </div>
        <div className='exp__item'>
          <p className='exp__item-title'>
            {t('experience.jobs.bibo.position')} -{' '}
            {t('experience.jobs.bibo.company')} (
            {t('experience.jobs.bibo.date')})
          </p>
          <p className='exp__item-description'>
            {t('experience.jobs.bibo.desc')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
