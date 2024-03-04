import React from 'react'
import Row from '../ui/Row'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm'

const Settings = () => {
  return (
    <>
     
        <Row>
          <h1>User settings</h1>
          <UpdateSettingsForm />
        </Row>
    </>
   
  )
}

export default Settings