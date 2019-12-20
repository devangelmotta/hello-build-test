var key = "session-status";

export const updateStatusSession = (status) => {
    if (status) return localStorage.setItem(key, status);
    let getValue = localStorage.getItem(key);
    localStorage.setItem(key, !getValue);
}

export const getStatusSession = () => {
    return localStorage.getItem(key);

}