import random from 'lodash/random'

// Array of available nodes to connect to
const nodes = [
  process.env.REACT_APP_NODE_1 as string,
  process.env.REACT_APP_NODE_2 as string,
  process.env.REACT_APP_NODE_3 as string
]

const getNodeUrl = () => {
  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex]
}

export default getNodeUrl
