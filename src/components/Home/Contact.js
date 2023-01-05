import React from 'react';
import emailjs from 'emailjs-com';
import { success } from 'daisyui/src/colors';

const Contact = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_3o8zsfr','template_qojkvke',e.target)
    .then(res=>{
      console.log(success)
    })
    .then(err =>{
      console.log(err)
    })
  }
  return (
    <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold text-amber-400">Hey THERE!</h1>
        <p class="py-6 text-xl text-amber-400">Did you have fun looking around? Anything I can improve? Leave me a message.</p>
      </div>
   <form onSubmit={sendEmail}>
   <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text text-amber-400">Name</span>
            </label>
            <input type="text" name='name' class="input input-warning text-xl" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-amber-400">Email</span>
            </label>
            <input type="text" name='user_email' class="input input-warning text-xl" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-amber-400">Your Opinion</span>
            </label>
            <textarea type="text" name='message' class="textarea textarea-warning text-xl" />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-wide btn-outline btn-warning">Submit</button>
          </div>
        </div>
      </div>
   </form>
    </div>
  </div>
  );
};

export default Contact;