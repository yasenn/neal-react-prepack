
import React, { Component, PropTypes } from 'react';

import '../assets/css/font-awesome.css';
import '../assets/css/app.css';
import '../assets/css/neal-react.css';

import { Link } from 'react-router';
import { App } from 'neal-react';
import { CustomerQuotes } from 'neal-react';
import { DropdownMenu } from 'neal-react';
import { DropdownToggle } from 'neal-react';
import { HorizontalSplit } from 'neal-react';
import { ImageList } from 'neal-react';
import { Navbar } from 'neal-react';
import { NavItem } from 'neal-react';
import { Page } from 'neal-react';
import { PricingTable } from 'neal-react';
import { Section } from 'neal-react';
import HeroWithImage from '../components/NealReactWrappers/HeroWithImage.jsx';
import ImageListItemCnnLogo from '../components/NealReactWrappers/ImageListItemCnnLogo.jsx';
import ImageListItemForbesLogo from '../components/NealReactWrappers/ImageListItemForbesLogo.jsx';
import ImageListItemThevergeLogo from '../components/NealReactWrappers/ImageListItemThevergeLogo.jsx';
import ImageListItemTechcrunchLogo from '../components/NealReactWrappers/ImageListItemTechcrunchLogo.jsx';
import CodeJSX from '../components/NealReactWrappers/CodeJSX.jsx';
import SignupInlineWrapper from '../components/NealReactWrappers/SignupInlineWrapper.jsx';
import SignupModalWrapper from '../components/NealReactWrappers/SignupModalWrapper.jsx';
import PricingPlanWrapper from '../components/NealReactWrappers/PricingPlanWrapper.jsx';
import CustomerQuotePaulGraham from '../components/NealReactWrappers/CustomerQuotePaulGraham.jsx';
import CustomerQuoteElonMusk from '../components/NealReactWrappers/CustomerQuoteElonMusk.jsx';
import CustomerQuoteReidHoffman from '../components/NealReactWrappers/CustomerQuoteReidHoffman.jsx';
import FooterWrapper from '../components/NealReactWrappers/FooterWrapper.jsx';


class HomePage extends Component {

