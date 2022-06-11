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
        <div id='contact'>
            <h2 className='text-2xl font-bold text-red-600 underline mt-12 mb-4'>Contact Me</h2>
            <form onSubmit={sendMail} action="">

                <input type="text" placeholder="Your Name" name='name' class="input input-bordered w-full max-w-xs mb-4" required />
                <br />
                <input type="email" placeholder="Your Email" name='user_email' class="input input-bordered w-full max-w-xs mb-4" required />
                <br />
                <textarea name='message' class="textarea textarea-bordered w-full max-w-xs mb-2" placeholder="Message" required></textarea>
                <br />
                <input type="submit" value="Send Message" className='btn btn-warning btn-outline w-full max-w-xs' />

            </form>

        </div>
    );
};

export default Mailer;