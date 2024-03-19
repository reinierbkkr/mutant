export async function fetchSample(id: string) {
    // const path = `api/sample?id=${id}`
    // console.log(path)
    const response = await fetch(`api/sample?id=${id}`, {
        method: "GET",
        headers: {
            // Accept: "application/json"
        },
    });

    if (response.ok) {
        const base64String = await response.text();
        const blob = base64ToBlob(base64String);
        return URL.createObjectURL(blob);
    } else {
        return {
            statusCode: response.status,
            statusText: response.statusText
        };
    }
}

function base64ToBlob(base64String: string): Blob {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: "audio/wav" });
  }


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
