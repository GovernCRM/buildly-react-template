import { create } from 'zustand';

const useStore = create((set) => ({
  data: null,
  showAlert: (data) => {
    set({ data });
  },
  hideAlert: () => {
    set({ data: null });
  },
}));

const useTabStore = create((set) => ({
  activeTab: 'Dashboard', // Default tab
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export { useStore, useTabStore };
