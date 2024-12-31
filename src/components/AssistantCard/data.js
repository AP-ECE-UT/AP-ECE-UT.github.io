import React from 'react';

export function data() {
    const dElement = document.querySelector('[alt="duck"]');

    const updateInfo = (mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === "childList") {
                if (!document.body.contains(dElement)) {
                    window.location.href = "/duck";
                }
            }
        }
    };

    if (dElement) {
        const observer = new MutationObserver(updateInfo);
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener("beforeunload", () => observer.disconnect());
    }
}
