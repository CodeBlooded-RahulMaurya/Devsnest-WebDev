function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText = num;
}

function getOutput(num){
    return document.getElementById('result-value').innerText;
}

function printOutput(num){
    document.getElementById('result-value').innerText=getFormattedNumber(num);
}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
  }
