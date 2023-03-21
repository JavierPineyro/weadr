import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '../Icons'
import styles from './popup.module.css'

function PopUp({ isOpen, onOpen, viewNavigate }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className={styles.dialog}
        open={isOpen} onClose={() => onOpen(false)}
      >

        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-in-out duration-400"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-opacity ease-in-out duration-400"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* BACKDROP */}
          <div className={styles.backdrop} aria-hidden="true" />
        </Transition.Child>

        <div className={styles.wrapper}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in-out duration-400"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition-opacity ease-in-out duration-400"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className={styles.panel}>
              <Dialog.Title></Dialog.Title>
              <Dialog.Description className={styles.description}>
                <input
                  className={styles.input}
                  type='search'
                  placeholder='Santa Fe...' />
                <button
                  title='cerrar'
                  className={styles.btn}
                  onClick={() => onOpen(false)}>
                  <CloseIcon />
                </button>
              </Dialog.Description>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default PopUp
