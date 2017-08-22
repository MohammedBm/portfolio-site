import React from 'react'
import Social from './Social'


class Landing extends React.Component {
  render() {
    return (
<div>
  <section className='overflow-hidden' >
      <div className='mw8 center db pt2'>
          <div className="dib v-top w-50-ns w-100 mt4-ns pa0-ns pa3">
          <h1 className='ma0 f2-ns f2 dib fw2 pt4 pt0' style={{lineHeight: '1.3'}}>
          Freelance Product Designer. Previously at
          <a target='blank' className='no-underline dim' href='https://www.yunojuno.com/'> YunoJuno</a>,
          <a target='blank' className='no-underline dim' href='https://www.sugges.tv/'> Suggestv</a> &
          <a target='blank' className='no-underline dim' href='http://crowdscores.com/'> Crowdscores.</a>
          </h1>
          <a className="f6 grow no-underline ph4 pv3 mt4 dib bg-black white mt5 shadow-4" style={{borderRadius:'6'}} href="mailto:jciclitira@gmail.com">Get in touch</a>
          <Social/>
        </div>
        <div className='w-50 dib-ns dn'>
        <img className='w-70 ml5' src='images/app.svg'/>
        </div>
      </div>
</section>
<div className='mw8 db center mt5 mb5 overflow-auto'>
<article className='w-50-ns w-100 dib-ns db ph0-ns ph2'>
<h3 className='fw4'>About</h3>
<p className='measure fw3'>I creating beautiful, usable interfaces through solid design-thinking and thoughtful research. Specialising in mobile & web design with experience in front-end development.</p>
</article>
<article className='w-40-ns w-100 dib v-top fr ph0-ns ph2'>
<h3 className='fw4'>What I Do</h3>
<ul className='ma0 f6'>
<li className="lh-copy pv1">UI/UX DESIGN</li>
<li className="lh-copy pv1">MOBILE APPS</li>
<li className="lh-copy pv1">PROTOTYPING</li>
<li className="lh-copy pv1">USER TESTING</li>
<li className="lh-copy pv1">INTERACTIONS DESIGN</li>
<li className="lh-copy pv1">FRONT-END DEVELOPMENT</li>
</ul>
</article>
</div>
</div>
    )
  }
}
export default Landing


