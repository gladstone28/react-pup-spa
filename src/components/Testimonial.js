import React from 'react';

function Testimonial({ quote, author }) {
  return (
    <div className={`testimonial ${author === 'Dan' ? 'one' : 'two'}`}>
      <p>"{quote}"
        <br />- {author}
      </p>
    </div>
  );
}

export default Testimonial;
