import React from 'react/addons'

/*
 * React Component "TLPBanner"
 * Functions: render , function responsible for creating the DOM elements like logo, 
 * brandname and the banner for the header
 * This is a subcomponent of HeaderContainer, wrapped inside tlpHeaderContainer
 */

export default class TLPBanner extends React.Component{
  /* Function render
   * returns the template for TLP Header which contain the banner, logo and the team name
   */    
  render () {
    //have to add the logic for Deciding banner depends on screen width 
    //currently hardcoded with the first image  
    let bannerObj = this.props.banners[0]
    let logoObj = this.props.logo[0]
    return (
      <section className = "tlpBanner" >
        <img src = {bannerObj.url} className = "tlpBannerImg" alt = {bannerObj.name} />
        <section className = "tlpBannerContent">
          <img src = {logoObj.url} className = "tlpLogoImg" alt = {logoObj.name}/>
          <label className = "tlpTeamName">{this.props.name}</label>
        </section>
      </section>
    )
  }
}
