import './Contact.css'
import WilliamPic from '../../images/williamhaggpic.jpg'
import { useState } from 'react';

function Contact () {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
  

  if(!name.trim()) {
    newErrors.name = "Du måste skriva in ett namn i fältet.";
  } 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!email.trim()) {
    newErrors.email = "Du måste skriva in en emailadress."
  } else if (!emailRegex.test(email)) {
    newErrors.email = "Ogiltig emailadress"
  }

  if(!message.trim()) {
    newErrors.message = "Du måste skriva ett meddelande."
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateForm()) {
      console.log({name, email, message});
      alert("Formuläret skickades")
      setName("");
      setEmail("");
      setMessage("");
      setErrors("");
    }
  };

  

 
  return (
  <div className="contact-container">
      <section className="contact-title">
          <div>
            <h1>Get In Touch With Me Here</h1>
          </div>
      </section>

      

    <section className="contact-form">
      <div className="contact-body">
        
        <section className="contact-ways">
          <h2>Other ways to reach out</h2>
          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i> 
              <a href="mailto:william.hagg1998@outlook.com?subject=Hej&body=Jag vill kontakta dig">
                william.hagg1998@outlook.com
              </a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/william-h%C3%A4gg-b2a524269/" target="_blank">
              LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Mrhagg">
              <i className="fa-brands fa-github"></i>
              Github
              </a>
              
            </li>
          </ul>
        </section>

       
        <form className="contact-form-right" onSubmit={handleSubmit}>
          <div className="name-text">
            <div className="input-title">Name</div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={errors.name ? "input-error" : "input-valid"} />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div className="email-text">
            <div className="input-title">Email</div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={errors.email ? "input-error" : "input-valid"} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-text">
            <div className="input-title">Message</div>
            <textarea className={errors.message ? "input-error" : "input-valid"} value={message} onChange={(e) => setMessage(e.target.value)} rows={5} />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>

  </div>
  );
}

export default Contact;