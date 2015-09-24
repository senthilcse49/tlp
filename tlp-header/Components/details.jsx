import React from 'react/addons'

/*
 * React Component "TLPDetails"
 * Functions: render , function responsible for creating the DOM elements like team title, 
 * and the description of the team
 * This is a subcomponent of HeaderContainer and wrapped inside subHeader
 */
export default class TLPDetails extends React.Component {
  /* Function render
   * returns the template for TLP Deatils which contains the title and the description 
   */ 
  render () {
    return (
      <section  >
        <h4 className = "tlpTitle">{this.props.title}</h4>
        <p className = "tlpDesc" >{this.props.description.head}</p>
      </section>
    )
  }

}

