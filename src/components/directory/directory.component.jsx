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
          imageUrl: 'https://static.toiimg.com/photo/71775173.cms',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'HYDERABAD',
          imageUrl: 'https://etimg.etb2bimg.com/photo/73411431.cms',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'BANGALORE',
          imageUrl: 'https://hindi.nativeplanet.com/img/2018/05/vidhansouda-1526623381.jpg',
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

