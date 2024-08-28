import Student from "./Student.jsx"

function App() {
  return(
    <>
      <Student name="spongebob" age={17} isStudent={true}/>
      <Student name="patrick" age={42} isStudent={false}/>
      <Student/>
      <Student name="squidward"/>
    </>
  );
}

export default App