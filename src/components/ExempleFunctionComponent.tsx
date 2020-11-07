import React, { useState } from 'react';


const ExampleFunctionComponent = ( props: ExampleFunctionComponent.Props ) => {
    const [name, setName] = useState('')

    return (
        <div className="container" >
            <div className="row align-center justfy-content-center ">
                <div className="col-4">
                    <h1>Bem Vindo, {name}</h1>
                    <input type="email" className="form-control" value={name} onChange={ event =>{
                        setName(event.target.value )
                    }}/>
                </div>
            </div>
        </div>
)

}

namespace ExampleFunctionComponent {
    export interface Props { }
}

export default ExampleFunctionComponent