import React, { useEffect } from 'react'

export default function useOutsideAlerter() {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (event.target.className=="timeFrame" || event.target.className=="timeFrames null") {
                console.log("true")
                return true
            }
            else {
                console.log("false")
                return false
            }
            // if (ref.current && event.target.className=="timeFrames null") {
            //     console.log("123")
            // }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
}