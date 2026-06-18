'use client';

import { useContext } from 'react';
import { CartContext } from '@/components/cart/CartProvider';

export default function useCart() {
    return useContext(CartContext);
}