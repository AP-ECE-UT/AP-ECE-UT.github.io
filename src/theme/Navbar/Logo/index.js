import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useThemeConfig } from "@docusaurus/theme-common";
import ThemedImage from "@theme/ThemedImage";

import { useLanguage } from "@site/src/context/LanguageContext";

// Same markup as the original Navbar/Logo, but the title comes from the language dictionary.
export default function NavbarLogo() {
    const { t } = useLanguage();
    const {
        navbar: { logo },
    } = useThemeConfig();

    const logoLink = useBaseUrl(logo?.href || "/");
    const sources = {
        light: useBaseUrl(logo.src),
        dark: useBaseUrl(logo.srcDark || logo.src),
    };

    return (
        <Link to={logoLink} className="navbar__brand">
            <div className="navbar__logo">
                <ThemedImage sources={sources} alt={logo.alt ?? ""} />
            </div>
            <b className="navbar__title text--truncate">{t("site.title")}</b>
        </Link>
    );
}