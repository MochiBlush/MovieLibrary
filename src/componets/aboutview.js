import Hero from "./hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">Welcome to my movie search libraty created with React.js.</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default AboutView;
