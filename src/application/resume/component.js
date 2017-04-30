import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import SkillCard from './children/skill_card';
import Jumbotron from './children/jumbotron';

export default ({ onSearchTermChange, skills }) => {
  const renderSkills = () =>
    skills.map((skill, index) => <SkillCard skill={skill} index={index} key={index} />);

  return (
    <main className="resume">
      <Jumbotron />
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Resume</h1>
          </div>
        </div>

        <div className="row">
          <div className="top class col-12">
            <input
              className="form-control resume-searchbar"
              onChange={onSearchTermChange}
              placeholder="Type a skill and see if I have it!"
            />
          </div>
        </div>

        <div className="skills">
          <CSSTransitionGroup
            component="div"
            transitionAppear
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionName="card-transition"
          >
            {renderSkills()}
          </CSSTransitionGroup>
        </div>
      </div>
    </main>
  );
};
