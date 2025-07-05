import DocPaginator from "@theme-original/DocPaginator";

import UtterancesComments from "@site/src/components/UtterancesComments";

export default function DocPaginatorWrapper(props) {
    return (
        <>
            <DocPaginator {...props} />
            <UtterancesComments />
        </>
    );
}
