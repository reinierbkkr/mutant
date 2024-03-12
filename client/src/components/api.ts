export async function fetchMessage(){
    const response = await fetch("/api/message");
    const fetchedMessage = await response.text();
    return fetchedMessage
  }

export async function fetchClickCount() {
    const response = await fetch("api/store?key=clickCount", {
        method: "GET",
        headers: {
            Accept: "application/json"
        },
    });

    if (response.ok) {
        return await response.json();
    } else {
        return {
            statusCode: response.status,
            statusText: response.statusText
        };
    }
}

export async function storeClickCount(count: number) {
    const response = await fetch("api/store", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            key: "clickCount",
            object: count
        }),
    });

    if (!response.ok) {
        return {
            statusCode: response.status,
            statusText: response.statusText
        };
    }
}
