import React from 'react';

const Detail = ({project}) => {
  const {name} = project;
  return (
    <div>
      <h1 className='text-amber-400'>name {name}</h1>
    </div>
  );
};

export default Detail;