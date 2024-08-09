import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message<img src="https://static.vecteezy.com/system/resources/previews/014/441/089/original/chat-message-icon-design-in-blue-circle-png.png"/></h3>
            <p>Welcome to the Contact Us page of Drishti Foundation Trust. We are delighted to hear from you and are here to assist you with any queries, feedback, or suggestions you may have. Please feel free to reach out to us through any of the contact methods provided below. We value your input and look forward to serving you.</p>
            <ul>
                <li>
                    <img src="https://illustoon.com/photo/2751.png"/>
                Email: info@drishtifoundationtrust.org
                </li>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"/>
                Phone: +91-9873522666
                </li>
                <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/6948/6948631.png"/>
                Address: 408,Narayan Arcade,Narol-Aslali Highway,Narol,Ahmedabad-382405
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your name</label>
                <input type='text'name='name'placeholder='Enter your name'/>
                <label>
                    Phone Number
                </label>
                <input type='tel' name='phone' placeholder='Enter Your Mobile Number'/>
                <label>
                    Write your message here
                </label>
                <textarea name="message"rows="6" placeholder='enter the text here'/>
                <button type='submit' className='btn2'> Submit now</button>
            </form>
        </div>

      
    </div>
  )
}

export default Contact
