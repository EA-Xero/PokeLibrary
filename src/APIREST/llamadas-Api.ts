let url: string;
async function Pokemons(numero: number = 0): Promise<any> {
    url = `https://pokeapi.co/api/v2/pokemon/?offset=${numero}&limit=20`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}
async function Pokemons_detail_id(id:number): Promise<any> {
    url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}
async function Berrys(numero: number = 0): Promise<any> {
    url = `https://pokeapi.co/api/v2/berry/?offset=${numero}&limit=20`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}

async function Berrys_detail_id(id:number): Promise<any> {
    url = `https://pokeapi.co/api/v2/berry/${id}`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}

async function Abilities(numero: number = 0): Promise<any> {
    url = `https://pokeapi.co/api/v2/ability/?offset=${numero}&limit=20`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}

async function Abilities_detail_id(id:number): Promise<any> {
    url = `https://pokeapi.co/api/v2/ability/${id}`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}
async function Items(numero: number = 0): Promise<any> {
    url = `https://pokeapi.co/api/v2/item/?offset=${numero}&limit=20`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}
async function Items_detail_id(id:number): Promise<any> {
    url = `https://pokeapi.co/api/v2/item/${id}`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}

async function Locations(numero: number = 0): Promise<any> {
    url = `https://pokeapi.co/api/v2/location/?offset=${numero}&limit=20`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}
async function Locations_detail_id(id:number): Promise<any> {
    url = `https://pokeapi.co/api/v2/location/${id}`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}
async function Moves(numero: number = 0): Promise<any> {
    url = `https://pokeapi.co/api/v2/move/?offset=${numero}&limit=20`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}
async function Moves_detail_id(id:number): Promise<any> {
    url = `https://pokeapi.co/api/v2/move/${id}`;
    try {
        const res = await fetch(url);
        const data = res.json();
        return data;
    } catch (error) {
        return error;
    }
}
const Api = { Pokemons,Pokemons_detail_id, Berrys,Berrys_detail_id,Abilities,Abilities_detail_id, Items,Items_detail_id, Locations,Locations_detail_id, Moves,Moves_detail_id };
export default Api 