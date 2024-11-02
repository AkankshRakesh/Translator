import logo from "../assets/logo.png"
export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-2">
          <img className="w-10" src={logo}/>
          <a href="/"><h1 className="font-semibold">Audio<span className="text-blue-400 bold ">Bridge</span></h1></a>
          </div>
          <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-blue-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
        </header>
  )
}
