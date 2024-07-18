import { X, Mail, Tag, Calendar } from "lucide-react";

interface CreateActivityProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivity({
  closeCreateActivityModal,
}: CreateActivityProps) {
  return (
    <div className="inset-0 fixed flex flex-col items-center justify-center bg-black/60">
      <div className="w-[640px] bg-zinc-900 shadow-shape rounded-xl px-6 py-5 text-left gap-5 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="text-white text-[18px] font-semibold">
              Cadastrar atividade
            </h2>
            <X
              onClick={closeCreateActivityModal}
              className="size-5 text-zinc-400 cursor-pointer"
            />
          </div>
          <span className="text-[14px] text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </span>
        </div>

        <form className="flex flex-col w-full gap-3">
          <div className=" flex-1 px-4 py-2.5 justify-between gap-3 items-center flex bg-zinc-950 rounded-md">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-text-zinc-400 outline-none w-full"
            />
          </div>
          <div className=" flex-1 px-4 py-2.5 justify-between gap-3 items-center flex bg-zinc-950 rounded-md">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-text-zinc-400 outline-none w-full"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 flex justify-center items-center gap-2 bg-lime-300 rounded-lg text-lime-950 font-medium hover:bg-lime-400"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  );
}
