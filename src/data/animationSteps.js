const animationSteps = [
  {
    id: 1,
    phase: 'Data Collection',
    phaseIndex: 0,
    heading: 'Raw BTC Candle Data',
    subHeading: 'Each row is a 15-minute candle',
    type: 'DATA_TABLE',
    data: {
      headers: ['Timestamp', 'Open', 'High', 'Low', 'Close', 'Volume'],
      rows: [
        ['2023-01-01 00:00 UTC', '16,541.2', '16,557.8', '16,528.0', '16,549.3', '342.81'],
        ['2023-01-01 00:15 UTC', '16,549.3', '16,572.1', '16,540.0', '16,563.7', '289.44'],
        ['2023-01-01 00:30 UTC', '16,563.7', '16,580.2', '16,551.4', '16,571.0', '301.22'],
        ['2023-01-01 00:45 UTC', '16,571.0', '16,590.5', '16,558.8', '16,565.4', '278.90'],
        ['2023-01-01 01:00 UTC', '16,565.4', '16,576.3', '16,541.1', '16,548.9', '264.17'],
      ],
      highlightColumn: 4,
      highlightLabel: 'Close',
    },
  },
  {
    id: 2,
    phase: 'Data Collection',
    phaseIndex: 0,
    heading: 'Train / Test Split',
    subHeading: 'We Split the Data Into Two Separate Sets',
    type: 'TIMELINE',
    data: {
      timeline: {
        train: {
          label: 'TRAIN DATA',
          range: '240,000 candles',
          percentage: '83%',
        },
        test: {
          label: 'TEST DATA',
          range: '35,903 candles',
          percentage: '17%',
        },
      },
      note: 'Why not random split? Because financial data is time-ordered. If we randomly split, future data leaks into training — the model would be "cheating" by learning from the future. We always split by time: train on the past, test on the future.',
    },
  },
]

export default animationSteps
