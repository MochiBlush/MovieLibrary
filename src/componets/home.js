import Hero from './hero';

const home = () => {
    return (
      <>
      <Hero text="Wecome, start your search."/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>Movies will appear here.</p>
            </div>
          </div>
        </div>
      </>
    )
  }

export default home;