import React from 'react'
import WorkTile from './WorkTile'
import WorkTileOut from './WorkTileOut'
import PlayTile from './PlayTile'
import PlayTileIn from './PlayTileIn'


class Work extends React.Component {
  render() {
    return (
    <section>
        <h1>Recent works</h1>
        <WorkTile title='CrowdScores' info='Mobile application' summary='CrowdScores brings you the fastest live scores. It is a social network which allows fans to share in-match events and opinion. Running on both iOS and Android.' img='images/preview/crowdscores-app.jpg' link='/CrowdScores'/>
        <WorkTile title='YunoJuno' info='Web application' summary='YunoJuno connects the best freelancers with great companies. Employers work directly with freelancers with YunoJuno managing contact and payment.' img='images/preview/yunojuno.jpg' link='YunoJuno'/>
        <WorkTile title='QuidCo' info='Mobile application' summary='Quidco is the number one cashback service. Partnering with retailers to help consumers earn cashback every year.' img='images/preview/quidco.jpg' link='Quidco'/>
        <WorkTile title='Suggestv' info='Web application' summary='Suggestv is the inventor of semantic video distribution. Suggestv brings together content sellers and publishes creating a marketplace for online video.' img='images/preview/suggestv-platfom.jpg' link='Suggestv'/>
        <WorkTile title='Numilli' info='Mobile & static site' summary='Numilli makes it easy to securely buy and sell bitcoins, on the go using mobile, web and ATM’s  - under development' img='images/preview/numilli-site.jpg' link='Numilli'/>
        <WorkTileOut title='Vivy' info='Mobile application' summary='Vivy is a electronic health record. <All></All> medical documents can be found on your phone - encrypted and visible only to you' img='images/preview/vivy.png' link='https://vivy.com'/>
        <h1>Personal projects</h1>
        <WorkTileOut title='Deliverate.co.uk' info='Web application' summary='Front-end for a Delivery rating web app showing the top-rated takeaways in your local area.' img='images/preview/deliverate.svg' link='http://deliverate.co.uk/'/>
        <WorkTileOut title='Working-out.design' info='Content management system' summary='Collection of the best free co-working spots in London. Why not submit a location?' img='images/preview/working-out.svg' link='https://working-out.design/'/>
        <WorkTileOut title='Interactive résumé' info='Javascript resume template' summary='Interactive CV, receives content via a JSON file and displays it dynamically within a template.' img='images/preview/cv.svg' link='https://github.com/james-ciclitira/resume'/>
        <WorkTile title='CSS gradient' info='Interactive CSS gradients' summary='CSS for a number of gradients, simplely click to download' img='images/preview/gradient.svg' link='Gradient'/>
    </section>
    )
  }
}
export default Work

