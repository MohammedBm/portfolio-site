import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImg from '../components/CaseStudyImg'
import Footer from '../components/Footer'



const Suggestv = () =>
<div className='pt5'>
<CaseStudyAbout
about='Suggestv works with publishers to provide relevant video content. A publisher includes a script within a article, allowing Suggestv to find and place relevant video content.'
role='My role comprised the design and development of the web app. Its primary function was to enable users to customise and monitor their video content. The role included creating potential use cases and output designs to fit within these.'
clients='Product Designer and Front-End Developer'
job='UI/UX Research, Wireframing,  UI/UX Design & Front-end development'
/>
<section>
  <div className='pv4 ma0 ph5-ns ph2'>
  <img className='w-50' src='images/suggestv/usecase.png' />
  <img className='w-50' src='images/suggestv/usecase2.png' />
  <img className='w-50' src='images/suggestv/usecase3.png' />
  <img className='w-50' src='images/suggestv/usecase4.png' />
  </div>
  <h1 className='pv4 ma0 ph5-ns ph2'>Final designs</h1>
  <CaseStudyImg img='images/suggestv/Search.png'/>
  <CaseStudyImg  img='images/suggestv/Search-onclick.png'/>
  <CaseStudyImg  img='images/suggestv/Demo.png'/>
  <CaseStudyImg  img='images/suggestv/Reports.png'/>
  <CaseStudyImg  img='images/suggestv/Setting.png'/>
  <CaseStudyImg  img='images/suggestv/Account.png'/>
</section>
<Footer/>
</div>
export default Suggestv