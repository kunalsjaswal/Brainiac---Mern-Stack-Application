import React from "react";
import CourseCard from "../components/CourseCard";
// import EmptyCourseCard from "../components/EmptyCourseCard";
import {
  CourseDivContainer,
  LearningDivContainer,
} from "../styledComponents/LearningStyle";

// icons

const colors = [
  "#1de931cd",
  "#f453e9cc",
  "#a44af2ce",
  "#593cfea6",
  "#a44af2ce",
  "#1de931cd",
];

const Learning = () => {
  const courses = [
    {
      courseName: "HTML",
      progress: 0,
      icon: "img/learning/html.svg",
      // desc: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. ",
      desc: "The HyperText Markup Language is the standard markup language for documents Structure",
      status: true,
    },
    {
      courseName: "CSS",
      progress: 75,
      icon: "img/learning/css.svg",
      // desc: "Cascading Style Sheets is a style sheet  used for describing the presentation of a document written in a markup language such as HTML or XML.",
      desc: "Cascading Style Sheets is a style sheet used for Designing HTML Page.",
      status: true,
    },
    {
      courseName: "JAVASCRIPT",
      progress: 75,
      icon: "img/learning/javascript.svg",
      // desc: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
      desc: "JavaScript, often abbreviated as JS, is a programming language used to Implement Logic.",
      status: true,
    },
    {
      courseName: "JAVA",
      progress: 75,
      icon: "img/learning/java.svg",
      // desc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      desc: "Java is a high-level, class-based, object-oriented programming language for Android Development",
      status: true,
    },
    {
      courseName: "C++",
      progress: 0,
      icon: "img/learning/c++.svg",
      // desc: "C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'",
      desc: "C++ is a general-purpose programming language Mainly used of Competitive Programming.",
      status: true,
    },
    {
      courseName: "Coming Soon",
      icon: "img/learning/man.png",
      desc: "Our Team will be launching a new Course based on current technology. So, be prepared",
      status: false,
    },
  ];
  return (
    <LearningDivContainer>
      {/* <div className="learning-heading">
        <h1>Courses to Enroll</h1>
      </div> */}
      <CourseDivContainer>
        {courses.map((val, index) => {
          return (
            <CourseCard
              key={val.index}
              color={colors[index]}
              name={val.courseName}
              icon={val.icon}
              progress={val.progress}
              desc={val.desc}
              status={val.status}
            />
          );
        })}
      </CourseDivContainer>
    </LearningDivContainer>
  );
};

export default Learning;
