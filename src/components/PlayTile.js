import React from 'react'
import PropTypes from 'prop-types';


class PlayTile extends React.Component {
  render() {
    return (
<div className='w-third-ns w-100 dib'>
<div className='pa2'>
  <a className='no-underline pv2' href={this.props.link} >
  <div className='center tile'>
  <div className='w-100 ph2 pt3 pb2'>
  <img className='h1' src={this.props.type}/>
  <h3 className='ma0 fw5 secondary-text pl2 dib'>{this.props.title}</h3>

  </div>
<div className='pa2 dib relative'>
 <img className='hoverable' src={this.props.img} alt='Open source design'/>
  <div className='absolute download w-20' style={{left:'40%', top: '40%'}}>
  <img className='h3 o-30' src='images/download.svg'/>
  </div>
 </div>

</div>
</a>
</div>
</div>

    )
  }
}

PlayTile.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};



export default PlayTile