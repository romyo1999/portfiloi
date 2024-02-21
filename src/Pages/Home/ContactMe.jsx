import React, { useState } from 'react';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message,
      }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <form onSubmit={handleSubmit} netlify>
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactMe;




// import { useState } from "react";

// export default function ContactMe() {



//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//         Have a question or project in mind? I'm here to help! Whether it's collaboration, job opportunities, or just to say hello, I'd love to hear from you
//         </p>
//       </div>
// {/*       <form className="contact--form--container" name="contact" method="POST"     data-netlify="true">
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
          
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               required
//             />
//           </label>
//           <label htmlFor="last-name" className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input
//               type="text"
        
//               className="contact--input text-md"
//               name="last-name"
//               id="last-name"
//               required
//             />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
  
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">phone-number</span>
//             <input
  

//               type="number"
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//             />
//           </label>
//         </div>
//         <label htmlFor="choode-topic" className="contact--label">
//           <span className="text-md">Choose a topic</span>
//           <select
//            id="choose-topic"
//            name="topic"
//           required
//           className="contact--input text-md" >
//             <option value={""}>Choose </option>
//             <option value={"Project Inquiry"}>Project Inquiry </option>
//             <option value={"Collaboration "}>Collaboration </option>
//             <option value={"General Question"}> General Question</option>
//             <option value={"Feedback"}>Feedback</option>
//             <option value={"Job Opportunity"}>Job Opportunity</option>
//             <option value={"Other"}>Other</option>
//           </select>
//         </label>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//           name="message"
//             className="contact--input text-md"
//             id="message"
//             rows="8"
//             placeholder="Type your message..."
//           />
//         </label>

//         <div>
//           <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form> */}
//         <form name="contact" netlify>
//         <p>
//           <label>Name <input type="text" name="name" /></label>
//         </p>
//         <p>
//           <label>Email <input type="email" name="email" /></label>
//         </p>
//         <p>
//           <button type="submit">Send</button>
//         </p>
//       </form>
//     </section>
//   );
// }
