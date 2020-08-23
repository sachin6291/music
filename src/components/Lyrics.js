import React, {Fragment} from 'react';

const Lyrics = ({informationlyric}) => {
  if(informationlyric.length === 0)return null
  return (
    <Fragment>
      <h2>Lyrics of the Song</h2>
      <p className="letra">{informationlyric}</p>
    </Fragment> 
   );
}
 
export default Lyrics;