import { X, Tag, Link2 } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityProps {
  closeCreateLinksModal: () => void;
}

export function CreateLinks({ closeCreateLinksModal }: CreateActivityProps) {
  return (
    <div className="inset-0 fixed flex flex-col items-center justify-center bg-black/60">
      <div className="w-[640px] bg-zinc-900 shadow-shape rounded-xl px-6 py-5 text-left gap-5 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="text-white text-[18px] font-semibold">
              Cadastrar link
            </h2>
            <X
              onClick={closeCreateLinksModal}
              className="size-5 text-zinc-400 cursor-pointer"
            />
          </div>
          <span className="text-[14px] text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </span>
        </div>

        <form className="flex flex-col w-full gap-3">
          <div className=" flex-1 px-4 py-2.5 justify-between gap-3 items-center flex bg-zinc-950 rounded-md">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Título do link"
              className="bg-transparent text-lg placeholder-text-zinc-400 outline-none w-full"
            />
          </div>
          <div className=" flex-1 px-4 py-2.5 justify-between gap-3 items-center flex bg-zinc-950 rounded-md">
            <Link2 className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="email"
              placeholder="URL"
              className="bg-transparent text-lg placeholder-text-zinc-400 outline-none w-full"
            />
          </div>
          <Button type="submit">Salvar atividade</Button>
        </form>
      </div>
    </div>
  );
}
