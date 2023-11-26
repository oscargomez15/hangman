type HangmanWordProps = {
    reveal?: boolean
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanWord({reveal = false, guessedLetters, wordToGuess} : HangmanWordProps) {
    return <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"2.5em",
        fontSize:"4rem",
        fontWeight:"bold",
        textTransform:"uppercase",
        fontFamily:"monospace",
        width:"80vw"
    }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{borderBottom: ".1em solid black"}} key={index}> 
            <span style={{
                visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red" : "black" 
            }}>{letter}</span> 
            </span>
        ))}
    </div>
}