import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";


function App() {
  const course = "Half Stack application development";
  
  const parts =[
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
     <Header course={course} />
     <Content parts={parts} />
     <Total parts={parts} />
    </div>
  );
}

export default App;
