import {Outlet} from 'react-router-dom'
import Headers from '../components/Headers'
export default function Layouts() {
  return (
    <>
      <Headers />
      <main className=' container mx-auto py-16'>
        <Outlet />
      </main>
    </>
  )
}
