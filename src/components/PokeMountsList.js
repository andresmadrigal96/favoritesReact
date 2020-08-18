import React from 'react'
import Card from './Card'

const PokeMountsList = ({pokemon, mount}) => (
    <div>
        {
            pokemon && pokemon.map((pokemon) => (
                <Card 
                    key = {pokemon.id}
                    title = {pokemon.title}
                    description = {pokemon.description}
                    img = {pokemon.img}
                    leftColor = {pokemon.leftColor}
                    rightColor = {pokemon.rightColor}
                />
            ))
        }
        {
            mount && mount.map((mount) => (
                <Card 
                    key = {mount.id}
                    title = {mount.title}
                    description = {mount.description}
                    img = {mount.img}
                    leftColor = {mount.leftColor}
                    rightColor = {mount.rightColor}
                />
            ))
        }
    </div>
)

export default PokeMountsList;
