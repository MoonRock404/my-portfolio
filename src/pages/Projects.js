function Projects() {
    return (
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Dropout Rate Classifier</h3>
            <p>Analyzed school dropout rates with Decision Trees.</p>
          </div>
          <div className="project-card">
            <h3>Ad Sentiment Recommender</h3>
            <p>Built a system using sentiment analysis for ad targeting.</p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </section>
    );
  }
  export default Projects;
  