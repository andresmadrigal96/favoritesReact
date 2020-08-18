import React from 'react'
import './styles/Card.css'
import circlesImg from '../images/circles.png'

class Card extends React.Component{
    render(){
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto PokeMount-Card mt-3"
            style = {{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div>
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} />
                        </div>
                        <div className="col-6 PokeMount-Card-info">
                            <h1>{title}</h1>
                            <p className="tam">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card