import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CloseIcon } from '../Icons'

function PopUp({ isOpen, onOpen }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        style={{ position: 'relative', zIndex: 50 }}
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
          <div
            style={
              { position: 'fixed', inset: 0, backgroundColor: '#222', opacity: 0.4 }
            }
            aria-hidden="true"
          />
        </Transition.Child>

        <div
          style={{ position: 'fixed', inset: '10px 0 0 0', display: 'flex', alignItems: 'start', justifyContent: 'center', padding: 4 }}>

          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in-out duration-400"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition-opacity ease-in-out duration-400"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >

            <Dialog.Panel style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#12121c', width: '400px', height: '200px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Dialog.Title></Dialog.Title>
              <Dialog.Description>
                <input style={{ width: '100%', padding: '6px 10px' }} type='search' placeholder='Ej: Madrid...' />
              </Dialog.Description>

              <button onClick={() => onOpen(false)}><CloseIcon /></button>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default PopUp
