import { LanguageProvider } from "@site/src/context/LanguageContext";
import DocumentTitle from "@site/src/components/DocumentTitle";

// Docusaurus wraps the whole app with this component.
export default function Root({ children }) {
    return (
        <LanguageProvider>
            <DocumentTitle />
            {children}
        </LanguageProvider>
    );
}