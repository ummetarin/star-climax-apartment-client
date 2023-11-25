

const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-400 h-[400px] text-white">
  <nav>
    <header className="footer-title mt-8">Services</header> 
    <a className="link link-hover mt-6">Branding</a>
    <a className="link link-hover  mt-6">Design</a>
    <a className="link link-hover  mt-6">Marketing</a>
    <a className="link link-hover  mt-6">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title mt-8">Company</header> 
    <a className="link link-hover mt-6">About us</a>
    <a className="link link-hover mt-6">Contact</a>
    <a className="link link-hover mt-6">Jobs</a>
    <a className="link link-hover mt-6">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title mt-8">Legal</header> 
    <a className="link link-hover mt-6">Terms of use</a>
    <a className="link link-hover mt-6">Privacy policy</a>
    <a className="link link-hover mt-6">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title mt-8">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text mt-6">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;