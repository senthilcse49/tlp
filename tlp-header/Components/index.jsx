import React from "react/addons"
import TLPBanner from "./banner.jsx"
import TLPDetails from "./details.jsx"
import TLPDepartments from "./departments.jsx"
/*
 * React Component "TLPHeaderContainer"
 * Functions: getInitialState (called before the render function), 
 * render(function responsible for creating the DOM elements)
 * Components included: TLPHeader, TLPDetails, TLPDeparments
 * @return React Component TLPHeaderContainer
 */


export default class TLPHeader extends React.Component {
  constructor (props) {
    // Returning the header prototype object required for the initial rendering without any error 
    super(props)  
    this.state= {tlp: props.tlp}
   
  }
  
  /* Function render
   * returns the template for TLP Header Container which includes React components like TLPBanner,
   * TLPDetails and   TLPDepartments
   */

  render () {
    //Checking if banner data is available on the response  
    //if it is available then Component will render TLPBanner
    if (this.state.tlp.banners && this.state.tlp.banners.length > 0 && 
      this.state.tlp.banners[0].url) {
      // Including another React component "Header","TLP Details" and "TLP Departments"   
      return (
        <section className = "tlpHeader">
          <TLPBanner 
            name = {this.state.tlp.name} 
            logo = { this.state.tlp.logos}
            banners = {this.state.tlp.banners}
          />
          <section className = "tlpDetails">
            <TLPDetails
              description = {this.state.tlp.description}
              title = {this.state.tlp.name}
            />
            <TLPDepartments departments = {this.state.tlp.departmentInfo.departments} />
          </section>
        </section>
      )
    } else {
      // Including another React component "TLP Details" and "TLP Departments"   
      return (
        <section className = "tlpHeaderContainer">
          <section className = "tlpDetails">
            <TLPDetails 
              description = {this.state.tlp.description}
              title = {this.state.tlp.name}
            />
            <TLPDepartments departments = {this.state.tlp.departmentInfo.departments} />
          </section>
        </section>
      )
    }
  }
}


