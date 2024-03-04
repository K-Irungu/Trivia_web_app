import React from 'react'
import "../main.css"
import right_arrow from "../right_arrow.png"
import left_arrow from "../left_arrow.png"

const Main = () => {
  return (
    <div className='main_container'>




        <div className="left_arrow">
          <a href="/"><img src="" alt="left_arrow_logo"></img></a>
        </div>

        <div className="center">
          <h2>Your Path to Trivia Mastery begins Now</h2>

          <p>The easiest way to make/take quizes online for free</p>

          <div className="content_container">

            {/* Options to take or make quiz */}
            <div className="content">

              <button className="take_quiz">Browse quizzes </button>
              <button className="make_quiz">Make your own quiz </button>


            </div>
          </div>

        </div>

        <div className="right_arrow">
          <a href="/"><img src="" alt="right_arrow_logo"></img></a>
        </div>
      </div>



  )
}


export default Main