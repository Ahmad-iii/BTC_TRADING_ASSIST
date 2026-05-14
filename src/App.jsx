function App() {
  return (
    <main className="page-shell">
      <section className="profile-card">
        <div className="intro">
          <p className="eyebrow">Hi, I’m</p>
          <h1>Alex Nolan</h1>
          <p className="subtitle">Product designer, front-end developer, and creative technologist.</p>
        </div>

        <div className="details">
          <p>
            I build clean, thoughtful digital experiences for modern brands and startups. My focus is on minimal design,
            fast performance, and polished interactions.
          </p>

          <div className="meta-grid">
            <div>
              <strong>Location</strong>
              <span>Berlin, Germany</span>
            </div>
            <div>
              <strong>Work</strong>
              <span>Freelance & consulting</span>
            </div>
            <div>
              <strong>Contact</strong>
              <span>alex@minimal.dev</span>
            </div>
          </div>

          <div className="actions">
            <a href="#about">About</a>
            <a href="mailto:alex@minimal.dev">Email me</a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
