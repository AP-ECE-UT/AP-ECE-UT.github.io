// English versions of the blog posts, keyed by the post slug (the last part of /blog/<slug>).
// Each entry: { Content, toc, excerpt } - the MDX body, its table of contents and the
// short text shown on the blog list page. Posts without an entry stay in Persian.
import Regex, { toc as regexToc } from "@site/src/pages/_blog-en/regex.mdx";

const blogEn = {
    regex: {
        Content: Regex,
        toc: regexToc,
        excerpt:
            "You have probably come across a few regular expressions already. In this post we first go over the general definitions and uses of regular expressions, and then look at how to write them and what their rules are. Finally, we introduce the standard regex library in C++.",
    },
};

export default blogEn;
