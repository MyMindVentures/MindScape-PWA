import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🧠 MindScape PWA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Neurodiverse Mind Mapping Platform
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Count is {count}
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🎯 Mind Mapping
            </h3>
            <p className="text-gray-600">
              Create visual mind maps to organize thoughts and ideas
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🧩 Neurodiverse Support
            </h3>
            <p className="text-gray-600">
              Designed with neurodiversity in mind for inclusive thinking
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📱 PWA Ready
            </h3>
            <p className="text-gray-600">
              Install as native app with offline support
            </p>
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-500">
          <p>Built with React + Vite + PWA</p>
        </footer>
      </div>
    </div>
  )
}

export default App
