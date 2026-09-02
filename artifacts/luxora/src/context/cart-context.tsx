import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type CartItem = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceLabel: string;
  image: string;
  accent: string;
  series: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = 'luxora_cart_v1';

const CartContext = createContext<CartContextValue | null>(null);

function safeParseCart(raw: string | null): CartItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is CartItem => (
      item &&
      typeof item.id === 'string' &&
      typeof item.name === 'string' &&
      typeof item.subtitle === 'string' &&
      typeof item.price === 'number' && Number.isFinite(item.price) && item.price >= 0 &&
      typeof item.priceLabel === 'string' &&
      typeof item.image === 'string' &&
      typeof item.accent === 'string' &&
      typeof item.series === 'string' &&
      Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99
    ));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === 'undefined') return [];
    return safeParseCart(window.localStorage.getItem(STORAGE_KEY));
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Browsers can block storage or run out of quota; cart actions should still work in memory.
    }
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    const addItem: CartContextValue['addItem'] = (item, quantity = 1) => {
      const safeQuantity = Math.min(99, Math.max(1, Math.floor(quantity)));
      setItems((current) => {
        const existing = current.find((entry) => entry.id === item.id);
        if (existing) {
          return current.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: Math.min(99, entry.quantity + safeQuantity) }
              : entry,
          );
        }
        return [...current, { ...item, quantity: safeQuantity }];
      });
    };

    const updateQuantity: CartContextValue['updateQuantity'] = (id, quantity) => {
      const safeQuantity = Math.min(99, Math.max(0, Math.floor(quantity)));
      setItems((current) =>
        current
          .map((item) => (item.id === id ? { ...item, quantity: safeQuantity } : item))
          .filter((item) => item.quantity > 0),
      );
    };

    const removeItem: CartContextValue['removeItem'] = (id) => {
      setItems((current) => current.filter((item) => item.id !== id));
    };

    const clearCart = () => setItems([]);

    return {
      items,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
