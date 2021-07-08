import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Cards() {
  return (
    <>
    <div className= "meme-meme">
      <Card />
    </div>
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
    console.log(i);
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

function Card() {
  return (
    <div className='card'>
      <Img />
      <Name />
      <Info />
    </div>
  );
}

function Name() {
  return <h1>React Card</h1>;
}

function Info() {
  return <h4>Meme Card Using React</h4>;
}

function Img() {
  return (
    <img src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png"></img>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Cards />
  </React.StrictMode>,
  document.getElementById("root")
);


