import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <style>{`
                @media (max-width: 991px) {
                    .nav-menu-wrapper {
                        display: none !important;
                    }
                    .horizontal_right_wrapper .button_primary {
                        display: none !important;
                    }
                    .menu-button {
                        display: flex !important;
                    }
                }
                @media (min-width: 992px) {
                    .menu-button {
                        display: none !important;
                    }
                }
                .mobile-nav-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 32, 50, 0.98);
                    z-index: 999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                }
                .mobile-nav-overlay.active {
                    opacity: 1;
                    pointer-events: auto;
                }
                .mobile-nav-content {
                    width: 100%;
                    max-width: 400px;
                    padding: 2rem;
                }
                .mobile-nav-close {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 2rem;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .mobile-nav-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .mobile-nav-link {
                    color: white;
                    text-decoration: none;
                    font-size: 1.5rem;
                    font-weight: 500;
                    padding: 1rem;
                    display: block;
                    text-align: center;
                    transition: all 0.3s ease;
                    border-radius: 8px;
                }
                .mobile-nav-link:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateX(5px);
                }
                .mobile-nav-button {
                    background: #00D9FF;
                    color: #0F2032;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 600;
                    display: block;
                    text-align: center;
                    margin-top: 2rem;
                    transition: all 0.3s ease;
                }
                .mobile-nav-button:hover {
                    background: #00B8D4;
                    transform: scale(1.05);
                }
            `}</style>

            <div
                data-w-id="4537995e-145b-7ec4-dfcc-ef8e7f0523c6"
                data-animation="default"
                data-collapse="medium"
                data-duration="400"
                data-easing="ease"
                data-easing2="ease"
                role="banner"
                className={`navbar-logo-left-container shadow-three w-nav ${isVisible ? 'animate-fade-up-1' : ''}`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                        ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                        : 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d',
                    transition: 'opacity 1s ease 0.1s, transform 1s ease 0.1s'
                }}
            >
                <div className="container">
                    <div className="navbar-wrapper" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '2rem'
                    }}>
                        <a
                            href="/"
                            aria-current="page"
                            className="navbar-brand w-nav-brand w--current"
                            aria-label="home"
                            style={{ flex: '0 0 auto' }}
                        >
                            <img
                                width="200"
                                sizes="200"
                                alt="MEDeutsch MENA - Connecting Middle Eastern Healthcare Professionals with German Facilities"
                                src="https://ik.imagekit.io/pcet3dvcu/Green%20and%20Blue%20Minimalist%20Pharmacy%20Medical%20Logo%20(7).png?updatedAt=1761544301717"
                                loading="eager"
                                srcSet="https://ik.imagekit.io/pcet3dvcu/Green%20and%20Blue%20Minimalist%20Pharmacy%20Medical%20Logo%20(7).png?updatedAt=1761544301717"
                                className="nav_logo"
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <nav role="navigation" className="nav-menu-wrapper w-nav-menu" style={{
                            flex: '1 1 auto',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <ul role="list" className="nav-menu-two w-list-unstyled" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                margin: 0,
                                padding: 0
                            }}>
                                <li className="nav_bg" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <a href="/" aria-current="page" className="nav-link w--current">Home</a>
                                    <a href="/solutions" className="nav-link">Solutions</a>
                                    <a href="#benefits" className="nav-link">Services</a>
                                    <a href="#partnerships" className="nav-link">Partnerships</a>
                                    <a href="#about" className="nav-link">About</a>
                                </li>
                                <li className="mobile-margin-top-10">
                                    <a href="/contact" className="nav_button w-button">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="horizontal_right_wrapper" style={{
                            flex: '0 0 auto',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <a href="/contact" className="button_primary small_mobile w-inline-block">
                                <div className="text-block small">Contact</div>
                            </a>
                            <div
                                className="menu-button w-nav-button"
                                style={{ WebkitUserSelect: 'text', cursor: 'pointer' }}
                                aria-label="menu"
                                role="button"
                                tabIndex="0"
                                aria-controls="w-nav-overlay-0"
                                aria-haspopup="menu"
                                aria-expanded={isMenuOpen}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <img
                                    loading="eager"
                                    src="https://cdn.prod.website-files.com/669b91437d706d72b094ed4c/669b924186dd3498054ff2e4_menu%20(9).svg"
                                    alt="menu button"
                                    className="menu_toggle"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
                <button
                    className="mobile-nav-close"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>
                <div className="mobile-nav-content">
                    <ul className="mobile-nav-list">
                        <li><a href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="/solutions" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Solutions</a></li>
                        <li><a href="#benefits" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                        <li><a href="#partnerships" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Partnerships</a></li>
                        <li><a href="#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    </ul>
                    <a href="/contact" className="mobile-nav-button" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
            </div>
        </>
    );
}