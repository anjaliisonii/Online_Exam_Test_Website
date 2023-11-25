// import logo from './logo.svg';
// import React,{Component} from 'react'
// import React, {useState} from 'react'
import React from 'react';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 
import Home from './components/Home';
import QuizInstructions from './components/quiz/Quizinstructions';
import Play from './components/quiz/Play'
import QuizSummary from './components/quiz/QuizSummary';
function App(){
  return (
    // <Home/>
    <Router>
      <Routes>
      <Route path="/" exact Component={Home}/>
      <Route path="/play/instructions" exact Component={QuizInstructions}/>
      <Route path="/play/quiz" exact Component={Play}/>
      <Route path="/play/quizSummary" exact component={QuizSummary} />

    </Routes>
    </Router>
  );
}
// app.js
const Question = require('./src/models/Question');
const QuestionService = require('./src/services/questionService');
const QuestionPaperGenerator = require('./src/utils/questionPaperGenerator');

// Initialize services
const questionService = new QuestionService();

// Sample questions
const question1 = new Question("What is the speed of light", "Physics", "Waves", "Easy", 5);
// Add more questions...

// Add questions to the store
questionService.addQuestion(question1);
// Add more questions...

// Generate Question Paper
const totalMarks = 100;
const difficultyDistribution = {
  "Easy": 20,
  "Medium": 50,
  "Hard": 30,
};

const questionPaper = QuestionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);
console.log(questionPaper);

// import User from './User'
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name:"Anjali"
//     }
//     console.warn("constructor")
//   }
//   componentDidMount(){
//     console.warn("componentDidMount")
//   }
//   render(){
//     console.warn("render")
//     return (
//       <div classNmae="App">
//         <h1> Component dis mount{this.state.name}</h1>
//         <button onClick={()=>{this.setState({name:Mitali})}}></button>
//       </div>
//     );
//   }
// }


//Constructor Life cycle
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       data:"Anil"
//     }
//   }
//   render(){
//     return (
//       <h1>Hello World {this.state.data}</h1>
//     )
//   }
// }
//render life cycle
// function App(){
//   const[name,setName]=React.useState("Anil")
//   return (
//     <div className="App">
//       <h1>Render Life cycle </h1>
//       <User name={name}/>
//       <button onClick={()=>setName("Anjali")}>Update Name</button>
//     </div>
//   );
// }


// import Home from './Home'
// import Login from './Login'
// import User from './User'
// function App(){
//   function getData(){
//     alert("hello from app")
//   }
//   // const data=true;
//   return (
//     <div className="App">
//       <h1>Pass function as Props</h1>
//       {/* <User/> */}
//       <User data={getData} />
//     </div>

    // <div className="App">
     
    //   <Home/>
      
    //   </div>

//   );
// }

// function App(){
//   const[status,setStatus]=React.useState(false)
//   return (
//     <div className="App">
//       {
//       status? <h1>It's me Anjali Soni I LOVE U</h1>:null
//       }
//       <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button>
//     </div>
    
//   )
// }
// function App(){
//   const [data,setData]=useState(null)
//   function getData(val){
//     console.warn(val.target.val)
//     setData(val.target.value)

//   }
//   return (
//     <div className="App">
//       <h1>Get input box</h1>
//       <h1>{data}</h1>
//       <input type="text" onChange={getData}/>
//     </div>
//   )
// }

// import Student from './Student'
// function App(){
//   return (
//     <div className="App">
//       <h1>Props in React : </h1>
//       <Student name={"Anjali"} email="anjalisoni102003@gmail.com" other={{address:'Delhi',mobile:"8381"}}/>
//       <Student name={"Akriti"} email="anjalisoni102003@gmail.com" other={{address:'Haryana',mobile:"8381"}}/>
//       <Student name={"Anshul"} email="anjalisoni102003@gmail.com" other={{address:'Noida',mobile:"8381"}}/>
//       <Student name={"Ajay"} email="anjalisoni102003@gmail.com" other={{address:'Kanpur',mobile:"8381"}}/>
      

//     </div>
//   );
// }
//import User from './User'
//State in the Class Component
// class App extends Component{
//   constructor(){
//     super();
//     this.state={
//       data:"Anjali"
//     }
//   }

// apple(){
//   this.setState({data:"Mitali"})
// }


// function App() {
//   const [data,setData]=useState(0)
//   function updateData(){
//     setData(data+1)

//   }
  // let data="Anjali Soni"
  // function Apllet(){
  //   data="My Father"
  //   alert(data)
  // }
  //render is used in class component
// render(){
//   return (
//     <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.apple()}>Press me!</button>
    
      
//     </div>
//   );
// }
// }

export default App;
