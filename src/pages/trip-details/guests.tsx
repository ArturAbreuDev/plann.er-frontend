import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

interface GuestsProps {
  openConfirmTripModal: () => void;
}

export function Guests({ openConfirmTripModal }: GuestsProps) {
  return (
    <div className="space-y-6">
    <h3 className="text-base text-zinc-50 font-semibold">Convidados</h3>
    <div className="flex justify-between gap-4 items-center">
      <div className="flex flex-col">
        <p className="text-zinc-100 font-medium text-base">Jessica White</p>
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
        <p className="text-zinc-100 font-medium text-base">Artur Damaceno</p>
        <a
          href="#"
          className="truncate text-xs text-zinc-400 hover:text-zinc-100"
        >
          arturabreu100@gmail.com
        </a>
      </div>
      <CircleDashed className="size-5 text-zinc-400 shrink-0" />
    </div>
    <Button
      type="button"
      onClick={openConfirmTripModal}
      variant="secondary"
      size="full"
    >
      <UserCog className="size-5 text-zinc-200" />
      Gerenciar convidados
    </Button>
  </div>
  );
}
