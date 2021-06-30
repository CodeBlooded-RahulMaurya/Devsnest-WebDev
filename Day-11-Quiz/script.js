let questions = [
  {
    question: "Who created the Mr. Robot series?",
    option1: "Rami Malek",
    option2: "Christian Slater",
    option3: "Steve Golin",
    option4: "Sam Esmail",
    correct: "Sam Esmail",
  },
  {
    question: "On which station was this series first premiered?",
    option1: "Presto",
    option2: "Universal Studios",
    option3: "Amazon Prime",
    option4: "Usa Network",
    correct: "Usa Network",
  },
  {
    question: "How many Emmy awards does this series has?",
    option1: "5",
    option2: "8",
    option3: "3",
    option4: "6",
    correct: "6",
  },
  {
    question: "Who investigated the 5/9 hack?",
    option1: "Santiago",
    option2: "Terry Colby",
    option3: "Frank Cody",
    option4: "Dom",
    correct: "Dom",
  },
  {
    question: "What made Elliot live isolated from other people?",
    option1: "Fear",
    option2: "Debt",
    option3: "Hacktivists",
    option4: "Social anxiety disorder",
    correct: "Social anxiety disorder",
  },
  {
    question: "The supplier of Elliot's suboxone is......",
    option1: "Derek",
    option2: "Mr Robot",
    option3: "Leon",
    option4: "Fernando Vera",
    correct: "Fernando Vera",
  },
  {
    question: "How does Elliot connects with people?",
    option1: "Social Media",
    option2: "Phone Calls",
    option3: "Encrypted Letters",
    option4: "Hacking",
    correct: "Hacking",
  },
  {
    question: "Where was the series filmed?",
    option1: "Canada",
    option2: "Texas",
    option3: "United Kingdom",
    option4: "New York",
    correct: "New York",
  },
  {
    question: "Who is responsible for Elliot's safety?",
    option1: "Vera",
    option2: "Dom",
    option3: "Derek",
    option4: "Leon",
    correct: "Leon",
  },
  {
    question: "Which of the following is Whiterose's lover",
    option1: "Lone Star",
    option2: "Shayla Nico",
    option3: "Ray Heyworth",
    option4: "Grant",
    correct: "Grant",
  },
  {
    question: "Where did Elliot find Shayla's body?",
    option1: "In the trunk of a car",
    option2: "In the bathtub",
    option3: "Burried in the forest",
    option4: "In the middle of her apartment",
    correct: "In the trunk of a car",
  },

  {
    question:
      "Where was the weapon from which Elliot allegedly shot Tyrell hidden in S01?",
    option1: "Elliot had it with him",
    option2: "In a popcorn machine",
    option3: "It was taped under the desk",
    option4: "In a bag with a panda drawn",
    correct: "In a popcorn machine",
  },
  {
    question: "What is the name of the tiny black dog owned by Elliot?",
    option1: "Snowball",
    option2: "Barkley",
    option3: "Doodle",
    option4: "Flipper",
    correct: "Flipper",
  },
  {
    question: "What is the name Elliot's therapist?",
    option1: "Kelly Jackson",
    option2: "Christina Grounder",
    option3: "Krista Gordon",
    option4: "Gloria Reubenarrior",
    correct: "Krista Gordon",
  },
  {
    question: "How does Gideon Goddard die?",
    option1: "Shot in the neck",

    option2: "Stabbed in a bar",

    option3: "Suicide",
    option4: "A car accident",

    correct: "Shot in the neck",
  },
  {
    question: "Elliot fixed Ray's website, but what else did he do?",
    option1: "Installed SSL",
    option2: "Alert the FBI",
    option3: "Hacked into his computer to steal data",
    option4: "Beat Ray to death",
    correct: "Alert the FBI",
  },
  {
    question: "What did the five/nine hack actually do?",
    option1: "Crashed mobile networks across the US",
    option2: "Encrypted E Corp's data",
    option3: "Erased everyone's debt",
    option4: "Nothing",
    correct: "Encrypted E Corp's data",
  },
  {
    question: "Who helped Fsociety hack the FBI?",
    option1: "Angela",
    option2: "Cisco",
    option3: "Dom",
    option4: "Joanna",
    correct: "Angela",
  },
  {
    question: "Who killed Joanna?",
    option1: "Derek",
    option2: "Eliot",
    option3: "Tyrell",
    option4: "Scott",
    correct: "Derek",
  },
  {
    question: "What is the name of the show Joanna was on before her death?",
    option1: "One on one with Frank Thompson",
    option2: "Let's be Honest with Tom Honest",
    option3: "TV News Special",
    option4: "Let's be Frank with Frank Cody",
    correct: "Let's be Frank with Frank Cody",
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffleArray(questions);
console.log(questions);



for (let i = 0; i < 10; i++) {
  var ques = document.querySelector(".questions");
  var q = document.createElement("h2");
  q.innerText = questions[i]["question"];
  ques.appendChild(q);
  var op = document.querySelectorAll(".opt");
  for (let j = 0; j < 4; j++) {
    shuffleArray(op);
    var o = document.createElement("h3");
    o.innerText = questions[i]["option" + (j + 1)];
    op[j].appendChild(o);

    op[j].addEventListener("click", (e) => {
      console.log(e.target);
      console.log(e.target.nodeName);

      if (e.target.nodeName == "BUTTON") {
        var h3 = e.target.getElementsByTagName("H3");
        console.log(h3.innerHTML);
        if (h3.innerText === questions[i]["correct"]) {
          e.target.style.backgroundColor = "green";
        } else {
          e.target.style.backgroundColor = "red";
          var options = document.querySelectorAll("h3");
          for (let k = 0; k < 4; k++) {
            if (options[k].innerText === questions[i]["correct"]) {
              options[k].parentNode.style.backgroundColor = "green";
              break;
            }
          }
        }
      } else {
        if (e.target.innerText === questions[i]["correct"]) {
          e.target.parentNode.style.backgroundColor = "green";
        } else {
          e.target.paretNode.style.backgroundColor = "red";
          var options = document.querySelectorAll("h3");
          console.log(options)
          for (let k = 0; k < 4; k++) {
            if (options[k].innerText === questions[i]["correct"]) {
              options[k].parentNode.style.backgroundColor = "green";
              break;
            }
          }
        }
      }
      // async function test() {
      //   console.log('waiting keypress..')
      //   await waitingKeypress();
      //   console.log('good job!')
      // }
    });
  }
}
