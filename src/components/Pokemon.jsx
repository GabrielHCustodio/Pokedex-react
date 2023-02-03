import React, { useEffect, useState } from "react";

const Pokemon = ({ pokemon }) => {

    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        fetch(`${pokemon.url}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setName(data.name)
            setImage(data.sprites.front_default)
            setType(data.types[0].type.name)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div>
        <img src={image} alt="" />
      <p>{name}</p>
      <p>{type}</p>
    </div>
  );
};

export default Pokemon;
