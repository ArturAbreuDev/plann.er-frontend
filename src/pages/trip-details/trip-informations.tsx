import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function TripInformations() {
  return (
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
        <Button type="button" variant="secondary">
          Alterar local/data
          <Settings2 className="size-5 text-zinc-200" />
        </Button>
      </div>
    </div>
  );
}
