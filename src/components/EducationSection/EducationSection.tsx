import './EducationSection.sass'
import { useTranslation } from 'react-i18next'

const EducationSection = () => {
  const { t } = useTranslation()

  return (
    <section className='edu'>
      <h1 className='edu__title'>{t('edu.title')}</h1>
      <div className='edu__text'>
        <div className='edu__text--header'>
          <h4 className='edu__text--title'>{t('edu.school')}</h4>
          <p className='edu__text--time'>{t('edu.date')}</p>
        </div>
        <p className='edu__text--desc'>{t('edu.desc')}</p>
      </div>
    </section>
  )
}

export default EducationSection
