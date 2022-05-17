import React from 'react'
import { OIcon } from './OIcon'
import { XIcon } from './XIcon'

interface GameProps{
  winner:string
  handleQuitGame() : void
  handleNewGame() : void
}

export const WinnerModal = ({ winner ,handleQuitGame , handleNewGame } : GameProps) => {
  return (
    <div className="absolute top-0 left-0 z-10 w-full min-h-screen bg-gray-900/90">
      <div className="w-[500px] h-[250px] rounded-xl bg-[#1f3540] space-y-10 px-6 py-4 mx-auto mt-52 flex items-center justify-center flex-col">
       <h2 className="flex flex-col items-center justify-center space-y-6 text-2xl font-bold md:text-4xl">
         {winner === "X" ? <XIcon /> : <OIcon />}
         <p className="uppercase text-[#30c4bd]">Takes the Round</p>
       </h2>
      <div className="flex items-center justify-center space-x-16">
        <button onClick={handleQuitGame} className="button px-4 rounded-md py-1 bg-[#a8bdc8] hover:bg-[#718087] hover:ring-4 hover:ring-gray-400">Quit</button>
        <button onClick={handleNewGame} className="button px-4 rounded-md py-1 bg-[#f3b236] hover:bg-[#30c4bd] hover:ring-4 hover:ring-cyan-300">Next Round</button>
      </div>
      </div>
    </div>
  )
}