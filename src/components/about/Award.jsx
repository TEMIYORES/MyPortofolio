import React from 'react'
import './award.css'

const Award = () => {
  return <div className="award_conatiner d-flex align-items-center flex-wrap justify-content-between">
      <div className="award_item ">
          <AwardItem 
          year='2021' 
          title='Best Android Developer' 
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, consequatur?'
          />
      </div>

      <div className="award_item ">
          <AwardItem 
          year='2021' 
          title='Best Android Developer' 
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, consequatur?'
          />
      </div>

      <div className="award_item ">
          <AwardItem 
          year='2021' 
          title='Best Android Developer' 
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, consequatur?'
          />
      </div>

      <div className="award_item ">
          <AwardItem 
          year='2021' 
          title='Best Android Developer' 
          text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, consequatur?'
          />
      </div>

  </div>
}

const AwardItem =({year, title, text})=>{
  return  <div className="single_award ">
          <div className="award_year">{year}</div>
          <h6 className="award_title"> {title} - {" "}<span>{text}</span></h6>
      </div>
}

export default Award