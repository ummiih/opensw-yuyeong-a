import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json",
    },
});

export const swrGetFetcher = (url: string) => client.get(url).then((res) => res.data);

export { client };
