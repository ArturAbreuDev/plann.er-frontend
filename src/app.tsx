import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
  User,
  Mail,
} from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isTripConfirmModalOpen, setIsTripConfirmModalOpen] = useState(false);
  const [invitesTripsEmail, setInvitesTripsEmail] = useState([]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsTripConfirmModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsTripConfirmModalOpen(false);
  }

  function createInvitesEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    setInvitesTripsEmail([...invitesTripsEmail, email]);

    event.currentTarget.reset();
  }

  function deleteEmailInvites(emailToRemove: string) {
    const newEmailList = invitesTripsEmail.filter(
      (email) => email !== emailToRemove
    );

    setInvitesTripsEmail(newEmailList);
  }

  return (
    <div className="h-screen flex justify-center items-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-2">
          <img src="/logo.svg" alt="" />
          <p className="text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <main className="space-y-4">
          <div className="flex items-center bg-zinc-900 rounded-xl h-16 px-4 shadow-shape">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-text-zinc-400 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-text-zinc-400 outline-none"
              />
            </div>
            <div className="w-px h-6 bg-zinc-800" />
            {isGuestsInputOpen ? (
              <button
                type="button"
                onClick={closeGuestInput}
                className="px-5 py-2 flex justify-center items-center gap-2 bg-zinc-800 rounded-lg text-zinc-200 font-medium hover:bg-zinc-700 transition-colors"
              >
                Alterar local/data
                <Settings2 className="size-5 text-zinc-200" />
              </button>
            ) : (
              <button
                type="button"
                onClick={openGuestsInput}
                className="px-5 py-2 flex justify-center items-center gap-2 bg-lime-300 rounded-lg text-lime-950 font-medium hover:bg-lime-400 transition-colors"
              >
                Continuar
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="flex items-center bg-zinc-900 rounded-xl h-16 px-4 shadow-shape">
              <div className="flex items-center gap-2 flex-1">
                <button
                  className="flex items-center text-left gap-2"
                  type="button"
                  onClick={openGuestsModal}
                >
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  {invitesTripsEmail.length > 0 ? (
                     <p className="text-lg text-zinc-100">
                      {invitesTripsEmail.length} pessoa(s) convidada(s)
                    </p>
                  ) : (
                    <p className="text-lg text-zinc-400">
                    Quem estará na viagem?
                  </p>
                  )}
                </button>
              </div>
              <div className="w-px h-6 bg-zinc-800" />
              <button
                type="button"
                onClick={openConfirmTripModal}
                className="px-5 py-2 flex justify-center items-center gap-2 bg-lime-300 rounded-lg text-lime-950 font-medium hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          )}
        </main>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 text-sm underline" href="">
            termos de uso
          </a>{" "}
          e
          <a className="text-zinc-300 text-sm underline" href="">
            {" "}
            políticas de privacidade.
          </a>
        </p>

        {isGuestsModalOpen && (
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
                  Os convidados irão receber e-mails para confirmar a
                  participação na viagem.
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
                <button
                  type="submit"
                  className="px-5 py-2 flex justify-center items-center gap-2 bg-lime-300 rounded-lg text-lime-950 font-medium hover:bg-lime-400"
                >
                  Convidar
                  <Plus className="size-5 text-lime-950" />
                </button>
              </form>
            </div>
          </div>
        )}

        {isTripConfirmModalOpen && (
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

              <form
                onSubmit={createInvitesEmail}
                className="flex flex-col w-full gap-3"
              >
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
        )}
      </div>
    </div>
  );
}
