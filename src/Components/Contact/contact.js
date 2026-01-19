import './Contact.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact () {
  const form = useRef();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ show:false, variant: "", message: ""});
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const newErrors = {};
  
  if(!name.trim()) {
    newErrors.name = "You have to write your name.";
  } 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!email.trim()) {
    newErrors.email = "You have to enter your email-adress"
  } else if (!emailRegex.test(email)) {
    newErrors.email = "invalid email address."
  }

  if(!message.trim()) {
    newErrors.message = "You have to write a message before sending."
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;

  };
 const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSending(true);
  setAlert({
    show: true,
    variant: "info",
    message: "Sending message..."
  });

  emailjs.sendForm(
    "service_tymm6kf",
    "template_ho9zp7u",
    form.current,
    "V1DYy-MQocaEYj4lC"
  )
 .then((result) => {
        setAlert({
          show: true,
          variant: "success",
          message: "Message was sent successfully!"
        });

        
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setAlert({ show: false, variant: "", message: "" });
        }, 3000);
      }, (error) => {
        console.error("EmailJS Error:", error.text);
        setAlert({
          show: true,
          variant: "danger",
          message: "Something went wrong, please try again!"
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };
 



  

 
  return (
    <div className="contact-container">
        <section className="contact-title">
            <div>
              <h1>Get In Touch With Me Here</h1>
            </div>
        </section>

        
      {alert.show && (
          <div className={`alert alert-${alert.variant}`} style={{ textAlign: 'center', color: alert.variant === 'danger' ? 'red' : '#f67280' }}>
            {alert.message}
          </div>
        )}

        <section className="contact-form">
          <div className="contact-body">
            
            <section className="contact-ways">
              <ul>
                <li>
                  <i className="fa-solid fa-envelope"></i> 
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=william.haegg@gmail.com&su=Hej&body=Jag vill kontakta dig"
                      target="_blank"
                      rel="noopener noreferrer"
                      > william.haegg@gmail.com
                    </a>

                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/william-h%C3%A4gg-b2a524269/" target="_blank" rel="noreferrer">
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
          
            <form className="contact-form-right" ref={form} onSubmit={handleSubmit}>
              <div className="name-text">
                <div className="input-title">Name</div>
                <input
                  type="text"
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? "input-error" : "input-valid"}
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>

              <div className="email-text">
                <div className="input-title">Email</div>
                <input
                  type="email"
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "input-error" : "input-valid"}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div className="form-text">
                <div className="input-title">Message</div>
                <textarea
                  name="message"
                  className={errors.message ? "input-error" : "input-valid"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                />
                {errors.message && <div className="error">{errors.message}</div>}
              </div>

              <button className="form-btn" type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
            
          </div>
        </section>

    </div>
  );
}


export default Contact;