import { UserRoundPlus, ArrowRight } from "lucide-react";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  invitesTripsEmail: string[];
}

export function InviteGuestsStep({
  invitesTripsEmail,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
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
            <p className="text-lg text-zinc-400">Quem estará na viagem?</p>
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
  );
}
