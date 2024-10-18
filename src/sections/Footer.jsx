import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
      <p className="text-white-500">© 2024 Troy Enzo. All rights reserved.</p>
      </div>

      <div className="flex items-center justify-center gap-3">
      <a href="https://www.instagram.com/troyenzo" target="_blank" rel="noopener noreferrer" className="social-icon transition-opacity duration-300 hover:opacity-70">
        <FaInstagram style={{ color: 'white' }} />
      </a>
      <a href="https://github.com/troyistroyenzo" target="_blank" rel="noopener noreferrer" className="social-icon transition-opacity duration-300 hover:opacity-70">
        <FaGithub style={{ color: 'white' }} />
      </a>
      <a href="https://www.youtube.com/troyenzo" target="_blank" rel="noopener noreferrer" className="social-icon transition-opacity duration-300 hover:opacity-70">
        <FaYoutube style={{ color: 'white' }} />
      </a>
    </div>

      
    </footer>
  );
};

{/* <SocialButton label='Twitter' href='#'>
            <FaTwitter />
          </SocialButton>
          <SocialButton label='YouTube' href='#'>
            <FaYoutube />
          </SocialButton>
          <SocialButton label='Instagram' href='#'>
            <FaInstagram />
</SocialButton> */}
export default Footer;


