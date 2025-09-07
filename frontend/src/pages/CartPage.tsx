import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartTable from "../components/cart/CartTable";
import CouponInput from "../components/cart/CouponInput";
import CartSummary from "../components/cart/CartSummary";
import { getStockByIds } from "../api/stock";

interface CartItem {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
  stock?: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [stockById, setStockById] = useState<Record<string, number>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    const normalizedCart = storedCart.map((item) => {
      const rawPrice = item.price as unknown;
      const price =
        typeof rawPrice === "string"
          ? parseFloat(rawPrice.replace(/[^\d.,]/g, "").replace(",", ".")) || 0
          : typeof rawPrice === "number"
          ? rawPrice
          : 0;
      return { ...item, price, quantity: typeof item.quantity === "number" ? item.quantity : 1 };
    });

    (async () => {
      if (!normalizedCart.length) {
        setCartItems([]);
        setSubtotal(0);
        localStorage.setItem("cart", "[]");
        return;
      }
      const ids = normalizedCart.map((i) => i.id);
      const stockMap = await getStockByIds(ids);
      const stockDict = Object.fromEntries(ids.map((id) => [id, Math.max(0, stockMap[id]?.stock ?? 0)]));
      setStockById(stockDict);
      const fixed = normalizedCart
        .map((i) => {
          const s = stockDict[i.id] ?? 0;
          const qty = Math.min(i.quantity, Math.max(0, s));
          return { ...i, quantity: qty };
        })
        .filter((i) => i.quantity > 0);

      setCartItems(fixed);
      localStorage.setItem("cart", JSON.stringify(fixed));
      calculateSubtotal(fixed);

      if (fixed.length !== normalizedCart.length || JSON.stringify(fixed) !== JSON.stringify(normalizedCart)) {
        alert("Atualizamos seu carrinho de acordo com o estoque atual.");
      }
    })();
  }, []);

  const calculateSubtotal = (items: CartItem[]) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  const updateQuantity = (itemId: string, amount: number) => {
    const updatedItems = cartItems
      .map((item) => {
        if (item.id !== itemId) return item;
        const max = stockById[item.id] ?? Infinity;
        const next = item.quantity + amount;
        if (amount > 0 && next > max) {
          alert("Quantidade solicitada excede o estoque disponível.");
          return item;
        }
        if (next <= 0) return null;
        return { ...item, quantity: next };
      })
      .filter((item): item is CartItem => item !== null);

    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    calculateSubtotal(updatedItems);
  };

  const removeItem = (itemId: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    calculateSubtotal(updatedItems);
  };

  const handleApplyCoupon = () => {
    const validCoupon = import.meta.env.VITE_COUPON_CODE || "DESCONTO10";
    const discountRate = parseFloat(import.meta.env.VITE_COUPON_DISCOUNT || "0.1");
    if (coupon.trim().toUpperCase() === validCoupon.toUpperCase()) {
      const discountValue = subtotal * discountRate;
      setDiscount(discountValue);
      alert("Cupom aplicado com sucesso!");
    } else {
      alert("Cupom inválido.");
    }
  };

  const handleCheckout = () => {
    alert("Finalizando compra...");
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto mt-0 pt-2 mb-8 px-4 bg-background rounded-md shadow-lg p-6 sm:p-8">
      <h1 className="text-4xl font-bold mb-8 text-text-primary">Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p className="text-text-secondary">Seu carrinho está vazio.</p>
      ) : (
        <>
          <CartTable items={cartItems} onQuantityChange={updateQuantity} onRemoveItem={removeItem} />

          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="w-full lg:w-1/2">
              <CouponInput value={coupon} onChange={setCoupon} onApply={handleApplyCoupon} />
            </div>
            <div className="w-full lg:w-1/2">
              <CartSummary subtotal={subtotal} discount={discount} onCheckout={handleCheckout} />
            </div>
          </div>

          <button
            onClick={() => navigate("/books")}
            className="w-full sm:w-auto px-6 py-2 bg-primary text-background rounded-md shadow-md transition hover:bg-secondary"
          >
            Continuar Comprando
          </button>
        </>
      )}
      <div className="text-right text-xl font-bold mt-4">
        Total: R$ {(subtotal - discount).toFixed(2).replace(".", ",")}
      </div>
    </div>
  );
};

export default CartPage;