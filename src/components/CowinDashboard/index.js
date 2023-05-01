// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiConstantsStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiConstantsStatus.initial,
    CoverageList: [],
    byAgeList: [],
    byGenderList: [],
  }

  componentDidMount() {
    this.getCowinVaccinationDetails()
  }

  getCowinVaccinationDetails = async () => {
    this.setState({apiStatus: apiConstantsStatus.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const last7DaysVaccination = data.last_7_days_vaccination
      const updatedLast7DaysVaccinationData = last7DaysVaccination.map(
        eachItem => ({
          vaccineDate: eachItem.vaccine_date,
          dose1: eachItem.dose_1,
          dose2: eachItem.dose_2,
        }),
      )
      const vaccinationByAgeData = data.vaccination_by_age
      const vaccinationByGender = data.vaccination_by_gender
      console.log(data)
      this.setState({
        apiStatus: apiConstantsStatus.success,
        CoverageList: updatedLast7DaysVaccinationData,
        byAgeList: vaccinationByAgeData,
        byGenderList: vaccinationByGender,
      })
    } else {
      this.setState({apiStatus: apiConstantsStatus.failure})
    }
  }

  renderHeader = () => (
    <>
      <nav className="nav-bar">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
        />
        <h1 className="website-logo-heading">Co-WIN</h1>
      </nav>
      <h1 className="main-heading">CoWIN Vaccination in India</h1>
    </>
  )

  renderLoaderView = () => (
    <div className="cowin-dashboard-bg-container">
      {this.renderHeader()}
      <div data-testid="loader" className="loader-container">
        <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
      </div>
    </div>
  )

  renderFailureView = () => (
    <div className="cowin-dashboard-bg-container">
      {this.renderHeader()}
      <div className="content-container">
        <img
          className="failure-view-image"
          alt="failure view"
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        />
        <h1 className="failure-view-heading">Something went wrong</h1>
      </div>
    </div>
  )

  renderSuccessView = () => {
    const {CoverageList, byAgeList} = this.state
    console.log(CoverageList)
    return (
      <div className="cowin-dashboard-bg-container">
        {this.renderHeader()}
        <VaccinationCoverage CoverageList={CoverageList} />
        <VaccinationByAge byAgeList={byAgeList} />
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstantsStatus.success:
        return this.renderSuccessView()
      case apiConstantsStatus.failure:
        return this.renderFailureView()
      case apiConstantsStatus.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }
}

export default CowinDashboard
