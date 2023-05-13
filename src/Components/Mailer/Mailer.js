import emailjs from '@emailjs/browser';
import React from 'react';

const Mailer = () => {
    const sendMail = event => {
        event.preventDefault();
        emailjs.sendForm('service_xe3o7ya', 'template_pm143x9', event.target, 'zefBSUrRtNfvKXHct')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset();

    }
    return (
        <div id='contact' className='mt-16 pt-10 pb-16' style={{ background: "linear-gradient(360deg, hsla(197, 57%, 57%, 1) 0%, hsla(229, 35%, 46%, 1) 51%, hsla(245, 36%, 42%, 1) 77%, hsla(255, 44%, 36%, 1) 100%)" }}>
            <h2 className='text-3xl text-white mb-4'>Contact Me</h2>
            <h3 style={{color:"#b1b4d1"}} className='mb-8'>Got a question? I'd love to hear from you. Send me a message and I'll respond as soon as possible.</h3>
            <form onSubmit={sendMail} action="">

                <input type="text" placeholder="Your Name" name='name' class="input input-bordered w-full max-w-xs mb-4" required />
                <br />
                <input type="email" placeholder="Your Email" name='user_email' class="input input-bordered w-full max-w-xs mb-4" required />
                <br />
                <textarea name='message' class="textarea textarea-bordered w-full max-w-xs mb-2" placeholder="Message" required></textarea>
                <br />
                <input type="submit" value="Send Message" style={{backgroundColor:"#0389ce"}} className='btn btn-outline w-full border-gray-500 text-white max-w-xs hover:text-gray-200 hover:border-gray-400' />

            </form>

        </div>
    );
};

export default Mailer;