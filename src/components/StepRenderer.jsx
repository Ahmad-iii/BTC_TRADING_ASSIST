import DataTableStep from './steps/DataTableStep.jsx'

function StepRenderer({ step }) {
  switch (step.type) {
    case 'DATA_TABLE':
      return <DataTableStep step={step} />
    default:
      return <div className="step-fallback">Step type not implemented yet.</div>
  }
}

export default StepRenderer
