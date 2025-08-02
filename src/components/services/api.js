const BASE = 'https://www.swapi.tech/api';

export async function getPeople() {
    const res = await fetch(`${BASE}/people?page=1&limit=100`);
    const { results } = await res.json();
    return results;
}

export async function getPlanets() {
    const res = await fetch(`${BASE}/planets?page=1&limit=100`);
    const { results } = await res.json();
    return results;
}

export async function getVehicles() {
    const res = await fetch(`${BASE}/vehicles?page=1&limit=100`);
    const { results } = await res.json();
    return results;
}

export async function getOne(type, uid) {
    const res = await fetch(`${BASE}/${type}/${uid}`);
    const { results } = await res.json();
    return results;
}