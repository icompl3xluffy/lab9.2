import type { StatsDisplayProps} from "../../types";

export function StatsDisplay({stats, showReadingTime=true}: StatsDisplayProps){
     return(
    <div>   
        
        <p>Characters {stats.characterCount}</p>
        <p>Word {stats.wordCount}</p>
        {showReadingTime && <p> Reading Time: {stats.readingTime} min </p> }
        
    </div>
    )
}
