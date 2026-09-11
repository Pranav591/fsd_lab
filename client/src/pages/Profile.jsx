function Profile() {
  return (
    <>
      <section id="about" className="hero">
        <img
          src="https://placehold.co/160x160"
          alt="Profile photo of Pranav Adhikari"
          className="avatar"
        />
        <h1>Hi, I'm Pranav Adhikari</h1>
        <p>
          A full-stack development student building web apps with HTML, CSS,
          JavaScript, React and Node.js.
        </p>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="card-row">
          <article className="card">
            <h3>Task Tracker</h3>
            <p>A small state-driven to-do app built with vanilla JavaScript.</p>
          </article>
          <article className="card">
            <h3>React Dashboard</h3>
            <p>A modular dashboard built with reusable React components.</p>
          </article>
          <article className="card">
            <h3>REST API</h3>
            <p>An Express backend exposing CRUD endpoints for a resource.</p>
          </article>
        </div>
        <p className="projects-note">
          The Task Tracker, React Dashboard and REST API above aren't just
          descriptions — they're wired together and live on the{" "}
          <strong>Tasks</strong> tab.
        </p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>
          Reach me at <a href="mailto:pranav@example.com">pranav@example.com</a>
        </p>
      </section>
    </>
  );
}

export default Profile;
