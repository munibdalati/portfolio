import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer mt-1 text-center">
            <div className="mobileIcons">
                <a className="mx-2" href="https://www.linkedin.com/in/munib-dalati/">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a className="mx-2" href="https://github.com/munibdalati">
                    <i className="fa-brands fa-github"></i>
                </a>

                <a className="mx-2" href="https://twitter.com/munibaldalati">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>

                <a className="mx-2" href="https://web.facebook.com/munib.aldalati">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a className="mx-2" href="https://monkeytype.com/profile/munibaldalati">
                    <i className="fa-solid fa-keyboard"></i>
                </a>
            </div>
            <div className="laptopIcons">
                <a className="mx-4" href="https://www.linkedin.com/in/munib-dalati/">
                    <i className="fa-brands fa-linkedin-in fa-2x"></i>
                </a>

                <a className="mx-4" href="https://github.com/munibdalati">
                    <i className="fa-brands fa-github fa-2x"></i>
                </a>

                <a className="mx-4" href="https://twitter.com/munibaldalati">
                    <i className="fa-brands fa-x-twitter fa-2x"></i>
                </a>

                <a className="mx-4" href="https://web.facebook.com/munib.aldalati">
                    <i className="fa-brands fa-square-facebook fa-2x"></i>
                </a>
                <a className="mx-4" href="https://monkeytype.com/profile/munibaldalati">
                    <i className="fa-solid fa-keyboard fa-2x"></i>
                </a>
            </div>
            <p className="copyright mt-3">© {currentYear} Munib Al Dalati</p>
        </div>
    )
}

export default Footer;
