import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-indigo-600">
          Sweet Shop 🍬
        </h1>
        <p className="mt-2 text-gray-600">
          Frontend setup with React + Vite + Tailwind
        </p>
      </div>
    </div>
  );
}