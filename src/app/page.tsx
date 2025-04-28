'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//fix product page and images
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-800 to-blue-950 font-sans p-8 gap-10">
      {/* Section 1 */}
      <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/your-background-1.jpg")' }}>
        <div className="flex flex-col sm:flex-row items-center justify-between h-full p-8">
          {/* Left side */}
          <div className="flex flex-col space-y-4">
            <Image src="/your-image-left-top-1.png" alt="Left Top" width={200} height={200} className="object-contain" />
            <Image src="/your-image-left-bottom-1.png" alt="Left Bottom" width={200} height={200} className="object-contain" />
            <Link
              href="/products"
              className="mt-4 inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              
              check out 
              
            </Link>
          </div>
          {/* Right side */}
          <div>
            <Image src="/your-image-right-1.png" alt="Right" width={300} height={300} className="object-contain" />
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/your-background-2.jpg")' }}>
        <div className="flex flex-col sm:flex-row items-center justify-between h-full p-8">
          {/* Left side */}
          <div className="flex flex-col space-y-4">
            <Image src="/your-image-left-top-2.png" alt="Left Top" width={200} height={200} className="object-contain" />
            <Image src="/your-image-left-bottom-2.png" alt="Left Bottom" width={200} height={200} className="object-contain" />
            <Link
              href="products"
              className="mt-4 inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              
              check out 
              
            </Link>
          </div>
          {/* Right side */}
          <div>
            <Image src="/your-image-right-2.png" alt="Right" width={300} height={300} className="object-contain" />
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/your-background-3.jpg")' }}>
        <div className="flex flex-col sm:flex-row items-center justify-between h-full p-8">
          {/* Left side */}
          <div className="flex flex-col space-y-4">
            <Image src="/your-image-left-top-3.png" alt="Left Top" width={200} height={200} className="object-contain" />
            <Image src="/your-image-left-bottom-3.png" alt="Left Bottom" width={200} height={200} className="object-contain" />
            <Link
              href="products"
              className="mt-4 inline-block bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              
                check out 
              
            </Link>
          </div>
          {/* Right side */}
          <div>
            <Image src="/your-image-right-3.png" alt="Right" width={300} height={300} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
