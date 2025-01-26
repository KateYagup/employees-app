const baseUrl = 'https://66a0f8b17053166bcabd894e.mockapi.io/api/workers';

export const fetchUsersList = () =>
    fetch(baseUrl).then(res => res.json());
