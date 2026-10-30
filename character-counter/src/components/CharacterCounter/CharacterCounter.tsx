import type {CharacterCounterProps} from '../types'

export  function CharacterCount({minWords=25, maxWords=100,  targetReadingTime}: CharacterCounterProps){
    

    return(
    <div>   
        <h3>Words</h3>
        <p>Min: {minWords}</p>
        <p>Max: {maxWords}</p>
        <p></p>
    </div>
    )
}