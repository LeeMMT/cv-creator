import React, { Component } from 'react'
import uniqid from 'uniqid'
import StoredJobInfo from './StoredJobInfo'

class ExperienceInfoEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      companyName: '',
      positionTitle: '',
      positionStartDate: '',
      positionEndDate: '',
      roleDescription: '',
      id: uniqid(),
    }

    this.editMode = false
    this.editJob = this.editJob.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
  }

  editJob(e) {
    const id = e.target.getAttribute('data-key')
    const job = this.props.info.jobs.find((entry) => entry.id === id)
    this.setState({ ...job })
    this.editMode = true
  }

  cancelEdit() {
    this.setState({
      companyName: '',
      positionTitle: '',
      positionStartDate: '',
      positionEndDate: '',
      roleDescription: '',
      id: uniqid(),
    })
    this.editMode = false
  }

  render() {
    const { data, editingInfo, handleChange } = this.props
    let editing = this.editMode

    return (
      <fieldset>
        <legend>Experience Information</legend>
        <StoredJobInfo data={data.jobs} editJob={this.editJob} />
        <div className="two-col">
          <label htmlFor="companyName">Company Name:</label>
          <input id="companyName" name="companyName" data-object="job" value={editingInfo.companyName} onChange={handleChange}></input>

          <label htmlFor="positionTitle">Position Title:</label>
          <input id="positionTitle" name="positionTitle" data-object="job" value={editingInfo.positionTitle} onChange={handleChange}></input>

          <label htmlFor="positionStartDate">Start Date:</label>
          <input
            id="positionStartDate"
            name="positionStartDate"
            type="date"
            data-object="job"
            value={editingInfo.positionStartDate}
            onChange={handleChange}
          ></input>

          <label htmlFor="positionStartDate">End Date:</label>
          <input id="positionEndDate" name="positionEndDate" type="date" data-object="job" value={editingInfo.positionEndDate} onChange={handleChange}></input>

          <label htmlFor="mainTasks">Description of Role:</label>
          <textarea id="roleDescription" name="roleDescription" data-object="job" value={editingInfo.roleDescription} onChange={handleChange}></textarea>
        </div>
        <div className="add-and-edit-container">
          <button className={this.editMode ? 'cancel-edit-btn visible' : 'cancel-edit-btn'} type="button" onClick={this.cancelEdit}>
            Cancel edit
          </button>
          <div className="add-info-controls">
            <p className="pseudo-label">{editing ? 'Save' : 'Add job'}</p>
            <button id="add-job-btn" type="button" onClick={this.createJobObject}>
              <svg height="469.33333pt" viewBox="0 0 469.33333 469.33333" width="469.33333pt" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"
                  fill="#858585"
                />
              </svg>
            </button>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default ExperienceInfoEditor
