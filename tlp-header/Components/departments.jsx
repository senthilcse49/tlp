import React from 'react/addons'

/*
 * React Component "TLPDeparments"
 * Functions: render , function responsible for creating the DOM elements with list of 
 * <a> tags containing link and title of department.
 * Its a subcomponent of HeaderContainer, wrapped inside subHeader
 */
export default class TLPDepartments extends React.Component {
  /* Function render
   * returns the template for TLP Departments which contains the links for departments
   */     
  render () {
    let dpts = this.props.departments
    if (dpts.length > 0) {
      return (
        <section className = "tplDepartments">
          <nav>
            <ul> {
              //Iterator for departments    
              dpts.map(function (dpt) {
                return (
                  <li 
                    className = "tlpDepartment"
                    key = {dpt.departmentURL}>
                    <a 
                      href = {dpt.departmentURL}
                      title = {dpt.title}>{dpt.name}
                    </a>
                  </li>
                )
              })
            }
            </ul>
          </nav>
        </section>)
    } else {
      //return empty departmentName if the there is no departments available
      return (<section className = "tplDepartments" ></section>)
    }
  }
}

