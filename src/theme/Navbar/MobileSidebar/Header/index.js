import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import IconClose from "@theme/Icon/Close";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";

import LanguageToggle from "@site/src/components/LanguageToggle";

function CloseButton() {
    const mobileSidebar = useNavbarMobileSidebar();

    return (
        <button
            type="button"
            aria-label={translate({
                id: "theme.docs.sidebar.closeSidebarButtonAriaLabel",
                message: "Close navigation bar",
                description: "The ARIA label for close button of mobile sidebar",
            })}
            className="clean-btn navbar-sidebar__close"
            style={{ marginInlineStart: 0 }}
            onClick={() => mobileSidebar.toggle()}>
            <IconClose color="var(--ifm-color-emphasis-600)" />
        </button>
    );
}

// Same as the default header, but the language toggle sits right next to the close (X) button.
export default function NavbarMobileSidebarHeader() {
    return (
        <div className="navbar-sidebar__brand">
            <NavbarLogo />
            <NavbarColorModeToggle className="margin-right--md" />
            <div style={{ display: "flex", alignItems: "center", marginInlineStart: "auto" }}>
                <LanguageToggle sidebarHeader />
                <CloseButton />
            </div>
        </div>
    );
}
