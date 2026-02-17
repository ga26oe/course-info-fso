const CourseList = ({course}) => {
  return (
    <div>
  <Header course={course} />
    

    </div>
    
  )
}

const Header = ({course}) => {
  return (
    <div>
      {course.map((course, index) => (
        <li key={index}>
          <h1>{course.name}</h1>
        </li>
      ))}
    </div>
  )
}

const Part = ({props}) => {
  console.log("Part Component Props =");
  console.log(props.name, props.exercises);
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  console.log("Content Component Props = ");
  console.log(parts);
  return (
    <div>
      {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} />
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
      <div> Total Number of Exercises {total}</div>
    </>
  );
};

const Course = ({courses}) => {
  console.log("Course Component Props");
  console.log(courses);
  return (
    <>
      <CourseList course={courses} />

    </>
  );
};

export default Course;
