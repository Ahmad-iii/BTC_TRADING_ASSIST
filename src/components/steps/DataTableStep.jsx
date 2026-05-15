import { motion } from 'framer-motion'

const headerVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
}

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

function DataTableStep({ step }) {
  const { headers, rows, highlightColumn } = step.data

  return (
    <div className="data-table-step">
      <div className="step-labels">
        <p className="step-heading">{step.heading}</p>
        <p className="step-subheading">{step.subHeading}</p>
      </div>
      <div className="step-content">
        <div className="candle-visual">
          <div className="candle-stick">
            <div className="wick" style={{ top: '10%', height: '70%', width: '4px' }} />
            <div className="body rise" style={{ height: '30%', top: '35%', width: '12px' }} />
          </div>
          <div className="candle-meta">
            <div className="candle-label" style={{ top: '10%', left: '-20px' }}>
              <span>High</span>
              <div className="arrow-up" />
            </div>
            <div className="candle-label" style={{ top: '35%', left: '-20px' }}>
              <span>Open</span>
              <div className="arrow-right" />
            </div>
            <div className="candle-label" style={{ top: '65%', left: '-20px' }}>
              <span>Close</span>
              <div className="arrow-right" />
            </div>
            <div className="candle-label" style={{ top: '80%', left: '-20px' }}>
              <span>Low</span>
              <div className="arrow-down" />
            </div>
          </div>
        </div>
        <motion.div
          className="table-frame"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
        >
          <motion.div className="table-row table-header" variants={headerVariants}>
            {headers.map((header) => (
              <div key={header} className="table-cell table-header-cell">
                {header}
              </div>
            ))}
          </motion.div>

          {rows.map((row, rowIndex) => (
            <motion.div
              key={row[0]}
              className="table-row"
              variants={rowVariants}
              whileHover={{ x: 4 }}
            >
              {row.map((cell, cellIndex) => (
                <div
                  key={`${rowIndex}-${cellIndex}`}
                  className={
                    cellIndex === highlightColumn
                      ? 'table-cell table-cell-highlight'
                      : 'table-cell'
                  }
                >
                  {cell}
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="table-footer">
        <span className="footer-badge">Example data</span>
        <span className="footer-note">Hover a row to highlight it</span>
      </div>
    </div>
  )
}

export default DataTableStep
