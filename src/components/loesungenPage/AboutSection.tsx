'use client';

import { useEffect, useRef } from 'react';

export default function AboutSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0,
            rootMargin: '0px 0px -10% 0px'
        };

        const animateOnScroll = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.opacity = '1';
                    element.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, observerOptions);

        if (sectionRef.current) {
            const animatedElements = sectionRef.current.querySelectorAll('[data-animation]');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
                el.style.transition = 'opacity 1s ease, transform 1s ease';
                observer.observe(el);
            });
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section about" ref={sectionRef}>
            <div className="w-layout-blockcontainer container_default w-container">
                <div className="vertical_center_wrapper">
                    <div
                        data-animation="a-3"
                        className="sub_header_white"
                    >
                        <div className="sub_header_gradient">About Us</div>
                    </div>
                    <h2
                        data-animation="a-4"
                        className="heading_h2 center _700px"
                    >
                        Who is MEDeutsch MENA?
                    </h2>
                    <p
                        data-animation="a-5"
                        className="paragraph_default center _850px"
                    >
                        MEDeutsch MENA is a specialized healthcare recruitment company dedicated to connecting qualified Middle Eastern healthcare professionals with leading German recruitment agencies and healthcare facilities. Our team brings deep expertise in both the MENA healthcare sector and the German market, with a particular focus on Iraqi nursing professionals and medical staff. <br /><br />We understand the unique challenges and opportunities in cross-border healthcare recruitment. Our mission is to build sustainable B2B partnerships by delivering pre-qualified, culturally prepared, and professionally trained healthcare talent. With a commitment to quality, efficiency, and transparency, we ensure smooth collaboration between recruitment agencies and access to exceptional healthcare professionals who are ready to integrate into the German healthcare system.
                    </p>
                    <div
                        data-animation="a-12"
                        className="w-layout-grid team_grid"
                    >
                        <div className="right_wrapper">
                            <img
                                src="https://ik.imagekit.io/pcet3dvcu/462118149_614484107672713_5822809619534374935_n.jpg?updatedAt=1761528522323"
                                loading="eager"
                                width="280"
                                sizes="(max-width: 479px) 100vw, 280px"
                                alt="team-image"
                                srcSet="https://ik.imagekit.io/pcet3dvcu/462118149_614484107672713_5822809619534374935_n.jpg?updatedAt=1761528522323 500w, https://ik.imagekit.io/pcet3dvcu/462118149_614484107672713_5822809619534374935_n.jpg?updatedAt=1761528522323 1080w"
                                className="team_image"
                            />
                        </div>
                        <img
                            className="team_image large"
                            src="https://ik.imagekit.io/pcet3dvcu/personal%20(1).png?updatedAt=1761527582055"
                            width="240"
                            height="Auto"
                            alt="team-image"
                            sizes="240px"
                            id="w-node-_9c37da92-ab0a-e6b3-5431-15fea3b7fcd3-b094ed5a"
                            loading="eager"
                            srcSet="https://ik.imagekit.io/pcet3dvcu/personal%20(1).png?updatedAt=1761527582055"
                        />
                        <div className="left_wrapper">
                            <img
                                src="https://ik.imagekit.io/pcet3dvcu/459945602_3804993519817170_1910626520937499741_n.jpg?updatedAt=1747508639167"
                                loading="eager"
                                width="280"
                                height="Auto"
                                alt="team-image"
                                srcSet="https://ik.imagekit.io/pcet3dvcu/459945602_3804993519817170_1910626520937499741_n.jpg?updatedAt=1747508639167"
                                sizes="(max-width: 679px) 100vw, 280px"
                                className="team_image"
                            />
                        </div>
                    </div>
                    <div
                        data-animation="a-13"
                        className="button_wrapper"
                    >
                        <a href="https://wa.me/+15155065027" target="_blank" className="primary_button blue _2 w-button">
                            Schedule a Free Consultation
                        </a>
                    </div>
                    <div className="divider"></div>
                    <div
                        data-animation="a-3"
                        className="sub_header_white"
                    >
                        <div className="sub_header_gradient">FAQ</div>
                    </div>
                    <h2
                        data-animation="a-4"
                        className="heading_h2 center _700px"
                    >
                        Frequently Asked Questions
                    </h2>
                    <div
                        data-animation="a-5"
                        className="w-layout-grid faq_grid"
                    >
                        <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
                            <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-0" aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                                <div className="faq-title-wrapper-large">
                                    <div className="paragraph-regular text-weight-medium">What does MEDeutsch MENA do?</div>
                                    <div className="toggle_wrapper">
                                        <div className="faq-arrow w-embed">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_43_556)">
                                                    <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_43_556">
                                                        <rect width="25" height="25" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="faq-content w-dropdown-list" id="w-dropdown-list-0" aria-labelledby="w-dropdown-toggle-0" style={{ height: '0px' }}>
                                <div className="faq-content-wrapper">
                                    <p className="faq-paragraph">
                                        We supply qualified healthcare professionals from the Middle East, particularly Iraq, to German recruitment agencies and healthcare facilities. We handle the entire sourcing process including candidate screening, language training coordination, and cultural preparation.<br /><br />Our B2B model allows recruitment agencies to expand their candidate pool with pre-qualified professionals ready for the German market, without the complexity of international sourcing.
                                    </p>
                                </div>
                            </nav>
                        </div>
                        <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
                            <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-1" aria-controls="w-dropdown-list-1" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                                <div className="faq-title-wrapper-large">
                                    <div className="paragraph-regular text-weight-medium">How long does the recruitment process take?</div>
                                    <div className="toggle_wrapper">
                                        <div className="faq-arrow w-embed">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_43_556)">
                                                    <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_43_556">
                                                        <rect width="25" height="25" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="faq-content w-dropdown-list" id="w-dropdown-list-1" aria-labelledby="w-dropdown-toggle-1" style={{ height: '0px' }}>
                                <div className="faq-content-wrapper">
                                    <p className="faq-paragraph">
                                        The timeline varies depending on several factors including language proficiency level, recognition requirements, and visa processing times.<br /><br />Typically, from initial candidate selection to arrival in Germany takes 6-8 months. However, we maintain a pipeline of candidates at various stages, allowing for faster placements based on your needs.<br /><br />Contact us for more specific timelines based on your requirements.
                                    </p>
                                </div>
                            </nav>
                        </div>
                        <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
                            <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-2" aria-controls="w-dropdown-list-2" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                                <div className="faq-title-wrapper-large">
                                    <div className="paragraph-regular text-weight-medium">What qualifications do your healthcare professionals have?</div>
                                    <div className="toggle_wrapper">
                                        <div className="faq-arrow w-embed">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_43_556)">
                                                    <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_43_556">
                                                        <rect width="25" height="25" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="faq-content w-dropdown-list" id="w-dropdown-list-2" aria-labelledby="w-dropdown-toggle-2" style={{ height: '0px' }}>
                                <div className="faq-content-wrapper">
                                    <p className="faq-paragraph">
                                        All candidates we provide hold qualifications that are recognizable in Germany. We source nurses and healthcare professionals with valid degrees and professional experience from their home countries.<br /><br />Our candidate pool ranges from newly qualified professionals to experienced specialists with years of practice. We carefully screen and match candidates based on your specific requirements.<br /><br />If you have specific qualification needs or preferences, we're happy to discuss how we can meet them.
                                    </p>
                                </div>
                            </nav>
                        </div>
                        <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
                            <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-3" aria-controls="w-dropdown-list-3" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                                <div className="faq-title-wrapper-large">
                                    <div className="paragraph-regular text-weight-medium">What makes MEDeutsch MENA different from other suppliers?</div>
                                    <div className="toggle_wrapper">
                                        <div className="faq-arrow w-embed">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_43_556)">
                                                    <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_43_556">
                                                        <rect width="25" height="25" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="faq-content w-dropdown-list" id="w-dropdown-list-3" aria-labelledby="w-dropdown-toggle-3" style={{ height: '0px' }}>
                                <div className="faq-content-wrapper">
                                    <p className="faq-paragraph">
                                        Regional Expertise: Deep connections in the Iraqi and Middle Eastern healthcare sector give us access to exceptional talent pools.<br /><br />Quality Focus: We pre-screen and prepare candidates thoroughly, ensuring they meet German standards before introduction to partners.<br /><br />B2B Partnership Model: We work collaboratively with recruitment agencies, understanding your business needs and providing reliable, consistent candidate flow to help you scale your operations efficiently.
                                    </p>
                                </div>
                            </nav>
                        </div>
                        <div data-delay="0" data-hover="false" className="faq-item-border first w-dropdown">
                            <div className="faq-toggle w-dropdown-toggle" id="w-dropdown-toggle-4" aria-controls="w-dropdown-list-4" aria-haspopup="menu" aria-expanded="false" role="button" tabIndex="0">
                                <div className="faq-title-wrapper-large">
                                    <div className="paragraph-regular text-weight-medium">What is the German language proficiency of your candidates?</div>
                                    <div className="toggle_wrapper">
                                        <div className="faq-arrow w-embed">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_43_556)">
                                                    <path d="M23.7499 11.25H13.7501V1.24992C13.7501 0.560074 13.19 0 12.4999 0C11.8101 0 11.25 0.560074 11.25 1.24992V11.25H1.24992C0.560074 11.25 0 11.8101 0 12.4999C0 13.19 0.560074 13.7501 1.24992 13.7501H11.25V23.7499C11.25 24.44 11.8101 25.0001 12.4999 25.0001C13.19 25.0001 13.7501 24.44 13.7501 23.7499V13.7501H23.7499C24.44 13.7501 25.0001 13.19 25.0001 12.4999C25.0001 11.8101 24.44 11.25 23.7499 11.25Z" fill="#0EE7F6" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_43_556">
                                                        <rect width="25" height="25" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="faq-content w-dropdown-list" id="w-dropdown-list-4" aria-labelledby="w-dropdown-toggle-4" style={{ height: '0px' }}>
                                <div className="faq-content-wrapper">
                                    <p className="faq-paragraph">
                                        All candidates have at least B1 German language certification upon arrival, enabling effective workplace communication. Language proficiency is crucial in healthcare, so we maintain strict standards.<br /><br />We coordinate with reputable language schools in the MENA region to ensure proper preparation. Many of our candidates continue to B2 level to meet professional recognition requirements.<br /><br />We can discuss specific language level requirements based on your placement needs.
                                    </p>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="comparsion_wrapper_red cta">
                        <p
                            data-animation="a-3"
                            className="sub_header_light"
                        >
                            Contact
                        </p>
                        <div
                            data-animation="a-4"
                            className="cta_title"
                        >
                            Get in Touch Today
                        </div>
                        <div
                            data-animation="a-8"
                            className="button_wrapper"
                        >
                            <a href="https://wa.me/+15155065027" target="_blank" className="primary_button small _2 w-button">
                                Schedule a Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}