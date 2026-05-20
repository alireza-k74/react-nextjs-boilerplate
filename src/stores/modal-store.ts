import { create } from "zustand";
import type { ReactNode } from "react";

export type ModalType = "dialog" | "drawer";

export interface ModalConfig {
  id: string;
  type: ModalType;
  title?: string;
  description?: string;
  content: ReactNode;
  onClose?: () => void;
}

interface ModalStore {
  modals: ModalConfig[];
  openModal: (config: Omit<ModalConfig, "id"> & { id?: string }) => string;
  closeModal: (id: string) => void;
  closeAll: () => void;
}

let modalCounter = 0;

export const useModalStore = create<ModalStore>((set, get) => ({
  modals: [],
  openModal: (config) => {
    const id = config.id ?? `modal-${++modalCounter}`;
    set({ modals: [...get().modals, { ...config, id }] });
    return id;
  },
  closeModal: (id) => {
    const modal = get().modals.find((m) => m.id === id);
    modal?.onClose?.();
    set({ modals: get().modals.filter((m) => m.id !== id) });
  },
  closeAll: () => set({ modals: [] }),
}));
