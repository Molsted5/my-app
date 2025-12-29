import { useState } from 'react';
import { sculptureList } from '../data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <h2>Sculptures Gallery</h2>

      <button onClick={handlePrevClick} disabled={!hasPrev}>Previous</button>
      <button onClick={handleNextClick} disabled={!hasNext}>Next</button>

      <h3><i>{sculpture.name}</i> by {sculpture.artist}</h3>
      <h4>({index + 1} of {sculptureList.length})</h4>
      
      <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
      <br></br><br></br>
      {showMore && <p>{sculpture.description}</p>}

      <img src={sculpture.url} alt={sculpture.alt}/>
    </>
  );
}