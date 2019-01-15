import React from "react";
import { navigate } from "gatsby-link";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false };
    }

    render() {
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h1>Contact</h1>
                            <form
                                name="contact"
                                method="post"
                                action="/contact/thanks/"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={this.handleSubmit}
                            >
                                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                <input type="hidden" name="form-name" value="contact" />
                                <div hidden>
                                    <label>
                                        Don’t fill this out:{" "}
                                        <input name="bot-field" onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor={"name"} >Your name</label>
                                    <div className="control">
                                        <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor={"email"}>Email</label>
                                    <div className="control">
                                        <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor={"message"}>Message</label>
                                    <div className="control">
                                        <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
                                    </div>
                                </div>
                                <div className="field">
                                    <button className="button is-link" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}