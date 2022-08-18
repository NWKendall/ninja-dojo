import {useState} from "react";

const HandleSibmit = (url, payload) => {
    const [pending, setIsPending] = useState(false);

    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)

        }).then(() => {
            console.log("New Blog added!")
            setIsPending(false)
        })
    }

export default HandleSibmit;