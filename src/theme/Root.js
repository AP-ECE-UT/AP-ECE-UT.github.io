import { LanguageProvider } from "@site/src/context/LanguageContext";

// Docusaurus wraps the whole app with this component.
export default function Root({ children }) {
    return <LanguageProvider>{children}</LanguageProvider>;
}