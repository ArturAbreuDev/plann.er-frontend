import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestsInput: () => void;
}

export function DestinationAndDateStep({
  closeGuestInput,
  isGuestsInputOpen,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
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
  );
}
