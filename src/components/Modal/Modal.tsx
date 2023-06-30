import './Modal.sass'
import IState from '../../types/IState'
import { useTranslation } from 'react-i18next'

interface IProps {
  state: IState
  dispatch: React.Dispatch<IState>
}

const Modal = ({ state, dispatch }: IProps) => {
  const { t } = useTranslation()

  return (
    <div className={`modal ${state.isOpen && 'open'}`}>
      <div
        className='modal__backdrop'
        onClick={() => dispatch({ ...state, isOpen: false })}
      ></div>
      {state.isOpen && (
        <div className='modal__content'>
          <div className='modal__data'>
            <p>
              <span>{t('modal.name')}:</span> {state.firstName}
            </p>
            <p>
              <span>{t('modal.lastName')}:</span> {state.lastName}
            </p>
            <p>
              <span>{t('modal.email')}:</span> {state.email}
            </p>
            <p>
              <span>{t('modal.message')}:</span> {state.message}
            </p>
          </div>
          <p className='modal__sent'>{t('modal.sent')}</p>
        </div>
      )}
    </div>
  )
}

export default Modal
