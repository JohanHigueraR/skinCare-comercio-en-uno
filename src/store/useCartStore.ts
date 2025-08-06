import { create } from "zustand";
import { devtools } from "zustand/middleware";

type CartProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  products: CartProduct[];
  sidebarOpen: boolean;
  modalOpen: boolean;
  addProduct: (product: Omit<CartProduct, "quantity">, quantity?: number) => void;
  removeProduct: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  setSidebarOpen: (open: boolean) => void;
  setModalOpen: (open: boolean) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  devtools((set) => ({
    products: [],
    sidebarOpen: false,
    modalOpen: false,
    addProduct: (product, quantity = 1) =>
      set(
        (state) => {
          const exists = state.products.find((p) => p.id === product.id);
          if (exists) {
            return {
              products: state.products.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
              ),
            };
          }
          return {
            products: [...state.products, { ...product, quantity }],
          };
        },
        false,
        "cart/addProduct"
      ),
    removeProduct: (id) =>
      set(
        (state) => ({
          products: state.products.filter((p) => p.id !== id),
        }),
        false,
        "cart/removeProduct"
      ),
    setQuantity: (id, quantity) =>
      set(
        (state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, quantity } : p
          ),
        }),
        false,
        "cart/setQuantity"
      ),
    setSidebarOpen: (open) =>
      set(() => ({ sidebarOpen: open }), false, "cart/setSidebarOpen"),
    setModalOpen: (open) =>
      set(() => ({ modalOpen: open }), false, "cart/setModalOpen"),
    clearCart: () => set(() => ({ products: [] }), false, "cart/clearCart"),
  }))
);