    render() {
        return (
            <div>
                <App googleAnalyticsKey="UA-42490151-3" params={ this.props.params }>
                    <Page params={ this.props.params }>
                        <Navbar brand="Sample Page" params={ this.props.params }>
                            <NavItem params={ this.props.params }>
                                <Link className="nav-link"
                                      to="home"
                                      params={ this.props.params }>
                                <span params={ this.props.params }>Home</span>
                                </Link>
                            </NavItem>
                            <NavItem dropdown={ true } params={ this.props.params }>
                                <DropdownToggle params={ this.props.params }>
                                    <span params={ this.props.params }>GitHub</span>
                                </DropdownToggle>
                                <DropdownMenu params={ this.props.params }>
                                    <a href="https://github.com/dennybritz/neal-sample"
                                       className="dropdown-item"
                                       target="_blank"
                                       params={ this.props.params }><span params={ this.props.params }>Sample page</span></a>
                                    <a
                                    href="https://github.com/dennybritz/neal-react"
                                    className="dropdown-item"
                                    target="_blank"
                                    params={ this.props.params }><span params={ this.props.params }>Neal React</span></a>
                                </DropdownMenu>
                            </NavItem>
                        </Navbar>
                        <HeroWithImage className="text-center" params={ this.props.params }>
                            <h1 params={ this.props.params }><span className="display-1" params={ this.props.params }>Declarative Landing Pages for React.js</span></h1>
                            <p className="lead" params={ this.props.params }>
                                <span params={ this.props.params }>Build a beautiful landing page in less than an hour. No more redundant code. Easily extensible.</span>
                            </p>
                            <p params={ this.props.params }>
                                <a href="https://github.com/dennybritz/neal-react"
                                   target="_blank"
                                   className="btn btn-white"
                                   params={ this.props.params }><span params={ this.props.params }>Get it on GitHub</span></a>
                            </p>
                        </HeroWithImage>
                        <Section className="subhero" params={ this.props.params }>
                            <ImageList centered={ true } params={ this.props.params }>
                                <ImageListItemCnnLogo params={ this.props.params }></ImageListItemCnnLogo>
                                <ImageListItemForbesLogo params={ this.props.params }></ImageListItemForbesLogo>
                                <ImageListItemThevergeLogo params={ this.props.params }></ImageListItemThevergeLogo>
                                <ImageListItemTechcrunchLogo params={ this.props.params }></ImageListItemTechcrunchLogo>
                            </ImageList>
                        </Section>
                        <Section className="nopad-bottom" params={ this.props.params }>
                            <CodeJSX params={ this.props.params }></CodeJSX>
                        </Section>
                        <Section params={ this.props.params }>
                            <HorizontalSplit padding="md" params={ this.props.params }>
                                <div params={ this.props.params }>
                                    <p className="lead" params={ this.props.params }>
                                        <span params={ this.props.params }>Batteries Included</span>
                                    </p>
                                    <p params={ this.props.params }>
                                        <span params={ this.props.params }>Neal is based on</span><a href="#"
                                                                                                     target="_blank"
                                                                                                     params={ this.props.params }><span params={ this.props.params }>Bootstrap 4</span></a>
                                        <span
                                        params={ this.props.params }>and ships with navbar, hero, footer, sections, horizontal split, pricing tables, customer quotes and other components you need for a
                                            landing page. No more repetetive coding! Oh, and it's easy to extend.</span>
                                    </p>
                                </div>
                                <div params={ this.props.params }>
                                    <p className="lead" params={ this.props.params }>
                                        <span params={ this.props.params }>Third-Party Integrations</span>
                                    </p>
                                    <p params={ this.props.params }>
                                        <span params={ this.props.params }>External integrations like</span><a href="#"
                                                                                                               target="_blank"
                                                                                                               params={ this.props.params }><span params={ this.props.params }>Google Analytics</span></a>
                                        <a
                                        href="https://segment.com/"
                                        target="_blank"
                                        params={ this.props.params }><span params={ this.props.params }>Segment</span></a>
                                            <a href="https://stripe.com/"
                                               target="_blank"
                                               params={ this.props.params }><span params={ this.props.params }>Stripe</span></a>
                                            <a href="http://typeform.com"
                                               target="_blank"
                                               params={ this.props.params }><span params={ this.props.params }>Typeform</span></a><span params={ this.props.params }>are included. No more copying & pasting integration code, all you need is your API keys. We automatically track events when visitors navigate to different parts of your page.</span>
                                    </p>
                                </div>
                                <div params={ this.props.params }>
                                    <p className="lead" params={ this.props.params }>
                                        <span params={ this.props.params }>Serverless Deployment</span>
                                    </p>
                                    <p params={ this.props.params }>
                                        <span params={ this.props.params }>Because you are relying on react.js and third-party integration you don't need a server to host your landing page. Simply upload it to an Amazon S3 bucket, enable website hosting, and it's ready to go!</span>
                                        <a
                                        href="#"
                                        target="_blank"
                                        params={ this.props.params }></a>
                                            <a href="https://segment.com/"
                                               target="_blank"
                                               params={ this.props.params }></a>
                                            <a href="https://stripe.com/"
                                               target="_blank"
                                               params={ this.props.params }></a>
                                            <a href="http://typeform.com"
                                               target="_blank"
                                               params={ this.props.params }></a>
                                    </p>
                                </div>
                            </HorizontalSplit>
                        </Section>
                        <Section className="gray"
                                 heading="Inline and Modal Signup components"
                                 params={ this.props.params }>
                            <p params={ this.props.params }>
                                <span params={ this.props.params }>Use these components to capture user data, display a payment dialog and/or and send them to your own backend for handling. Of course, you could also just use a Typeform to collect user emails.</span>
                            </p>
                            <SignupInlineWrapper params={ this.props.params }></SignupInlineWrapper>
                            <SignupModalWrapper modalId="signup-modal" params={ this.props.params }></SignupModalWrapper>
                            <p params={ this.props.params }>
                                <a data-toggle="modal"
                                   data-target="#signup-modal"
                                   href="#"
                                   className="btn btn-primary btn-ghost"
                                   params={ this.props.params }><span params={ this.props.params }>Show Signup modal</span></a>
                            </p>
                        </Section>
                        <Section className="nopad-bottom" params={ this.props.params }>
                            <PricingTable params={ this.props.params }>
                                <PricingPlanWrapper name="Personal"
                                                    description="Describe your plans with easy-to-use pricing tables. Each plan provies callbacks to handle visitor clicks."
                                                    price="$99"
                                                    features={ {    'Describe pricing plans as JSON': true,    'Features can be activate/inactive': true,    'Works on mobile': true,    'Custom callbacks': true,    'Extrea Feature 1': false,    'Extrea Feature 2': false} }
                                                    params={ this.props.params }></PricingPlanWrapper>
                                <PricingPlanWrapper name="Startup"
                                                    description="Describe your plans with easy-to-use pricing tables. Each plan provies callbacks to handle visitor clicks."
                                                    price="$499"
                                                    features={ {    'Describe pricing plans as JSON': true,    'Features can be activate/inactive': true,    'Works on mobile': true,    'Custom callbacks': true,    'Extrea Feature 1': true,    'Extrea Feature 2': false} }
                                                    params={ this.props.params }></PricingPlanWrapper>
                                <PricingPlanWrapper name="Enterprise"
                                                    description="Describe your plans with easy-to-use pricing tables. Each plan provies callbacks to handle visitor clicks."
                                                    price="$999"
                                                    features={ {    'Describe pricing plans as JSON': true,    'Features can be activate/inactive': true,    'Works on mobile': true,    'Custom callbacks': true,    'Extrea Feature 1': true,    'Extrea Feature 2': true} }
                                                    params={ this.props.params }></PricingPlanWrapper>
                            </PricingTable>
                        </Section>
                        <Section className="nopad-bottom" params={ this.props.params }>
                            <CustomerQuotes params={ this.props.params }>
                                <CustomerQuotePaulGraham name="Paul Graham" params={ this.props.params }></CustomerQuotePaulGraham>
                                <CustomerQuoteElonMusk name="Elon Musk" params={ this.props.params }></CustomerQuoteElonMusk>
                                <CustomerQuoteReidHoffman params={ this.props.params }></CustomerQuoteReidHoffman>
                            </CustomerQuotes>
                        </Section>
                        <FooterWrapper brandName="Sample Page"
                                       facebookUrl="http://www.facebook.com"
                                       twitterUrl="http://www.twitter.com/dennybritz"
                                       githubUrl="https://github.com/dennybritz/neal-react"
                                       params={ this.props.params }></FooterWrapper>
                    </Page>
                </App>
            </div>
            );
    }
}

export default HomePage;

