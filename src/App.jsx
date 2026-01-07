const Header = (props) => {
  console.log('Header Component Props')
  console.log(props);
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

const Part = (props) => {
  console.log('Part Component Props =')
  console.log(props)
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  console.log('Content Component Props = ')
  console.log(props)
  return (
    <div>
      <Part name={props.course.parts[0].name}  exercises={props.course.parts[0].exercises} />
    </div>
  );
};

const Total = (props) => {
  console.log('Total Component Props =')
  console.log(props)

  return (
    <>
      <div>
        {" "}
        Number of Exercises{" "}
        {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </div>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ]
}

  return (
    <>
      <Header course={course} />
      <Content parts = {course}/>
      <Total parts = {course}/>
    </>
  );
};

export default App;
