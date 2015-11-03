
import React, { Component, PropTypes } from 'react';

import { Code } from 'neal-react';

class CodeJSX extends Component {

    constructor(props, content) {
        super(props, content); // this.state = {count: props.initialCount};
    }

    render() {

        const codeText = `<Page>
  <Hero><h1>{ /* Content */ }</h1></Hero>
  <Section heading="Hello!">
    <HorizontalSplit padding="md"> { /* Content */ } </HorizontalSplit>
  </Section>
  <Section>
    <Team>
      <TeamMember name="Link" title="Co-founder" imageUrl="img/link.jpg"> { /* Description */ } </TeamMember>
      <TeamMember name="Yoshi" title="Co-founder" imageUrl="img/yoshi.jpg"> { /* Description */ } </TeamMember>
    </Team>
  </Section>
  <Section>
    <PricingTable>
      <PricingPlan {... pricingPlan1} />
      <PricingPlan {... pricingPlan2} />
      <PricingPlan {... pricingPlan3} />
    </PricingTable>
    <SignupInline onSubmit={onSignupCallback}/>
  </Section>
</Page>
`;

        return (
            <Code {...this.props} lang="jsx" block={true} >
                { codeText}
            </Code>
        );
    }
}

export default CodeJSX;