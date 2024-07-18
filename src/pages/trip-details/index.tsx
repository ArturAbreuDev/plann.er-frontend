import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  UserCog,
} from "lucide-react";
import { useState } from "react";
import { CreateActivity } from "./create-activity-modal";

export function TripDetailsPage() {
  const [createActivityModal, setCreateActivityModal] = useState(false);

  function openCreateActivityModal() {
    setCreateActivityModal(true);
  }

  function closeCreateActivityModal() {
    setCreateActivityModal(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 flex justify-between items-center shadow-shape rounded-xl bg-zinc-900">
        <div className="flex items-center gap-2 ml-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100 text-lg">Florianópolis, Brasil</span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-2 ml-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100 text-lg">17 a 23 de Agosto</span>
          </div>
          <div className="w-px h-6 bg-zinc-800" />
          <button
            type="button"
            className="px-5 py-2 flex justify-center items-center gap-2 bg-zinc-800 rounded-lg text-zinc-200 font-medium hover:bg-zinc-700 transition-colors"
          >
            Alterar local/data
            <Settings2 className="size-5 text-zinc-200" />
          </button>
        </div>
      </div>

      <main className="flex justify-between gap-16 px-6">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              type="button"
              onClick={openCreateActivityModal}
              className="px-5 py-2 flex justify-center items-center gap-2 bg-lime-300 rounded-lg text-lime-950 font-medium hover:bg-lime-400"
            >
              <Plus className="size-5 text-lime-950" />
              Cadastrar atividade
            </button>
          </div>

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
                  <span className="text-zinc-100 text-base">
                    Corrida de Kart
                  </span>
                  <p className="text-zinc-400 text-sm ml-auto">14:00h</p>
                </div>
                <div className="rounded-xl bg-zinc-900 h-10 w-full flex items-center gap-2 px-4 ">
                  <CircleDashed className="text-zinc-400 size-5" />
                  <span className="text-zinc-100 text-base">
                    Gaming session
                  </span>
                  <p className="text-zinc-400 text-sm ml-auto">14:00h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80">
          <div className="space-y-6">
            <h3 className="text-base text-zinc-50 font-semibold">
              Links importantes
            </h3>
            <div className="flex justify-between gap-4 items-center">
              <div className="flex flex-col">
                <p className="text-zinc-100 font-medium text-base">
                  Reserva do AirBnB
                </p>
                <a
                  href="#"
                  className="truncate text-xs text-zinc-400 hover:text-zinc-100"
                >
                  https://www.airbnb.com.br/rooms/104700011
                </a>
              </div>
              <Link2 className="size-5 text-zinc-400 shrink-0" />
            </div>
            <div className="flex justify-between gap-4 items-center">
              <div className="flex flex-col">
                <p className="text-zinc-100 font-medium text-base">
                  Reserva do AirBnB
                </p>
                <a
                  href="#"
                  className="truncate text-xs text-zinc-400 hover:text-zinc-100"
                >
                  https://www.airbnb.com.br/rooms/104700011
                </a>
              </div>
              <Link2 className="size-5 text-zinc-400 shrink-0" />
            </div>
            <button
              type="submit"
              className="px-5 h-10 w-full flex justify-center items-center gap-2 bg-zinc-800 rounded-lg text-zinc-200 font-medium hover:bg-zinc-700 transition-opacity"
            >
              <Plus className="size-5 text-zinc-200" />
              Cadastrar novo link
            </button>
            <div className="w-full h-px bg-zinc-800" />
            <h3 className="text-base text-zinc-50 font-semibold">Convidados</h3>
            <div className="flex justify-between gap-4 items-center">
              <div className="flex flex-col">
                <p className="text-zinc-100 font-medium text-base">
                  Jessica White
                </p>
                <a
                  href="#"
                  className="truncate text-xs text-zinc-400 hover:text-zinc-100"
                >
                  jessica.white44@yahoo.com
                </a>
              </div>
              <CircleCheck className="size-5 text-lime-300 shrink-0" />
            </div>
            <div className="flex justify-between gap-4 items-center">
              <div className="flex flex-col">
                <p className="text-zinc-100 font-medium text-base">
                  Artur Damaceno
                </p>
                <a
                  href="#"
                  className="truncate text-xs text-zinc-400 hover:text-zinc-100"
                >
                  arturabreu100@gmail.com
                </a>
              </div>
              <CircleDashed className="size-5 text-zinc-400 shrink-0" />
            </div>
            <button
              type="submit"
              className="px-5 h-10 w-full flex justify-center items-center gap-2 bg-zinc-800 rounded-lg text-zinc-200 font-medium hover:bg-zinc-700 transition-opacity"
            >
              <UserCog className="size-5 text-zinc-200" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>

      {createActivityModal && (
        <CreateActivity closeCreateActivityModal={closeCreateActivityModal} />
      )}
    </div>
  );
}
