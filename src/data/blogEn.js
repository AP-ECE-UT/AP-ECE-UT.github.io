// English versions of the blog posts, keyed by the post slug (the last part of /blog/<slug>).
// Each entry: { Content, toc, excerpt } - the MDX body, its table of contents and the
// short text shown on the blog list page. Posts without an entry stay in Persian.
import Regex, { toc as regexToc } from "@site/src/pages/_blog-en/regex.mdx";
import CToCpp, { toc as ctocppToc } from "@site/src/pages/_blog-en/ctocpp.mdx";
import Make, { toc as makeToc } from "@site/src/pages/_blog-en/make.mdx";
import Design, { toc as designToc } from "@site/src/pages/_blog-en/design.mdx";
import Resource, { toc as resourceToc } from "@site/src/pages/_blog-en/resource.mdx";

const blogEn = {
    regex: {
        Content: Regex,
        toc: regexToc,
        excerpt:
            "You have probably come across a few regular expressions already. In this post we first go over the general definitions and uses of regular expressions, and then look at how to write them and what their rules are. Finally, we introduce the standard regex library in C++.",
    },
    resource: {
        Content: Resource,
        toc: resourceToc,
        excerpt:
            "In this post we want to cover the rule of three/five/zero, resource management and move semantics.",
    },
    design: {
        Content: Design,
        toc: designToc,
        excerpt:
            "So far you have had a basic introduction to object-oriented design. In this post we first explain the SOLID principles, and then introduce one of the design patterns.",
    },
    make: {
        Content: Make,
        toc: makeToc,
        excerpt:
            "In this post we want to give an overview of the compilation process and of multi-file projects using a Makefile, and point out a few important things about it. Finally, we briefly introduce the CMake tool.",
    },
    ctocpp: {
        Content: CToCpp,
        toc: ctocppToc,
        excerpt:
            "You got to know the C language in the Fundamentals of Computer Programming course. C++ has most of the functions and features of C, and at first glance there seems to be a lot of similarity between the two. In this post we go over some of the differences between the two languages and common mistakes made by people who are just learning C++.",
    },
};

export default blogEn;
