import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import StepRenderer from './StepRenderer.jsx'

function AnimationPage() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentStep((value) => Math.max(0, value - 1))
      }
      if (event.key === 'ArrowRight') {
        setCurrentStep((value) => Math.min(2, value + 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="animation-shell">
      <main className="animation-main">
        <AnimatePresence mode="wait">
          <motion.div
            className="step-panel"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
          >
            <StepRenderer step={{ id: currentStep }} />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="animation-footer">
        <button
          type="button"
          className="nav-button"
          onClick={() => setCurrentStep((value) => Math.max(0, value - 1))}
          disabled={currentStep === 0}
        >
          ← Previous
        </button>

        <div className="progress-dots">
          {[...Array(3)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentStep ? 'dot active' : 'dot'}
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="nav-button"
          onClick={() => setCurrentStep((value) => Math.min(2, value + 1))}
          disabled={currentStep === 2}
        >
          Next →
        </button>
      </footer>
    </div>
  )
}

export default AnimationPage
