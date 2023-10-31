function Contact() {
    return (
            <div className="flexible-learning-section">
                <div className="upper-section-fl">
                    <p className="fl-sub-head">Flexible Distance Learning</p>
                    <p className="description">
                        We provide flexible and 24/7 online learning that fits around you.
                        Become and industry leader with accredited undergraduate and
                        postgraduate course onine. Fully Online.
                    </p>
                </div>

                <div className="fl-cards-container">
                    <div className="cards-fl">
                        <p className="no">01</p>
                        <p className="card-des">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            totam provident quis illum odit corrupti sed ex molestiae nostrum
                            animi ducimus doloribus aspernatur.
                        </p>
                    </div>

                    <div className="cards-fl">
                        <p className="no">02</p>
                        <p className="card-des">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            totam provident quis illum odit corrupti sed ex molestiae nostrum
                            animi ducimus doloribus aspernatur.
                        </p>
                    </div>

                    <div className="cards-fl">
                        <p className="no">03</p>
                        <p className="card-des">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                            totam provident quis illum odit corrupti sed ex molestiae nostrum
                            animi ducimus doloribus aspernatur.
                        </p>
                    </div>
                </div>

                <div className="yellow-bg-fl">
                    <div className="help-container">
                        <div className="left-hc">
                            <p className="hc-title">Need Help?</p>
                            <p className="hc-dec">
                                Our specialists will contact you for details and clarifications.
                                We'll be glad to help you find the course.
                            </p>
                            <i className="bx bxl-facebook"></i>
                            <i className="bx bxl-twitter"></i>
                            <i className="bx bxl-instagram"></i>
                            <i className="bx bxl-google-plus"></i>
                        </div>

                        <div className="right-hc">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Your Name"
                            />

                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Enter Your Phone No."
                            />

                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter Email Address"
                            />

                            <input type="submit" value="REQUEST CLARIFICATION" />
                        </div>
                    </div>
                </div>

                <div className="blue-bg-fl"></div>
            </div>
    );
}

export default Contact;
