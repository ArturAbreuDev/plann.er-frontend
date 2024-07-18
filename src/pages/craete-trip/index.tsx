import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { TripsConfirmModal } from "./trips-confirm-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isTripConfirmModalOpen, setIsTripConfirmModalOpen] = useState(false);
  const [invitesTripsEmail, setInvitesTripsEmail] = useState<string[]>([]);

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

  function createTrip() {
    navigate("trip/123");
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
          <DestinationAndDateStep
            closeGuestInput={closeGuestInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestsInput={openGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              invitesTripsEmail={invitesTripsEmail}
              openConfirmTripModal={openConfirmTripModal}
              openGuestsModal={openGuestsModal}
            />
          )}
        </main>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 text-sm underline" href="">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 text-sm underline" href="">
            políticas de privacidade.
          </a>
        </p>

        {isGuestsModalOpen && (
          <InviteGuestsModal
            closeGuestModal={closeGuestModal}
            createInvitesEmail={createInvitesEmail}
            deleteEmailInvites={deleteEmailInvites}
            invitesTripsEmail={invitesTripsEmail}
          />
        )}

        {isTripConfirmModalOpen && (
          <TripsConfirmModal
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
          />
        )}
      </div>
    </div>
  );
}
