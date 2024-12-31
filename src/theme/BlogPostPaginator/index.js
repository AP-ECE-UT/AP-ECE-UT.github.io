import React from "react";
import BlogPostPaginator from "@theme-original/BlogPostPaginator";
import UtterancesComments from "@site/src/components/UtterancesComments";

export default function BlogPostPaginatorWrapper(props) {
    return (
        <>
            <BlogPostPaginator {...props} />
            <UtterancesComments />
        </>
    );
}
