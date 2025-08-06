"use client"
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { useFormStore } from "@/store/useFormStore";
import { departamentosConMunicipios } from "@/colombia";
import { formatCOP } from "@/lib/utils";



function ModalCart() {
  const {
    products,
    modalOpen,
    setModalOpen,
    setSidebarOpen,
    setQuantity,
    removeProduct,
    clearCart,
  } = useCartStore();
  const { formData, setFormData, clearForm } = useFormStore();

  // Obtener lista de departamentos y municipios según selección
  const departamentos = departamentosConMunicipios.map((d) => d.departamento);
  const municipios =
    departamentosConMunicipios.find((d) => d.departamento === formData.departamento)?.municipios || [];
  const router = useRouter();

  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="max-w-lg w-full bg-white border border-muted shadow-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-primary text-2xl font-bold tracking-tight mb-1">
            Datos para tu pedido
          </DialogTitle>
          <p className="text-muted-foreground text-sm">
            Completa tus datos y confirma tu compra. ¡Recibe y paga en casa!
          </p>
        </DialogHeader>

        {/* Productos en el carrito */}
        {products.length === 0 ? (
          <div className="text-center text-muted-foreground mt-10">
            No has agregado productos.
          </div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="p-4 rounded-xl bg-muted/20 flex items-center gap-4 shadow border border-muted mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg border-2 border-primary/50"
              />
              <div className="flex-1">
                <div className="font-bold text-primary text-base leading-tight">
                  {product.name}
                </div>
                <div className="text-muted-foreground text-sm font-semibold">
                  {formatCOP(product.price)}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="rounded-full w-8 h-8 text-lg font-bold"
                  onClick={() => setQuantity(product.id, Math.max(1, product.quantity - 1))}
                >
                  -
                </Button>
                <span className="px-3 font-bold text-xl text-primary bg-white rounded shadow border border-primary/30">
                  {product.quantity}
                </span>
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="rounded-full w-8 h-8 text-lg font-bold"
                  onClick={() => setQuantity(product.id, product.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="ml-2 text-destructive hover:bg-destructive/10"
                  onClick={() => removeProduct(product.id)}
                >
                  <span className="text-lg">🗑️</span>
                </Button>
              </div>
            </div>
          ))
        )}

        <form className="space-y-4 mt-2">
          <div className="flex gap-4">
            <Input
              name="nombre"
              placeholder="Nombre"
              required
              value={formData.nombre}
              onChange={e => setFormData({ nombre: e.target.value })}
            />
            <Input
              name="apellido"
              placeholder="Apellido"
              required
              value={formData.apellido}
              onChange={e => setFormData({ apellido: e.target.value })}
            />
          </div>
          <Input
            name="whatsapp"
            placeholder="WhatsApp"
            required
            value={formData.whatsapp}
            onChange={e => setFormData({ whatsapp: e.target.value })}
          />
          <Input
            name="direccion"
            placeholder="Dirección completa"
            required
            value={formData.direccion}
            onChange={e => setFormData({ direccion: e.target.value })}
          />
          <div className="flex gap-4">
            {/* Select avanzado de departamento */}
            <div className="flex-1">
              <Select
                value={formData.departamento}
                onValueChange={value => {
                  setFormData({ departamento: value, ciudad: "" });
                }}
                required
                name="departamento"
                disabled={departamentos.length === 0}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Departamento" />
                </SelectTrigger>
                <SelectContent>
                  {departamentos.map(dep => (
                    <SelectItem key={dep} value={dep}>
                      {dep}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Select avanzado de ciudad/municipio */}
            <div className="flex-1">
              <Select
                value={formData.ciudad}
                onValueChange={value => setFormData({ ciudad: value })}
                required
                name="ciudad"
                disabled={!formData.departamento || municipios.length === 0}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ciudad" />
                </SelectTrigger>
                <SelectContent>
                  {municipios.map(mun => (
                    <SelectItem key={mun} value={mun}>
                      {mun}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            value={formData.email}
            onChange={e => setFormData({ email: e.target.value })}
          />
        </form>

        <div className="mt-6 mb-2 text-center text-xl font-extrabold text-primary tracking-tight">
          Valor a pagar al recibir: {" "}
          <span className=" px-3 py-1 ro">
            {formatCOP(total)}
          </span>
        </div>

        <DialogFooter className="mt-2">
          <DialogClose asChild>
            <Button className="bg-primary cursor-pointer text-white font-bold w-full py-5 text-xl rounded-2xl shadow-lg hover:bg-primary/90"
              onClick={() => {
                setModalOpen(false);
                setSidebarOpen(false);
                clearCart();
                clearForm();
                router.push("/products");
              }}
            >
              Finalizar pedido
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCart;
