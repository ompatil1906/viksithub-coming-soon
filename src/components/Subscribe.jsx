import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

function Subscribe() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const subscribeRef = useFadeIn();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('Subscribing...');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section ref={subscribeRef} id="subscribe-section" className="subscribe-section fade-in">
      <div className="container">
        <h3>Don't Miss Out! Be the First to Know.</h3>
        <p>Get exclusive early access, insider updates, and special offers directly to your inbox. Join our community of visionaries today!</p>
        <form onSubmit={handleSubmit} className="subscription-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Sign Me Up!</button>
        </form>
        {message && <p className="popup-message">{message}</p>}
      </div>
    </section>
  );
}

export default Subscribe;