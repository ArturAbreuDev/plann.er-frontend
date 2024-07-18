import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivity } from "./create-activity-modal";
import { CreateLinks } from "./create-links";
import { TripsConfirmModal } from "../craete-trip/trips-confirm-modal";
import { TripInformations } from "./trip-informations";
import { Activities } from "./activities";
import { Guests } from "./guests";
import { ImportantLinks } from "./importants-links";
import { Button } from "../../components/button";

export function TripDetailsPage() {
  const [createActivityModal, setCreateActivityModal] = useState(false);
  const [createLinksModal, setCreateLinksModal] = useState(false);
  const [isTripConfirmModalOpen, setIsTripConfirmModalOpen] = useState(false);

  function openCreateActivityModal() {
    setCreateActivityModal(true);
  }

  function closeCreateActivityModal() {
    setCreateActivityModal(false);
  }

  function openCreateLinksModal() {
    setCreateLinksModal(true);
  }

  function closeCreateLinksModal() {
    setCreateLinksModal(false);
  }

  function openConfirmTripModal() {
    setIsTripConfirmModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsTripConfirmModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <TripInformations />

      <main className="flex justify-between gap-16 px-6">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex justify-between w-full items-center">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button
              type="button"
              onClick={openCreateActivityModal}
            >
              <Plus className="size-5 text-lime-950" />
              Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks openCreateLinksModal={openCreateLinksModal} />
          <div className="w-full h-px bg-zinc-800" />
          <Guests openConfirmTripModal={openConfirmTripModal} />
        </div>
      </main>

      {createActivityModal && (
        <CreateActivity closeCreateActivityModal={closeCreateActivityModal} />
      )}

      {createLinksModal && (
        <CreateLinks closeCreateLinksModal={closeCreateLinksModal} />
      )}

      {isTripConfirmModalOpen && (
        <TripsConfirmModal closeConfirmTripModal={closeConfirmTripModal} />
      )}
    </div>
  );
}
