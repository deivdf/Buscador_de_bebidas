import {Link} from 'react-router-dom'
export default function Headers() {
  return (
    <header className="bg-slate-800">
        <div className="mx-auto container px-5 py-16">
            <div className="flex items-center justify-between">
              <div>
                <img className="w-32" src="logo.svg" alt="logotipo" />
              </div>
              <nav>
                <Link className="text-white hover:text-orange-500 font-bold px-4" to="/">Home</Link>
                <Link className="text-white hover:text-orange-500 font-bold px-4" to="/Favorite">Favorite</Link>
              </nav>
            </div>
        </div>
    </header>
  )
}
