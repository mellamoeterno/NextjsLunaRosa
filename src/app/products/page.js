'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { loadStripe } from 'stripe/stripe-js'

export default function Products() {

    const products = 
  [{
      id: 1,
      name: 'fragrance1',
      image: '/image/product1.jpg',
      price: '$5.00'
    },
    {
      id: 2,
      name: 'fragrance2',
      image: '/image/product2.jpg',
      price: '$5.00'
    },
    {
      id: 3,
      name: 'fragrance3',
      image: '/image/product3.jpg',
      price: '$5.70'
    }];

    return (        
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{products.name}</h2>
          <p className="text-gray-600 mb-4">{products.price}</p>
          <button className="w-full bg-gradient-to-r from-cyan-950 to-black text-white py-2 rounded hover:opacity-90 transition">
            View Product
          </button>
        </div>     
    )
}