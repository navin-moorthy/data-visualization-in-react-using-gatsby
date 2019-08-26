import React from "react"
import * as D3 from "d3"

const getRandomData = () =>
  D3.range(20).map(() => ({ x: Math.random(), y: Math.random() }))

export default () => {
  const data = getRandomData()
  const xScale = D3.scaleLinear()
    .domain([0, 1])
    .range([0, 400])
  const yScale = D3.scaleLinear()
    .domain([0, 1])
    .range([0, 400])

  return (
    <svg width={400} height={400}>
      {data.map(d => (
        <circle cx={xScale(d.x)} cy={yScale(d.y)} id={d.x} r={10} />
      ))}
    </svg>
  )
}
