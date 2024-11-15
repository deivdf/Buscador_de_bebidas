import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Recipe } from '../types/type';

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const recetas = useAppStore((state)=> state.selectedRecipe)
  const cerrar = useAppStore((state) => state.closeModal)
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite)
  const renderIngredients = () =>{
    const ingredientes : JSX.Element[] = []
    for (let i = 1; i<6 ; i++) {
      const Ingrediente = recetas[`strIngredient${i}` as keyof Recipe]
      const Measure = recetas[`strMeasure${i}` as keyof Recipe]
      if(Ingrediente && Measure){
        ingredientes.push(
          <li key={i} className="text-lg font-normal">
            {Ingrediente} - {Measure}
          </li>
        )
      }
    }
    return ingredientes
  }
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg px-4 pt-5 pb-4 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-white text-4xl font-extrabold my-5 text-center">
                    <img className="w-48 mx-auto" src={recetas.strDrinkThumb} alt="imagen de bebida" />
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-4xl font-extrabold my-5 text-center">
                      <p>{recetas.strDrink}</p>
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-extrabold my-5">
                    <p>Ingredientes: {renderIngredients()}</p>
                  </Dialog.Title>
                  <Dialog.Title as="h3" className="text-white text-2xl font-extrabold my-5">
                    <p>Instrucciones: {recetas.strInstructionsES}</p>
                  </Dialog.Title>
                  <div className="gap-4 mt-5 flex justify-between">
                      <button
                        type='button'
                        className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full'
                        onClick={cerrar}
                      >
                        Cerrar
                      </button>
                      <button
                        type='button'
                        className='bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg w-full'
                        onClick={()=> handleClickFavorite(recetas)}
                      >
                        Favorito
                      </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}