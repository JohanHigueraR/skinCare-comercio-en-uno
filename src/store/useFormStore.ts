import { create } from "zustand";

type FormData = {
  nombre: string;
  apellido: string;
  whatsapp: string;
  direccion: string;
  departamento: string;
  ciudad: string;
  email: string;
};

type FormState = {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  clearForm: () => void;
};

export const useFormStore = create<FormState>((set) => ({
  formData: {
    nombre: "",
    apellido: "",
    whatsapp: "",
    direccion: "",
    departamento: "",
    ciudad: "",
    email: "",
  },
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  clearForm: () => set(() => ({
    formData: {
      nombre: "",
      apellido: "",
      whatsapp: "",
      direccion: "",
      departamento: "",
      ciudad: "",
      email: "",
    }
  })),
}));
