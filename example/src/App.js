import React from 'react'
import { useCountDown, useTimer } from 'react-time-hooks'
import 'react-time-hooks/dist/index.css'
const App = () => {
  const { time: count_time, reset: count_reset, play: count_play, puase: count_puase } = useCountDown(60)
  const { time, reset, play, puase } = useTimer(0, {
    interval: 1,
    countOnFocus: true
  })
  return (
    <div className='flex flex-1 items-center justify-center flex-column mt-20'>
      <h2 className='font-bold text-xl'>useTimer</h2>
      <span>{time}</span>
      <div className='flex space-x-2'>
        <button onClick={play}>play</button>
        <button onClick={puase}>pause</button>
        <button onClick={reset}>reset</button>
      </div>
      <h2 className='font-bold text-xl'>useCountDown</h2>
      <span>{count_time}</span>
      <div className='flex space-x-2'>
        <button onClick={count_play}>play</button>
        <button onClick={count_puase}>pause</button>
        <button onClick={count_reset}>reset</button>
      </div>
    </div>
  )
}

export default App
