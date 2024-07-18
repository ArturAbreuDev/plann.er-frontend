import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps {
  openCreateLinksModal: () => void;
}

export function ImportantLinks({ openCreateLinksModal }: ImportantLinksProps) {
  return (
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
      <Button
        type="submit"
        onClick={openCreateLinksModal}
        variant="secondary"
        size="full"
      >
        <Plus className="size-5 text-zinc-200" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
