import './Contact.css'




function Contact () {

  //const [name, setName] = useState("");
  //const [message, setMessage] = useState("");
  //const [email, setEmail] = useState("");
  //const [errors, setErrors] = useState({});
  //const [alert, setAlert] = useState({ show:false, variant: "", message: ""});
  //const [isSending, setIsSending] = useState(false);

  /*const validateForm = () => {
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
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSending(true);
  setAlert({
    show: true,
    variant: "info",
    message: "Sending message..."
  });

  try {
    const response = await fetch(`${API_URL}/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

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

  } catch (error) {
    console.error("Error sending message", error);
    setAlert({
      show: true,
      variant: "danger",
      message: "Something went wrong, please try again!"
    });
  } finally {
    setIsSending(false);
  }
};*/


  

 
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
       
                {/* <form className="contact-form-right" onSubmit={handleSubmit}>
          <div className="name-text">
            <div className="input-title">Name</div>
            <input 
              type="text" 
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
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={errors.email ? "input-error" : "input-valid"} 
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-text">
            <div className="input-title">Message</div>
            <textarea 
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
        */}
      </div>
    </section>

  </div>
  );
}

export default Contact;