"use client";

import * as React from "react";
import { useModalStore } from "@/stores";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui";

export function ModalProvider() {
  const modals = useModalStore((state) => state.modals);
  const closeModal = useModalStore((state) => state.closeModal);

  return (
    <>
      {modals.map((modal) => {
        if (modal.type === "drawer") {
          return (
            <Drawer key={modal.id} open onOpenChange={(open) => !open && closeModal(modal.id)}>
              <DrawerContent>
                <DrawerHeader>
                  {modal.title ? <DrawerTitle>{modal.title}</DrawerTitle> : null}
                  {modal.description ? (
                    <DrawerDescription>{modal.description}</DrawerDescription>
                  ) : null}
                </DrawerHeader>
                <div className="p-4">{modal.content}</div>
              </DrawerContent>
            </Drawer>
          );
        }

        return (
          <Dialog key={modal.id} open onOpenChange={(open) => !open && closeModal(modal.id)}>
            <DialogContent>
              <DialogHeader>
                {modal.title ? <DialogTitle>{modal.title}</DialogTitle> : null}
                {modal.description ? (
                  <DialogDescription>{modal.description}</DialogDescription>
                ) : null}
              </DialogHeader>
              <div>{modal.content}</div>
            </DialogContent>
          </Dialog>
        );
      })}
    </>
  );
}
