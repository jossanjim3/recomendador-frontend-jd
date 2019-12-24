import React from 'react';

function Signup() {
  return (
    <div>
      <form>
        <input placeholder="login" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password again" />
        <button type="submit">Sign Up</button>
      </form>
      <a href="/signin">Already have an account?</a>
    </div>
  );
}

export default Signup;
