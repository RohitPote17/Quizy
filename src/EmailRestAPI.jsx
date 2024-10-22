// // import axios from 'axios';
// // import React, { useState } from 'react'

// // const EmailRestAPI = () => {

// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Your EmailJS service ID, template ID, and Public Key
// //     const serviceId = 'service_fv2jax7';
// //     const templateId = 'template_decw5x5';
// //     const publicKey = 'CzoccnRs3UThaXX18';

// //     // Create an object with EmailJS service ID, template ID, Public Key, and Template params
// //     const data = {
// //       service_id: serviceId,
// //       template_id: templateId,
// //       user_id: publicKey,
// //       template_params: {
// //         from_name: name,
// //         from_email: email,
// //         to_name: 'Quizy',
// //         message: message,
// //       }
// //     };

// //     // Send the email using EmailJS
// //     try {
// //       const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
// //       console.log(res.data);
// //       setName('');
// //       setEmail('');
// //       setMessage('');
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit} className='emailForm'>
// //         <input
// //           type="text"
// //           placeholder="Your Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //         <input
// //           type="email"
// //           placeholder="Your Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <textarea
// //           cols="30"
// //           rows="10"
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //         >
// //         </textarea>
// //         <button type="submit">Send Email</button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default EmailRestAPI

// import axios from 'axios';
// import React, { useState } from 'react';

// const EmailRestAPI = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState(''); // For success/error feedback

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // EmailJS service details
//     const serviceId = 'service_fv2jax7';
//     const templateId = 'template_decw5x5';
//     const publicKey = 'CzoccnRs3UThaXX18';

//     // EmailJS request payload
//     const data = {
//       service_id: serviceId,
//       template_id: templateId,
//       public_key: publicKey, // Use 'public_key' instead of 'user_id'
//       template_params: {
//         from_name: name,
//         from_email: email,
//         to_name: 'Quizy',
//         message: message,
//       },
//     };

//     try {
//       // Send the email
//       const res = await axios.post(
//         'https://api.emailjs.com/api/v1.0/email/send',
//         data,
//         {
//           headers: {
//             'Content-Type': 'application/json', // Ensure JSON format
//           },
//         }
//       );

//       console.log(res.data);
//       setStatus('Email sent successfully!');
//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error(error);
//       setStatus('Failed to send email. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="emailForm">
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <textarea
//           cols="30"
//           rows="10"
//           placeholder="Your Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//         <button type="submit">Send Email</button>
//       </form>
//       {status && <p>{status}</p>} {/* Display success/error message */}
//     </div>
//   );
// };

// export default EmailRestAPI;

import axios from 'axios';
import React, { useState } from 'react';

const EmailRestAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // For success/error feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS details
    const serviceId = 'service_fv2jax7';  
    const templateId = 'template_decw5x5';
    const publicKey = 'CzoccnRs3UThaXX18'; 

    const data = {
      service_id: serviceId,
      template_id: templateId,
      public_key: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Quizy',
        message: message,
      },
    };

    try {
      const res = await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res.data);
      setStatus('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error.response || error.message);
      setStatus(
        'Failed to send email. Please verify your service ID and try again.'
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="emailForm">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Email</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default EmailRestAPI;

