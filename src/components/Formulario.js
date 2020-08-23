import React, {useState} from 'react';
import Error from './Error'

const Formulario = ({ setInformationsong}) => {
  
  const [search, setSearch] = useState({ artist:"", song:""})
  const [error, setError] = useState(false)

  //destructuring
  const {artist, song}=search

  //function for the reding of the state
  const updateState = e =>{
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }
  // search information from api
  const searchInformarion = e=>{
    e.preventDefault()
    if (artist.trim() === "" || song.trim() === "" ){
      setError(true)
      return
    }
    setError(false)

    // pass it to parent component
    setInformationsong(search)
  }

  return ( 
    <div className="bg-info">
          {error ? <Error message="All Areas are Needed to be Filled"/>:null}
      <div className="container">
        <div className="row">

          <form
            onSubmit={searchInformarion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Search Lyrics</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist's Name"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song Name"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary float-right"
              >Search</button>
            </fieldset>

          </form>
        </div>
      </div>
    </div>

   );
}
 
export default Formulario;