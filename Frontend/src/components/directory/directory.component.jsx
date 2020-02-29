import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'AI ECONOMICS',
          imageUrl: 'https://img1.goodfon.com/wallpaper/big/3/6b/coins-economy-paper.jpg',
          id: 1,
          linkUrl: 'AI-Economics'
        },
        {
          title: 'AI TRADE ANALYTICS',
          imageUrl: 'https://wallpaperplay.com/walls/full/a/7/a/117889.jpg',
          id: 2,
          linkUrl: 'AI-TRADE_ANALYTICS'
        },
        {
          title: 'AI DEMOGRAPHY',
          imageUrl: 'https://i.pinimg.com/originals/35/b9/37/35b937b8d8741605c46c15223916b030.png',
          id: 3,
          linkUrl: 'AI-DEMOGRAPHY'
          
        },
        {
          title: 'AI INDUSTRIAL RESEARCH',
          imageUrl: 'https://images.unsplash.com/photo-1458040937381-49c067dfd49a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          id: 4,
          linkUrl: 'AI-INDUSTRIAL_RESEARCH'
        },
        
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
export default Directory;
