function Contact() {
  return (
    <div className="container my-5">
      <h2>Contact Us</h2>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4"></textarea>
        </div>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
