import React from 'react'
import '../css/settings.css'
const Settings = () => {
  return (
    <div className={'settingsPageContaienr'}>
      <h2>
        Settings
      </h2>
      <div className='settingsContentContainer'>
        <form>
          <div>
            <label for="username" >New Username</label>
            <input type="text"  name="username" id="username" required="" class="input"/>
            <label for="password" class="label">New Password</label>
            <input type="password"  name="password" id="password" required="" />
          </div>
          <div className='buttonContainer'>
            <button>
                Update
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Settings