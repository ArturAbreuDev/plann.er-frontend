import {MapPin, Calendar, ArrowRight} from 'lucide-react'

export function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>

        <div className="flex items-center bg-zinc-900 rounded-xl h-16 px-4 shadow-shape">
          <div className='flex items-center gap-2 flex-1'>
          <MapPin className='size-5 text-zinc-400'/>
          <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-text-zinc-400" />
          </div>
          <div className='flex items-center gap-2'>
          <Calendar className='size-5 text-zinc-400'/>
          <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-text-zinc-400" />
          </div>
          <button className='px-5 py-2 flex justify-center items-center gap-2 bg-lime-300 rounded-lg text-lime-950 font-medium hover:bg-lime-400'>
            Continuar
              <ArrowRight className='size-5 text-lime-950'/>
          </button>
        </div>

        <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a className="text-zinc-300 text-sm underline" href="">termos de uso</a> e <a className="text-zinc-300 text-sm underline" href="">políticas de privacidade.</a></p>
      </div>
    </div>
  );
}
