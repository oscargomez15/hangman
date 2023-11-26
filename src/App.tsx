import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import { Keyboard } from "./Keyboard";
import { HangmanWord } from "./HangmanWord";
import { HangmanDrawing } from "./HangmanDrawing";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

import "./App.css"

function getWord(){
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetter] = useState<string[]>([])

  const [isGameEnabled, setGameEnabled] = useState(false)
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

const addGuessedLetter = useCallback((letter:string) => {
  if(guessedLetters.includes(letter) || isWinner || isLoser) return

  setGuessedLetter(currentLetters => [...currentLetters, letter])
},[guessedLetters, isWinner, isLoser])

const showGame = () => {
  setGameEnabled(true)
}

  useEffect (() => {
    const handler = (e:KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e:KeyboardEvent) => {
      const key = e.key

      if(key !== "Enter") return
      e.preventDefault()
      setGuessedLetter([])
        setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  })


  return <>
  <Navbar/>
  <div style={{
      maxWidth: "800px",
      display:"flex",
      flexDirection:"column",
      gap: "2rem",
      margin: "0 auto",
      alignItems:"center"  }}>
      
      {!isGameEnabled &&
      <>
      <div className="instructions_wrapper">
        <div className="instructions_container">
          <h2 className="instructions_heading"> Welcome to Hangman</h2>
          <h3 className="instructions_subheading"> Instructions </h3>
          <ul>
            <li>Try to guess the hidden word by pressing your keyboard keys or clicking on the virtual keyboard</li>
            <li>You have 6 attempts before your stickman dies. Think wisely!</li>
          </ul>
          <button type="submit" className="continue_btn" onClick={() => showGame()}> Continue </button>
        </div>
      </div>
      </>}
      <div style={{fontSize:"2rem", textAlign:"center"}}> 
      {isWinner && "Winner! Press Enter to Restart."} 
      {isLoser && "Nice Try! - Press Enter to try again. "} 
      </div>
      
      {isGameEnabled &&
      <>       
        <HangmanDrawing numberOfGuesses = {incorrectLetters.length}/>
        <HangmanWord reveal={isLoser} guessedLetters = {guessedLetters} wordToGuess={wordToGuess}/>
        <div style={{alignSelf: "stretch"}}>
        <Keyboard disabled = {isWinner || isLoser} activeLetters = {guessedLetters.filter(letter =>  wordToGuess.includes(letter))} inactiveLetters = {incorrectLetters} addGuessedLetter = {addGuessedLetter}/>
        </div>
      </>
      }

    </div>
    <Footer/>
    </>
}

export default App
