import React, { useEffect, useState } from 'react'

import { Container, Table } from 'react-bootstrap'

const DrunkardsWalk = () => {


  let currentPOS = {
    x: 0,
    y: 0
  };

  let floorTiles = 0; 
  const [floorCount, setFloorCount] = useState(150);

  const [wallMap, setWallMap] = useState([
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
    ["🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻","🗻"],
  ])

    const renderMap = () => {
      return (<Table className='text-center table-bordered'>
        <tbody>
          {wallMap.map((xitem,xindex) => {
            return <tr key={xindex}>{xitem.map((yitem,yindex) => {
              let bgColor;
              // eslint-disable-next-line default-case
              switch(yitem) {
                case ("🗻"):
                  bgColor = "Gray"
                  break;
                case ("🍺"):
                  bgColor = "Green"
                  break;
                case ("⬜"):
                  bgColor = "White"
                  break;
              }
              let styles = {
                backgroundColor: bgColor,
              }
              return <td style={styles} key={yindex}>{yitem}</td>
            })}</tr>
          })}
        </tbody>
      </Table>)
    }

    const updateMap = (x,y) => {
      console.log(floorTiles);
      let updatedMap = [...wallMap]
      if (updatedMap[y][x] === "🗻") {
        floorTiles++
      } 
      for (let i = 0; i < updatedMap.length;i++) {
          for (let j = 0; j < updatedMap[i].length;j++) {
            if (updatedMap[i][j] === "🍺") {
              updatedMap[i][j] = "⬜" ;
            }
          }
      }
      updatedMap[y][x] =  "🍺"
      currentPOS.x = x;
      currentPOS.y = y;
      setWallMap(updatedMap); 
      }

    const selectRandomStartingPoint = () => {
      let startingPoint = Math.floor(Math.random() * wallMap.length);      
      updateMap(startingPoint, startingPoint);
    }

    const chooseDirection = () => {
      // eslint-disable-next-line default-case
      switch(Math.floor(Math.random() * (4 - 1 + 1) + 1)) {
        case 1:
          return "N"
        case 2:
          return "S"
        case 3:
          return "E"
        case 4:
          return "W"
      }
    }

    const takeStep = () => {
      // eslint-disable-next-line default-case
      switch(chooseDirection()) {
        case "N":
          wallMap[currentPOS.y - 1] === undefined ? takeStep() : updateMap(currentPOS.x, currentPOS.y-1);
          break;
        case "S":
          wallMap[currentPOS.y + 1] === undefined ? takeStep() : updateMap(currentPOS.x, currentPOS.y+1);
          break;
        case "E":
          wallMap[currentPOS.y][currentPOS.x+1] === undefined ? takeStep() : updateMap(currentPOS.x+1, currentPOS.y);
          break;
        case "W":
          wallMap[currentPOS.y][currentPOS.x-1] === undefined ? takeStep() : updateMap(currentPOS.x-1, currentPOS.y);
          break;
      }
    }

    const timer = ms => new Promise(res => setTimeout(res, ms))

    const walkItOut = async () => {
      while (floorTiles < floorCount) {
        await timer(50);
        takeStep();
      }
      alert("Neat, right?");
    }

    const startWalk = () => {
      selectRandomStartingPoint();
      walkItOut();
    }

    useEffect(() => {
      startWalk();
    }, [])

  return (
    <div>
    <Container style={{alignItems:'center',height: "100vh",justifyContent: 'center',display:'flex', flexDirection:'column'}}>
      <h1 style={{textAlign:'center'}}>Drunkards Walk Visualization</h1>
      {renderMap()}
    </Container>
    </div>
  )
}

export default DrunkardsWalk
