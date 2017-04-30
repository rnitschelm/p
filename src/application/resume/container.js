import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResumeComponent from './component';
import * as actions from './action_creators';
import skills from './skills.json';

const mapStateToProps = ({ resume }) => {
  const regExp = new RegExp(resume.searchTerm, 'i');
  const filteredSkills = resume.skills.filter(skill => regExp.test(skill.title));

  return { ...resume, skills: filteredSkills };
};

@connect(mapStateToProps, { ...actions })
export default class ResumeContainer extends Component {
  constructor(props) {
    super(props);

    this.searchTermChange = ::this.searchTermChange;
  }

  componentWillMount() {
    this.props.loadSkills(skills);
  }

  searchTermChange(event) {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <ResumeComponent
        {...this.props}
        skills={this.props.skills}
        onSearchTermChange={this.searchTermChange}
      />
    );
  }
}
