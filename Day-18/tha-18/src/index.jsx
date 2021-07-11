import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Cards() {
  return (
    <>
    <div className = "chess-chess">
      <Chessboard />
    </div>
    </>
  );
}

function Chessboard(){
  return (
      <div className="chessboard">
        <Tiles />
      </div>
  );
}
var j = 1;
var tile = [];

function getTile(){
    for(var i=1; i<=64; i++){
      if(j%2===0){
        console.log("even");
           tile.push(<div className = 'tile even'></div>);
      }
      else{
        tile.push(<div className = 'tile odd'></div>);
        console.log("odd");
    }
    if(i%8===0){
      j += 1;
  }
  j += 1;
}
    return tile;
};

function Tiles(){
    return (
      <>
      {
          getTile()
      }
      </>
    );
};


ReactDOM.render(
  <React.StrictMode>
    <Cards />
  </React.StrictMode>,
  document.getElementById("root")
);


