import React from 'react';

export default function Login() {
  return (
    <>
      <section>
        <div className="container">
          <button
            type="button"
            className="github"
            onClick={() => console.log('something')}
          >
            Log In With GitHub
          </button>
          <button
            type="button"
            className="twitter"
            onClick={() => console.log('something')}
          >
            Log In With Twitter
          </button>
          <button
            type="button"
            className="facebook"
            onClick={() => console.log('something')}
          >
            Log In With Facebook
          </button>
        </div>
      </section>
    </>
  );
}
