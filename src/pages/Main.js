import React from 'react'
import Welcome from '../components/Welcome'
import PokeMountsList from '../components/PokeMountsList'
import char from '../images/charizard.png'
import ur from '../images/urzul.png'

class Main extends React.Component{

    state = {
        data: [{
            "id": 1,
            "title": "Charizard",
            "description": "This is my favorite one",
            "img": char,
            "leftColor": "#A74CF2",
            "rightColor": "#617BFB"
        }],

        data2: [{
            "id": 1,
            "title": "ur'zul",
            "description": "this is my favorite mount",
            "img": ur,
            "leftColor": "#A74CF2",
            "rightColor": "#617BFB"
        }]
    }

    render(){
        return(
            <div className="container d-flex">
                <div>
                    <Welcome 
                        tag = "These are Pokemon"
                        tag2 = "lots of them"
                    />
                    <PokeMountsList 
                        pokemon = {this.state.data}
                    />
                </div>
                <div>
                    <Welcome 
                        tag = "These are mounts"
                        tag2 = "some of them" 
                    />
                    <PokeMountsList 
                        mount = {this.state.data2}
                    />
                </div>
            </div>    
        )
    }

}

export default Main