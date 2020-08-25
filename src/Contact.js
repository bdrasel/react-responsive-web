import React, { useState } from 'react';

const Contact = () => {

  const [Data, setData] = useState({
    fullName: '',
    email: '',
    number: '',
    message: ''
  })

  const InputEvent = (event) => {
    const { name, value } = event.target
    setData((preVal) => {
      return {
        ...preVal,
        [name] : value
      }
    })
  }


  const formSubmit = (e) => {
    e.preventDefault()
    alert(
      `Name: ${Data.fullName}, Email: ${Data.email}, Phone: ${Data.number}, Message: ${Data.message}`
    )
  }

  return (
    <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                      <label for="name" className="form-label">Name</label>
                      <input type="text" placeholder="Enter Name Here"
                       className="form-control" id="name"
                       name="fullName"
                       value={Data.fullName}
                       onChange={InputEvent}
                       />
                    </div>
                    <div className="mb-3">
                      <label for="em" className="form-label">Email address</label>
                      <input type="email"  placeholder="Email address"
                       className="form-control" id="em"
                       name="email"
                       value={Data.email}
                       onChange={InputEvent}
                       />
                    </div>
                    <div className="mb-3">
                      <label for="number" className="form-label">Number</label>
                      <input type="number" placeholder="Phone Number"
                       className="form-control" id="number"
                       name="number"
                       value={Data.number}
                       onChange={InputEvent}
                       />
                    </div>
                    <div className="mb-3">
                      <label for="message" className="form-label">Message</label>
                      <textarea className="form-control"
                       id="message"
                       name="message"
                       value={Data.message}
                       onChange={InputEvent}
                       ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
              </div>
          </div>
        </div>
    </>
  )
}

export default Contact;