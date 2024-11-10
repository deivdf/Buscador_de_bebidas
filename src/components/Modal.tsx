import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../store/useAppStore';

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const recetas = useAppStore((state)=> state.selectedRecipe)
  const cerrar = useAppStore((state) => state.closeModal)
  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={cerrar}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-white text-4xl font-extrabold my-5 text-center">
                    <img className="w-48 mx-auto" src={recetas.strDrinkThumb} alt="imagen de bebida" />
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-4xl font-extrabold my-5 text-center">
                      {recetas.strDrink}
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-extrabold my-5">
                    Cantidades: {recetas.strIngredient1} {recetas.strMeasure1} {recetas.strIngredient2} {recetas.strMeasure2} {recetas.strIngredient3} {recetas.strMeasure3} {recetas.strIngredient4} {recetas.strMeasure4} {recetas.strIngredient5} {recetas.strMeasure5} {recetas.strIngredient6} {recetas.strMeasure6}
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-extrabold my-5">
                    Instruccione: {recetas.strInstructionsES}
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}