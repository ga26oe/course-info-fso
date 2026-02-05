const Header = ({name}) => {
  console.log("Header Component Props");
  console.log(name);
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

const Part = (props) => {
  console.log("Part Component Props =");
  console.log(props.name, props.exercises);
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
};

const Content = ({parts}) => {
  console.log("Content Component Props = ");
  console.log(parts);
  return (
    <div>
      {parts.map(part => <Part name={part.name} exercises ={part.exercises} />)}
    </div>
  );
};

const Total = (props) => {
  console.log("Total Component Props =");
  console.log(props);

  return (
    <>
      <div>
        {" "}
        Number of Exercises{" "}
        {props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </div>
    </>
  );
};

const Course = (props) => {
  
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts} />
    </>
  );
};

export default Course;
