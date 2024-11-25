import {Outlet} from 'react-router-dom'
import {useEffect} from 'react'
import Headers from '../components/Headers'
import Modal from '../components/Modal'
import { useAppStore } from '../store/useAppStore'
import Notification from '../components/Notification'
export default function Layouts() {
  //Se crea una funcion para cargar los datos del local storage
  const loadFromStorage = useAppStore((state)=> state.loadFromStorage)
  // creamos un efecto para que este se ejecute una sola vez cunado se haga un cambion en el state que carga los datos
  useEffect(() => {
    loadFromStorage()
  },[])
  // este componete es el que se va a mostrar en todas las paginas
  // el outlet es el que va a mostrar el componente que se le pase
  return (
    <>
      <Headers />
      <main className=' container mx-auto py-16'>
        <Outlet />
      </main>
      <Modal/>
      <Notification/>
    </>
  )
}
