import logo from "../desktop/assets/logo.png"


export const MenuMobile = () => {
  return (
    <header className="w-full bg-amarelo-primario px-2 py-2 flex justify-between items-center lg:hidden">
        <div id="logo">
            <img className="w-16" src={logo} alt="PSVP" />
        </div>
        <ul className="absolute right-2 top-20 bg-cinza-primario">
            <li><a className="px-4 py-2 inline-block bg-amarelo-secundario border-b border-amarelo-primario text-white text-center w-full hover:bg-amarelo-primario" href="#">Igreja</a></li>
            <li><a className="px-4 py-2 inline-block bg-amarelo-secundario border-b border-amarelo-primario text-white text-center w-full hover:bg-amarelo-primario" href="#">Doações</a></li>
            <li><a className="px-4 py-2 inline-block bg-amarelo-secundario border-b border-amarelo-primario text-white text-center w-full hover:bg-amarelo-primario" href="#">Calendário</a></li>
            <li><a className="px-4 py-2 inline-block bg-amarelo-secundario border-b border-amarelo-primario text-white text-center w-full hover:bg-amarelo-primario" href="#">Contato</a></li>
        </ul>
    </header>
  )
}
