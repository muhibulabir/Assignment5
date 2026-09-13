import { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

 return (
    <div id="top" className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Explore the <span className="text-gradient-brand">Technologies</span>
        </h2>
        <p className="mt-2 text-muted">Pick one technology per category to build your ideal stack.</p>

        {loading ? (
          <Loader />
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 xl:grid-cols-[1fr_320px]">
            <TechGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
            <StackPanel stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </div>
        )}
      </section>

      <Footer />

      <ToastContainer position="top-right" autoClose={2500} newestOnTop />
    </div>
  )
}
  
  

export default App
