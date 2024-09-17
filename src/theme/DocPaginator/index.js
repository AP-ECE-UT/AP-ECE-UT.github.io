import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import UtterancesComments from "../../components/UtterancesComments";

export default function DocPaginatorWrapper(props) {
    return (
        <>
            <DocPaginator {...props} />
            <UtterancesComments />
        </>
    );
}
