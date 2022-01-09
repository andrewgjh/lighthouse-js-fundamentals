const organizeInstructors = function (instructors) {
  let grouped= {};
  for (let instructor of instructors){
    let courseString = instructor.course;
    if (courseString in grouped){
      grouped[courseString].push(instructor.name);
    }else {
      grouped[courseString]= [instructor.name];
    }
  }
  return grouped;
};

console.log(organizeInstructors([{
    name: "Samuel",
    course: "iOS"
  },
  {
    name: "Victoria",
    course: "Web"
  },
  {
    name: "Karim",
    course: "Web"
  },
  {
    name: "Donald",
    course: "Web"
  }
]));
console.log(organizeInstructors([{
    name: "Brendan",
    course: "Blockchain"
  },
  {
    name: "David",
    course: "Web"
  },
  {
    name: "Martha",
    course: "iOS"
  },
  {
    name: "Carlos",
    course: "Web"
  }
]));

// const organizeInstructors = function (instructors) {
//   let grouped = instructors.reduce((accumlator, instructor) => {
//     accumlator[instructor.course] = [...accumlator[instructor.course]||[],instructor.name];
//     return accumlator;
//   },{});
//   return grouped;
// };