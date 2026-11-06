import blogEn from "@site/src/data/blogEn";

const cache = new WeakMap();

export function slugOf(content) {
    return content.metadata.permalink.split("/").filter(Boolean).pop();
}

// Returns a stand-in for a blog post's content component that renders the English version.
// It keeps the metadata of the original so the rest of the theme keeps working;
// "excerpt" is the short version used on list pages.
export default function englishBlogContent(content, mode = "full") {
    const en = blogEn[slugOf(content)];
    if (!en) return content;

    const key = `${mode}`;
    let byMode = cache.get(content);
    if (!byMode) cache.set(content, (byMode = {}));
    if (byMode[key]) return byMode[key];

    const Body = en.Content;
    const Content = mode === "excerpt" ? () => <p>{en.excerpt}</p> : () => <Body />;
    Content.metadata = content.metadata;
    Content.frontMatter = content.frontMatter;
    Content.assets = content.assets;
    Content.contentTitle = content.contentTitle;
    Content.toc = mode === "excerpt" ? content.toc : en.toc ?? content.toc;
    byMode[key] = Content;
    return Content;
}
