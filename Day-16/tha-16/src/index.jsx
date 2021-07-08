import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Memecard() {
  return (
    <>
      <Card />
      <Chessboard />
    </>
  );
}

function Chessboard(){
  return(
    <div className = "chessboard">
      <Tiles/>
    </div>
  );
}

var tile = [];
var j = 1;
function getTile(){
    for(var i=1; i<=64; i++){
      if(i%2==0 && j==1){
           tile.push(<div className = 'tile even'></div>);
      }
      else{
        tile.push(<div className = 'tile black'></div>);
    }
    if(
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
    <Memecard />
  </React.StrictMode>,
  document.getElementById("root")
);


