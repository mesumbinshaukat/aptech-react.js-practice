import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  

  return (
    <>
     <div className='container'>
     <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlForfor="exampleCheck1">Check me out</label>
  </div>

  <div className="form-floating mb-3">
  <textarea name="postContent" rows={4} cols={40} class="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style={{height: 100}}/>
  <label htmlFor="floatingTextarea2Disabled">Comments</label>
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     </div>
    </>
  )
}

export default App
