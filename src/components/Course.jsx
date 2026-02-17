const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ name, exercises }) => {
  console.log("Part Component Props =");
  console.log(name, exercises);
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  console.log("Content Component Props = ");
  console.log(parts);
  return (
    <div>
      {parts.map((part, index) => (
        <div key={index}>
          <Part name={part.name} exercises={part.exercises} />
        </div>
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  console.log("Total Component Props =");
  console.log(parts);
  const total = parts.reduce((acc, item) => (acc += item.exercises), 0);

  return (
    <>
      <h3> Total Number of Exercises {total}</h3>
    </>
  );
};

const CourseList = ({ courses }) => {
  return (
    <div>
      {courses.map((course, index) => (
        <div key={index}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts}/>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
