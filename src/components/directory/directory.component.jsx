import React from 'react';

import Items from '../items/items.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'KOCHI',
          imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/f0/eb/backwater-tourism.jpg?w=1000&h=-1&s=1',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'HYDERABAD',
          imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/01/85/33/7e/charminar-the-brand-of.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'BANGALORE',
           imageUrl: 'https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2019/09/shutterstock_654767857.png',
          id: 3,
          linkUrl: ''
        }
      ]
    };
  }


  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Items key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

