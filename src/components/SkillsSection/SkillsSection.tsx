import './SkillsSection.sass'
import { useTranslation } from 'react-i18next'
import skillsData from './skillsData'

const SkillsSection = () => {
  const { t } = useTranslation()

  return (
    <section className='skills'>
      <h1 className='skills__title'>{t('skills.title')}</h1>
      <div className='skills__container'>
        {skillsData.map(({ id, name, icon: Icon }) => (
          <div key={id} className='skills__item'>
            <Icon className='skills__icon' />
            <h3 className='skills__name'>{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
