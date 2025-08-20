import React from "react";

const SellHorsePage = () => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      "Thank you! Your horse has been listed for sale. (This is a demo - no data was sent)."
    );
    e.target.reset();
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div>
      <h1 className="text-center mb-2 fw-bold">Sell Your Horse</h1>
      <p className="text-center text-muted mb-5 col-md-8 mx-auto">
        Fill out the form below to list your horse on our platform. Provide as
        much detail as possible to attract the right buyers.
      </p>
      <div
        className="card p-4 p-md-5 shadow-sm border-0 rounded-lg"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="horseName" className="form-label">
                Horse Name
              </label>
              <input
                type="text"
                className="form-control"
                id="horseName"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="breed" className="form-label">
                Breed
              </label>
              <input type="text" className="form-control" id="breed" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input type="number" className="form-control" id="age" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price ($)
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="4"
                placeholder="Include details about temperament, training, health, etc."
              ></textarea>
            </div>
            <div className="col-12">
              <label htmlFor="images" className="form-label">
                Upload Images
              </label>
              <input
                type="file"
                className="form-control"
                id="images"
                multiple
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4 w-100 btn-lg">
            List My Horse
          </button>
        </form>
        {message && <div className="alert alert-success mt-4">{message}</div>}
      </div>
    </div>
  );
};

export default SellHorsePage;
