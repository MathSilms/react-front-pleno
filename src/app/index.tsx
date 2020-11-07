import React from 'react'
import ToggleCaseComponent from '../components/ToggleCaseComponent'
import ToLowerCase from '../components/ToLowerCase'
import ToUpperCaseComponent from '../components/ToUpperCaseComponent'

const App = () => {
    return (
        <>
            <ToLowerCase >
                Hello Word
        </ToLowerCase>
            <ToUpperCaseComponent>
                Hello Word
        </ToUpperCaseComponent>
        <ToggleCaseComponent initialMode='upper'>
            Hello World
        </ToggleCaseComponent>
        </>
    )
}

export default App