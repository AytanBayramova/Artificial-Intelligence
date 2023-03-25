import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import emailjs form '@emailjs/browser'; 

const Contact = () => {

  const formElementiRef = useRef()

  const mesajiGonder = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_k6e4l3d', 'template_s6b21bd', formElementiRef.current, 'KsNngI_zhsg7Et_9l')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      formElementiRef.current.reset()
  }
  return (
    <>
      <h1 className='text-white  p-5 mt-5 text-center display-1'>Contact us</h1>
      <form className='container' ref={formElementiRef} onSubmit={mesajiGonder}>
        <div class="mb-3">
          <label htmlFor="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Enter your name, please" name='name' />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control p-3" id="exampleFormControlInput1" placeholder="name@example.com" name='mail' />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleFormControlInput1" class="form-label">Phone</label>
          <input type="text" class="form-control p-3" id="exampleFormControlInput1" placeholder="Enter your phone number" name='phone_number' />
        </div>
        <div className="mb-3">
          <input type="text" class="form-control p-3" name='New messsage' placeholder='Add a subject heading' />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Email adress
          </label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
        </div>
        <button type='submit' className='btn btn-secondary'>Send mail</button>
      </form>
    </>
  );
};

export default Contact