import React from 'react';

const Artist = ({informationartist}) => {
    if (Object.keys(informationartist).length === 0) return null;
  const {
    strArtist,
    strArtistThumb,
    intBornYear,
    intDiedYear,
    strGenre,
    strBiographyEN,
    strFacebook,
    strTwitter,
    strLastFMChart,
  } = informationartist;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Imformation about the Artist
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artist" />
        <h3 className="card-text font-weight-bold">{strArtist}</h3>
        <p className="card-text">
          {intBornYear}
          {intDiedYear ? ` - ${intDiedYear}` : null}
        </p>
        <p className="card-text">Genre: {strGenre}</p>
        <h2 className="card-text">Biography</h2>
        <p className="card-text">{strBiographyEN}</p>
        <p className="card-text">
          <a
            href={`https://${strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
    // <h2>{strArtist}</h2>
  );
}
 
export default Artist;