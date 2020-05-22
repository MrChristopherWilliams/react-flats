import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => <Flat name={flat.name} imageUrl={flat.imageUrl} price={flat.price} lat={flat.lat} lng={flat.lng} key={flat.imageUrl} selectFlat={props.selectFlat} index={index} />)}
    </div>
  );
};

export default FlatList;
