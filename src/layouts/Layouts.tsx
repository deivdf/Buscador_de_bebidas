import {Outlet} from 'react-router-dom'
import Headers from '../components/Headers'
import Modal from '../components/Modal'
export default function Layouts() {
  // este componete es el que se va a mostrar en todas las paginas
  // el outlet es el que va a mostrar el componente que se le pase
  return (
    <>
      <Headers />
      <main className=' container mx-auto py-16'>
        <Outlet />
      </main>
      <Modal/>
    </>
  )
}
