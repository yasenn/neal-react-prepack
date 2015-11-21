require('../../src/client/assets/css/font-awesome.css');
require('../../src/client/assets/css/app.css');
require('../../src/client/assets/css/neal-react.css');
module.exports = {
    ReactRouter: {
        Link: require('react-router').Link,
        IndexLink: require('react-router').IndexLink
    },
    NealReact: {
        App: require('neal-react').App,
        Code: require('neal-react').Code,
        CustomerQuote: require('neal-react').CustomerQuote,
        CustomerQuotes: require('neal-react').CustomerQuotes,
        DropdownMenu: require('neal-react').DropdownMenu,
        DropdownToggle: require('neal-react').DropdownToggle,
        Footer: require('neal-react').Footer,
        FooterAddress: require('neal-react').FooterAddress,
        Figure: require('neal-react').Figure,
        Hero: require('neal-react').Hero,
        HorizontalSplit: require('neal-react').HorizontalSplit,
        ImageList: require('neal-react').ImageList,
        ImageListItem: require('neal-react').ImageListItem,
        Navbar: require('neal-react').Navbar,
        NavItem: require('neal-react').NavItem,
        Page: require('neal-react').Page,
        PricingPlan: require('neal-react').PricingPlan,
        PricingTable: require('neal-react').PricingTable,
        Section: require('neal-react').Section,
        SignupInline: require('neal-react').SignupInline,
        SignupModal: require('neal-react').SignupModal,
        Team: require('neal-react').Team,
        TeamMember: require('neal-react').TeamMember
    },
    NealReactWrappers: {
        HeroWithImage: require('../../src/client/components/NealReactWrappers/HeroWithImage.jsx'),
        ImageListItemWithImage: require('../../src/client/components/NealReactWrappers/ImageListItemWithImage.jsx'),
        ImageListItemCnnLogo: require('../../src/client/components/NealReactWrappers/ImageListItemCnnLogo.jsx'),
        ImageListItemForbesLogo: require('../../src/client/components/NealReactWrappers/ImageListItemForbesLogo.jsx'),
        ImageListItemThevergeLogo: require('../../src/client/components/NealReactWrappers/ImageListItemThevergeLogo.jsx'),
        ImageListItemTechcrunchLogo: require('../../src/client/components/NealReactWrappers/ImageListItemTechcrunchLogo.jsx'),
        CodeWrapper: require('../../src/client/components/NealReactWrappers/CodeWrapper.jsx'),
        CodeJSX: require('../../src/client/components/NealReactWrappers/CodeJSX.jsx'),
        SignupInlineWrapper: require('../../src/client/components/NealReactWrappers/SignupInlineWrapper.jsx'),
        SignupModalWrapper: require('../../src/client/components/NealReactWrappers/SignupModalWrapper.jsx'),
        PricingPlanWrapper: require('../../src/client/components/NealReactWrappers/PricingPlanWrapper.jsx'),
        CustomerQuotePaulGraham: require('../../src/client/components/NealReactWrappers/CustomerQuotePaulGraham.jsx'),
        CustomerQuoteElonMusk: require('../../src/client/components/NealReactWrappers/CustomerQuoteElonMusk.jsx'),
        CustomerQuoteReidHoffman: require('../../src/client/components/NealReactWrappers/CustomerQuoteReidHoffman.jsx'),
        TeamMember1: require('../../src/client/components/NealReactWrappers/TeamMember1.jsx'),
        TeamMember2: require('../../src/client/components/NealReactWrappers/TeamMember2.jsx'),
        TeamMember3: require('../../src/client/components/NealReactWrappers/TeamMember3.jsx'),
        FooterWrapper: require('../../src/client/components/NealReactWrappers/FooterWrapper.jsx')
    },
    NealReactThirdParty: {
        GoogleAnalytics: require('neal-react').GoogleAnalytics,
        Segment: require('neal-react').Segment,
        Stripe: require('neal-react').Stripe,
        TypeForm: require('neal-react').TypeForm
    },
    Test: {
        TestComponent: require('../../src/client/components/Test/TestComponent.jsx'),
        TestComponent2: require('../../src/client/components/Test/TestComponent2.jsx')
    }
};