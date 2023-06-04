import React from 'react'

function Home() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',margin:"auto"}}>
    <h1 className='welcome' style={{color: "black"}}>Welcome to Student Teacher Application</h1>
    <img style={{height:'500px'}} src="https://www.edsys.in/wp-content/uploads/How_blended_learning_can_improve_student-teacher_relations.png" aly="student-teacher" />
    </div>
  )
}

export default Home