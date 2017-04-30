import React from 'react';

export default ({ skill, index }) => {
  const { title, description, stars } = skill;

  const renderFullStar = key => <i className="material-icons" key={key}>star</i>;
  const renderHalfStar = key => <i className="material-icons" key={key}>star_half</i>;

  const renderStars = () => {
    const totalStars = [];
    const floorStars = Math.floor(stars);
    for (let i = 0; i < floorStars; i++) {
      totalStars.push(renderFullStar(i));
    }

    if (stars % 1 === 0.5) {
      totalStars.push(renderHalfStar('half'));
    }

    return totalStars;
  };

  return (
    <article className="card skill-card" key={index}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-block">
        <p className="card-text">{description}</p>
        <p>{renderStars()}</p>
      </div>
    </article>
  );
};
