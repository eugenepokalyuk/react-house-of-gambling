const ApiUrlPath = 'http://localhost:8000';
const routeBlog = "/blog";

const request = (endpoint: string, options: any) => {
    const url = `${ApiUrlPath}${endpoint}`;
    return fetch(url, options).then(checkResponse);
};

const checkResponse = (res: Response) => {
    return res.ok
        ? res.json()
        : res.json().then((err) => Promise.reject(err));
};

export const fetchBlogData = async () => {
    const endpoint = routeBlog + "/reviews";
    const options = {
        headers: {
            Authorization: localStorage.getItem('uuid')
        },
    }
    // return request(endpoint, options);
    return [
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023"
        }, {
            text: "We offer various payment methods, including Skrill, Neteller, webmoney, and bank transfer.",
            date: "11.03.2023"
        }, {
            text: "For your convenience, we provide multiple payment options, such as Skrill, Neteller, webmoney, and bank transfer.",
            date: "12.04.2023"
        }, {
            text: "When it comes to payment, you can choose from several methods: Skrill, Neteller, webmoney, and bank transfer.",
            date: "01.05.2024"
        }, {
            text: "Choose the payment method that suits you best: Skrill, Neteller, webmoney, or bank transfer.",
            date: "02.06.2024"
        }, {
            text: "We accept payments through Skrill, Neteller, webmoney, and bank transfer - select the most convenient payment option for you.",
            date: "03.07.2024"
        }
    ]
}