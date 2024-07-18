import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  closeGuestModal: () => void;
  invitesTripsEmail: string[];
  deleteEmailInvites: (email: string) => void;
  createInvitesEmail: (event: FormEvent<HTMLFormElement>) => void;
}

export function InviteGuestsModal({
  closeGuestModal,
  createInvitesEmail,
  deleteEmailInvites,
  invitesTripsEmail,
}: InviteGuestsModalProps) {
  return (
    <div className="inset-0 fixed flex flex-col items-center justify-center bg-black/60">
      <div className="w-[640px] bg-zinc-900 shadow-shape rounded-xl px-6 py-5 text-left gap-5 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="text-white text-[18px] font-semibold">
              Selecionar convidados
            </h2>
            <X
              onClick={closeGuestModal}
              className="size-5 text-zinc-400 cursor-pointer"
            />
          </div>
          <span className="text-[14px] text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {invitesTripsEmail.map((email) => {
            return (
              <div
                key={email}
                className="px-2.5 py-1.5 flex justify-between items-center text-zinc-300 gap-5 rounded-md bg-zinc-800"
              >
                <p>{email}</p>
                <X
                  className="size-4 cursor-pointer"
                  onClick={() => deleteEmailInvites(email)}
                />
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={createInvitesEmail}
          className="px-4 py-2.5 justify-between gap-5 items-center flex bg-zinc-950 rounded-md"
        >
          <div className="flex gap-3 items-center flex-1">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-text-zinc-400 outline-none w-full"
            />
          </div>
          <Button type="submit">
            Convidar
            <Plus className="size-5 text-lime-950" />
          </Button>
        </form>
      </div>
    </div>
  );
}
