export default async function sendMessage(payload) {
    const body = JSON.stringify(payload);
    const options = {
        body,
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    }
    const result = await fetch(`https://email-backend.cyclic.app/message/send/messageOnly`, options);

    return result.json();
}