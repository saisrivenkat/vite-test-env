import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer px-6">
      <div className="line top py-8 md:grid md:grid-flow-col">
        <div>
          <div className="py-4 flex">
            <h2 className="ml-4 mb-0">SITE</h2>
          </div>
        </div>

        <div className="sm:grid sm:grid-flow-col gap-x-4 mt-2">
          <div className="links mt-2">
            <h3 className="uppercase mb-4">Company</h3>
            <ul>
              <li className="mb-3">
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
    </div>
    </div>

    </footer>
  );
};

export default Footer;
