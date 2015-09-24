var isNode = typeof module !== 'undefined' && module.exports
var React = isNode ? require('react/addons') : window.React

/*
 * React Component "TLPHeaderContainer"
 * Functions: getInitialState (called before the render function), componentDidMount (invoked only  once after render function is executed),render(function responsible for creating the DOM elements)
 * Components included: TLPHeader, TLPDetails, TLPDeparments
 * @return React Component TLPHeaderContainer
 */

var TLPHeaderContainer = React.createClass({
  getInitialState: function () {
        // Returning the header prototype object required for the initial rendering without any error 
    return {
      tlp: this.props.tlp
    }
  },
  
  /* Function render
   * returns the template for TLP Header Container which includes React components like TLPHeader, TLPDetails and   TLPDepartments
   */

  render: function () {
    //Checking if banner data is available on the response if it is available, then template will render TLPHeader
    if (this.state.tlp.banners && this.state.tlp.banners.length > 0 && this.state.tlp.banners[0].url) {
      // Including another React component "Header","TLP Details" and "TLP Departments"   
      return (<section className = 'tlpHeaderContainer'>
                    <TLPHeader name = {this.state.tlp.name} logo = { this.state.tlp.logos}
                banners = {this.state.tlp.banners}/>
                <section className = 'tlpDetails'>
                    <TLPDetails description = {this.state.tlp.description} title = {this.state.tlp.name}/>

                    <TLPDeparments departments = {this.state.tlp.departmentInfo.departments}/>
                </section>
                </section>
            )
    } else {
      // Including another React component "TLP Details" and "TLP Departments"   
      return (<section className = 'tlpHeaderContainer'>
                <section className = 'tlpDetails'>
                    <TLPDetails description = {this.state.tlp.description} title = {this.state.tlp.name}/>

                    <TLPDeparments departments = {this.state.tlp.departmentInfo.departments}/>
                </section>
                </section>
            )
    }
  }
})

/*
 * React Component "TLPHeader"
 * Functions: render , function responsible for creating the DOM elements like logo, brandname and the banner for the header
 * This is a subcomponent of HeaderContainer, wrapped inside tlpHeaderContainer
 */

var TLPHeader = React.createClass({
  /* Function render
   * returns the template for TLP Header which contain the banner, logo and the team name
   */    
  render: function () {
    var bannerObj = this.props.banners[0]
    var logoObj = this.props.logo[0]
    return (
        <section className = 'tlpHeader' >
                <img src = {bannerObj.url} className = 'tlpBanner' alt = {bannerObj.name} />
                <section className = 'tlpHeaderContent'>
                    <section className = 'tlpLogo'>
                        <img src = {logoObj.url} className = 'tlpLogoImg' alt = {logoObj.name}/>
                    </section>
                    <section className = 'tlpTeamName'>{this.props.name}</section>
                </section>
            </section>
        )
  }
})

/*
 * React Component "TLPDetails"
 * Functions: render , function responsible for creating the DOM elements like team title, and the description of the team
 * This is a subcomponent of HeaderContainer and wrapped inside subHeader
 */
var TLPDetails = React.createClass({
  /* Function render
   * returns the template for TLP Deatils which contains the title and the description 
   */ 
  render: function () {
    return (<section className = '' >
            <h4 className = 'tlpTitle'>{this.props.title}</h4>
                <p className = 'tlpDesc' >{this.props.description.head}</p>
            </section>
        )
  }

})

/*
 * React Component "TLPDeparments"
 * Functions: render , function responsible for creating the DOM elements with list of <a> tags containing link and title of department.
 * Its a subcomponent of HeaderContainer, wrapped inside subHeader
 */
var TLPDeparments = React.createClass({
  /* Function render
   * returns the template for TLP Departments which contains the links for departments
   */     
  render: function () {
    var dpts = this.props.departments
    if (dpts.length > 0) {
      return (
        <section className = 'tplDepartments'>
          <nav>
            <ul>{
              //Iterator for departments    
              dpts.map(function (dpt) {
                return <li className = 'tlpDepartment'
                  key = {dpt.departmentURL}>
                    <a href = {dpt.departmentURL}
                    title = {dpt.title}>{dpt.name}</a>
                  </li>
              })
            }
            </ul>
          </nav>
        </section>)
    } else {
      //return empty departmentName if the there is no departments available
      return (<section className = 'tplDepartments' ></section>)
    }
  }

})

if (isNode) {
  module.exports = TLPHeaderContainer
}
