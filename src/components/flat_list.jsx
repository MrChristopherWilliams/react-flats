import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat name={flat.name} imageUrl={flat.imageUrl} price={flat.price} lat={flat.lat} lng={flat.lng} key={flat.imageUrl} />)}
    </div>
  );
};

export default FlatList;
