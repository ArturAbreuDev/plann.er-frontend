import { X, User, Mail } from "lucide-react";
import { FormEvent } from "react";

interface TripsConfirmModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function TripsConfirmModal({
  closeConfirmTripModal,
  createTrip,
}: TripsConfirmModalProps) {
  return (
    <div className="inset-0 fixed flex flex-col items-center justify-center bg-black/60">
      <div className="w-[640px] bg-zinc-900 shadow-shape rounded-xl px-6 py-5 text-left gap-5 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="text-white text-[18px] font-semibold">
              Confirmar criação da viagem
            </h2>
            <X
              onClick={closeConfirmTripModal}
              className="size-5 text-zinc-400 cursor-pointer"
            />
          </div>
          <span className="text-[14px] text-zinc-400">
            Para concluir a criação da viagem para
            <strong className="text-white font-semibold">
              {" "}
              Florianópolis, Brasil{" "}
            </strong>
            nas datas{" "}
            <strong className="text-white font-semibold">
              de 16 a 27 de Agosto de 2024
            </strong>{" "}
            preencha seus dados abaixo:
          </span>
        </div>

        <form onSubmit={createTrip} className="flex flex-col w-full gap-3">
          <div className=" flex-1 px-4 py-2.5 justify-between gap-3 items-center flex bg-zinc-950 rounded-md">
            <User className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-text-zinc-400 outline-none w-full"
            />
          </div>
          <div className=" flex-1 px-4 py-2.5 justify-between gap-3 items-center flex bg-zinc-950 rounded-md">
            <Mail className="size-5 text-zinc-400" />
            <input
              type="email"
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
