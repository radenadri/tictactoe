import React from 'react'
import { OIcon } from './OIcon'
import { XIcon } from './XIcon'

interface PlayerProp {
  handlePlayerX() : void,
  handlePlayerO() : void,
  handleNewGame() : void,
}

export const ChoosePlayer = ({handlePlayerX, handleNewGame, handlePlayerO }: PlayerProp) => {

  return (
    <div className="mt-20 md:mt-16 w-[500px] flex flex-col items-center justofy-center mx-auto">
      <div className="flex items-center justify-center px-6 py-2 space-x-4 rounded-xl">
      <XIcon />
      <OIcon />
      </div>
      <div className="flex flex-col items-center py-8 w-[400px] md:w-[500px] h-64 md:h-72 rounded-2xl bg-[#1f3540] mt-6 space-y-6 md:space-y-8">
        <p className="font-semibold text-gray-300 uppercase text-md md:text-xl ">
          Please Select
          {"  "}
          <span className="text-[#30c4bd] text-xl font-bold ">X</span>
          {"  "}
          or
          {"  "}
          <span className="text-[#f3b236] text-xl font-bold">O</span>
        </p>
        <div className="flex items-center w-3/4 h-24 p-6 bg-gray-800 justify-evenly rounded-2xl ">
          <button onClick={handlePlayerX} className="focus:bg-gray-300 hover:bg-[#bcfefb] trasnsition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 ">
            <XIcon />
          </button>
          <button onClick={handlePlayerO} className="focus:bg-gray-300 hover:bg-[#ffe1a9] trasnsition duartion-300 ease-in flex items-center justify-center rounded-xl px-6 py-2 " >
            <OIcon />
          </button>
        </div>
        <p className="font-semibold text-gray-500 uppercase text-md md:text-xl "> Remember: X goes first</p>
      </div>
      <button onClick={handleNewGame} className="button hover:ring-4 hover:ring-cyan-300 rounded-xl mt-8 px-6 py-3 bg-[#f3b236] hover:bg-[#30c4bd]">
        Start Game
      </button>
    </div>
  )
}