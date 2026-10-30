import NavbarItem from "@theme-original/NavbarItem";

import { useLanguage } from "@site/src/context/LanguageContext";

// Navbar items are identified by sidebarId / link target (not by their Persian label),
// so the labels in docusaurus.config.js can change without breaking translation.
const KEY_BY_SIDEBAR = {
    courseSidebar: "navbar.course",
    tutorialsSidebar: "navbar.tutorials",
};

const KEY_BY_LINK = {
    "/blog": "navbar.blog",
    "/projects": "navbar.projects",
    "/ta": "navbar.assistants",
};

export default function NavbarItemWrapper(props) {
    const { t } = useLanguage();
    const key = KEY_BY_SIDEBAR[props.sidebarId] ?? KEY_BY_LINK[props.to];

    return <NavbarItem {...props} label={key ? t(key) : props.label} />;
}