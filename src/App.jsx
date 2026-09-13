import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'


export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    let isMounted = true

    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setTechnologies(data)
      })
      .catch(() => {
        if (isMounted) toast.error('Could not load technology data.')
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  const stackIds = useMemo(() => new Set(stack.map((t) => t.id)), [stack])

  function handleAdd(tech) {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id) {
    const tech = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))
    if (tech) toast.info(`${tech.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

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
      <ToastContainer position="bottom-right" autoClose={2500} newestOnTop />
    </div>
  )
}
