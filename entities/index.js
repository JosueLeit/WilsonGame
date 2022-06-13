import Matter from 'matter-js'
import Wilson from '../components/Wilson'
import Floor from '../components/Floor'
import Obstacle from '../components/Obstacle'
import { Dimensions } from 'react-native'
import { getPipeSizePosPair } from '../utils/random'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default restart => {
  let engine = Matter.Engine.create({ enableSleeping: false })

  let world = engine.world

  engine.gravity.y = 0.4

  const getPipeSizePosA = getPipeSizePosPair()
  const getPipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)

  return {
    physics: { engine, world },

    Wilson: Wilson(
      world,
      'green',
      { x: 50, y: 300 },
      { height: 40, width: 40 }
    ),

    ObstacleTop1: Obstacle(
      world,
      'ObstacleTop1',
      'red',
      getPipeSizePosA.pipeTop.pos,
      getPipeSizePosA.pipeTop.size
    ),

    ObstacleBottom1: Obstacle(
      world,
      'ObstacleBottom1',
      'red',
      getPipeSizePosA.pipeBottom.pos,
      getPipeSizePosA.pipeBottom.size
    ),

    ObstacleTop2: Obstacle(
      world,
      'ObstacleTop2',
      'red',
      getPipeSizePosB.pipeTop.pos,
      getPipeSizePosB.pipeTop.size
    ),

    ObstacleBottom2: Obstacle(
      world,
      'ObstacleBottom2',
      'red',
      getPipeSizePosB.pipeBottom.pos,
      getPipeSizePosB.pipeBottom.size
    ),

    Floor: Floor(
      world,
      'green',
      { x: windowWidth / 2, y: windowHeight },
      { height: 50, width: windowWidth }
    )
  }
}
