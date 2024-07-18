import { CircleCheck, CircleDashed } from "lucide-react";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <h4 className="text-xl font-semibold text-zinc-300">Dia 17</h4>
          <span className="text-zinc-500 text-xs">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>
      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <h4 className="text-xl font-semibold text-zinc-300">Dia 18</h4>
          <span className="text-zinc-500 text-xs">Domingo</span>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl bg-zinc-900 h-10 w-full flex items-center gap-2 px-4 ">
            <CircleCheck className="text-lime-300 size-5" />
            <span className="text-zinc-100 text-base">Corrida de Kart</span>
            <p className="text-zinc-400 text-sm ml-auto">14:00h</p>
          </div>
          <div className="rounded-xl bg-zinc-900 h-10 w-full flex items-center gap-2 px-4 ">
            <CircleDashed className="text-zinc-400 size-5" />
            <span className="text-zinc-100 text-base">Gaming session</span>
            <p className="text-zinc-400 text-sm ml-auto">14:00h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
