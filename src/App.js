import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Lyrics from './components/Lyrics'
import Artist from './components/Artist'
import Axios from 'axios'

function App() {

  const[informationsong, setInformationsong] =useState({})
  const[informationlyric, setInformationlyric] = useState('')
  const[informationartist, setInformationartist] =useState({})

  
  useEffect(()=>{
    if(Object.keys(informationsong).length === 0)return; 
    
    const requestApiLyric = async () => {
      const { artist, song } = informationsong;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyric, bio] = await Promise.all([Axios(url), Axios(url2)]);
      setInformationartist(bio.data.artists[0]);
      setInformationlyric(lyric.data.lyrics);
     
    };
    requestApiLyric();
  },[informationsong])

  return (
    <Fragment>
      <Formulario setInformationsong={setInformationsong} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artist informationartist={informationartist} />
          </div>
          <div className="col-md-6">
            <Lyrics informationlyric={informationlyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
