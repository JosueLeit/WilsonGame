import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import entities from './entities'
import Physics from './physics'

export default function App() {
  const [running, setRunning] = useState(false)
  const [gameEngine, setGameEngine] = useState(null)

  useEffect(() => {
    setRunning(true)
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <GameEngine
        ref={ref => {
          setGameEngine(ref)
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={e => {
          switch (e.type) {
            case 'game_over':
              setRunning(false)
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      ></GameEngine>

      <StatusBar style="auto" hidden={true} />
    </View>
  )
}
