import { useReducer } from 'react'
import './ContactSection.sass'
import { useTranslation } from 'react-i18next'
import IState from '../../types/IState'

interface IProps {
  state: IState
  dispatch: React.Dispatch<IState>
}

interface FormStateProps {
  firstName: string
  lastName: string
  email: string
  message: string
  firstNameError: boolean
  lastNameError: boolean
  emailError: boolean
  messageError: boolean
}

const ContactSection = ({ state, dispatch }: IProps) => {
  const { t } = useTranslation()

  const initialState: FormStateProps = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    messageError: false,
  }

  const [formState, updateFormState] = useReducer(
    (prevState: FormStateProps, updatedState: FormStateProps) => {
      return { ...prevState, ...updatedState }
    },
    initialState
  )

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formState.firstName === '') {
      updateFormState({ ...formState, firstNameError: true })
      return
    }
    if (formState.lastName === '') {
      updateFormState({ ...formState, lastNameError: true })
      return
    }
    if (formState.email === '') {
      updateFormState({ ...formState, emailError: true })
      return
    }
    if (formState.message === '') {
      updateFormState({ ...formState, messageError: true })
      return
    }

    dispatch({
      isOpen: true,
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      message: formState.message,
    })
  }

  return (
    <section className='contact'>
      <h1 className='contact__title'>{t('form.title')}</h1>
      <form className='contact__form' onSubmit={submitHandler}>
        <div className='contact__row'>
          <label htmlFor='firstname' className='contact__label'>
            {t('form.firstName')}
          </label>
          <div className='contact__input-row'>
            <input
              type='text'
              id='firstname'
              name='firstname'
              className='contact__input'
              value={formState.firstName}
              onChange={(e) =>
                updateFormState({ ...formState, firstName: e.target.value })
              }
            />
            {formState.firstNameError && (
              <p className='contact__error'>{t('form.firstNameError')}</p>
            )}
          </div>
        </div>
        <div className='contact__row'>
          <label htmlFor='lastname' className='contact__label'>
            {t('form.lastName')}
          </label>
          <div className='contact__input-row'>
            <input
              type='text'
              id='lastname'
              name='lastname'
              className='contact__input'
              value={formState.lastName}
              onChange={(e) =>
                updateFormState({ ...formState, lastName: e.target.value })
              }
            />
            {formState.lastNameError && (
              <p className='contact__error'>{t('form.lastNameError')}</p>
            )}
          </div>
        </div>
        <div className='contact__row'>
          <label htmlFor='email' className='contact__label'>
            {t('form.email')}
          </label>
          <div className='contact__input-row'>
            <input
              type='text'
              id='email'
              name='email'
              className='contact__input'
              value={formState.email}
              onChange={(e) =>
                updateFormState({ ...formState, email: e.target.value })
              }
            />
            {formState.emailError && (
              <p className='contact__error'>{t('form.emailError')}</p>
            )}
          </div>
        </div>
        <div className='contact__row'>
          <label htmlFor='message' className='contact__label'>
            {t('form.message')}
          </label>
          <div className='contact__input-row'>
            <textarea
              id='message'
              name='message'
              className='contact__area'
              value={formState.message}
              onChange={(e) =>
                updateFormState({ ...formState, message: e.target.value })
              }
            />
            {formState.messageError && (
              <p className='contact__error'>{t('form.messageError')}</p>
            )}
          </div>
        </div>
        <button type='submit' className='contact__btn'>
          {t('form.submit')}
        </button>
      </form>
    </section>
  )
}

export default ContactSection
