export const getTransactions = () => {
    return fetch("/transactions").then(res => res.json())
}