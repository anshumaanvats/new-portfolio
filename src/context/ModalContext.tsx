'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type ModalItem = {
  id: string; // Used for framer-motion layoutId
  type: 'pdf' | 'video' | 'image';
  url: string;
  title: string;
  rect?: { top: number; left: number; width: number; height: number };
} | null;

interface ModalContextType {
  selectedItem: ModalItem;
  setSelectedItem: (item: ModalItem) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [selectedItem, setSelectedItem] = useState<ModalItem>(null);

  return (
    <ModalContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
