import React, { useRef, useState, useContext, useEffect } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';
import cv from "./MridulCV.pdf";
import Contextor from "./context.js";

let content = ["Contact", "Let's make", "something great!", "Hey my name is ", ",you can answer me on ", "I wanna collab for "];
function Contact() {
    const { contact } = useContext(Contextor);
    const [clas, setClas] = useState(contact ? "display" : "hidden");
    useEffect(() => {
        setClas(contact ? "display" : "hidden");
    }, [contact]);
    console.log(contact);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mrid26', 'template_gifgaqt', form.current, 'mKQcjcci3prOCmFxV')
            .then((result) => {
                console.log(result.text);
                console.log("Email sent successfully!");
                form.current.reset();
                alert("Email sent successfully!");
            }, (error) => {
                console.log(error.text);
                console.log("Email not sent!");
                alert("Email not sent!");
            });
    };

    return (
        <div className={`cpage-${clas}`} >
            <div className="cparent1">
                <div className="cheading">
                    <p className="p1"> {content[1]} </p>
                    <p className="p2"> {content[2]} </p>
                </div>
                <div className="ccontent">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>{content[3]}</label>
                        <input required type="text" id="input" name="name" placeholder="Mridul Mathur" />
                        <label>{content[4]}</label>
                        <input required type="text" name="email" placeholder="abc@gmail.com" />
                        <label>{content[5]}</label>
                        <input required name="idea" placeholder="idea" className="idea" />
                        <div className="cbutton">
                            <input type="submit" value="Send Idea" />
                            <a href={cv} download="Mridul CV.pdf"> Get CV </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;