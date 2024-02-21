
import { useState } from "react";

export default function ContactMe() {



  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
        Have a question or project in mind? I'm here to help! Whether it's collaboration, job opportunities, or just to say hello, I'd love to hear from you
        </p>
      </div>
      <form action="https://formsubmit.co/tahargriach@gmail.com" method="POST">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
          
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
        
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
  
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
  

              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
           id="choose-topic"
           name="topic"
          required
          className="contact--input text-md" >
            <option value={""}>Choose </option>
            <option value={"Project Inquiry"}>Project Inquiry </option>
            <option value={"Collaboration "}>Collaboration </option>
            <option value={"General Question"}> General Question</option>
            <option value={"Feedback"}>Feedback</option>
            <option value={"Job Opportunity"}>Job Opportunity</option>
            <option value={"Other"}>Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
          name="message"
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
       
    </section>
  );
}
