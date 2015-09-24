// mocking header.js and jsons 
jest.dontMock('../../Components/header.jsx')
jest.dontMock('../test-data/header.json')
jest.dontMock('../test-data/header1.json')
jest.dontMock('../test-data/header2.json')

// acquiring the required files to test the component TlpHeader 
var React = require('react/addons')
var TLPHeaderContainer = require('../../Components/header.jsx')
var $ = require('jquery')
var TestUtils = React.addons.TestUtils
var tlps = []
// pushing test jsons data to array for testing through iteration
tlps.push(require('../test-data/header.json'))
/* TLP test cases start */
describe('TLP Header test cases', function () {
  // rendering React Component in Testutil with an array of local data jsons    
  for (var tlpIndex = 0; tlpIndex < tlps.length; tlpIndex++) {
    var tlp = tlps[tlpIndex]
    // creating react components with the tlp data coming from local json data
    var component = TestUtils.renderIntoDocument(React.createElement(TLPHeaderContainer, {tlp: tlp}))

    // Verifying the brandname rendered with the brand name in the json object
    describe('Banner should collapse/expand depends on banner url data presence'+tlpIndex,function () {
      if(tlp.banners && tlp.banners.length>0 && tlp.banners[0].url) {

        // Verifying the banner url in json with the rendered image url        
        it('Banner url should be rendered correctly', function () {
          // Getting the React object of banner img
          var bannerImg = TestUtils.findRenderedDOMComponentWithClass(
            component, 'tlpBanner')
          expect(React.findDOMNode(bannerImg).getAttribute('src')).toEqual(tlp.banners[0].url)
        })

        // Verifying the brandname rendered with the brand name in the json object
        it('Team name should be rendered correctly', function () {
          // Getting the React object of brand name
          var brandName = TestUtils.findRenderedDOMComponentWithClass(
                component, 'tlpTeamName')
          expect(React.findDOMNode(brandName).textContent).toEqual(tlp.name)
        })

        // Verifying the logo url in json with the rendered image url
        it('Team Logo should be rendered correctly', function () {
          // Getting the React object of logo img
          var logoImg = TestUtils.findRenderedDOMComponentWithClass(
                component, 'tlpLogoImg')
          expect(React.findDOMNode(logoImg).getAttribute('src')).toEqual(tlp.logos[0].url)
        })
      } else {
        if (!$('.tlpBanner') && $('.tlpBanner').length > 0) {
          //throw test case fail when banner is present even when the banner data is not available    
          expect(false).toEqual(true)
        }
      }
    })

    // Verifying the team title in json with the rendered text
    it('Team Title should be rendered correctly', function () {
      // Getting the React object of title class
      var titleText = TestUtils.findRenderedDOMComponentWithClass(
                component, 'tlpTitle')
      expect(React.findDOMNode(titleText).textContent).toEqual(tlp.name)
    })

    // Verifying the team description in json with the rendered text
    it('Team Description should be rendered correctly', function () {
      // Getting the React object of tlpDesc class
      var descText = TestUtils.findRenderedDOMComponentWithClass(
                component, 'tlpDesc')

      expect(React.findDOMNode(descText).textContent).toEqual(tlp.description.head)
    })

    // Verifying the Departments link text and href  in JSON with react rendered component
    it('Department link href and text should be rendered correctly', function () {
      var departmentNo = 0
      // Parsing through each department with its class name and verifying each link for href and title
      TestUtils.scryRenderedDOMComponentsWithClass(component, 'tlpDepartment').map(function (item) {
        var aElem = TestUtils.findRenderedDOMComponentWithTag(
                item, 'a')
        // verifying the href attributes
        expect(React.findDOMNode(aElem).getAttribute('href')).toEqual(tlp.departmentInfo.departments[departmentNo].departmentURL)
        // verifying the title attributes
        expect(React.findDOMNode(aElem).getAttribute('title')).toEqual(tlp.departmentInfo.departments[departmentNo].title)               
        //verifying the text content
        expect(React.findDOMNode(aElem).textContent).toEqual(tlp.departmentInfo.departments[departmentNo].name)
        departmentNo++
      })
    })
  }
})
