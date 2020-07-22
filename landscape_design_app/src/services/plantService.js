export default class PlantService {
    constructor() {
        this._apiBase = 'https://trefle.io/api/v1';
        this._token = 'ZlBkRy8renVwb1YyVW10SXk3R3k4UT09';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}?token=${this._token}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllPlants = async () => {
        const res = await this.getResource(`/plants/`);
        return res
    }

    getPlant = async (id) => {
        const res = await this.getResource(`/plants/${id}/`);
        return res
    }

}

const plt = new PlantService();

plt.getAllPlants()
.then(res => console.log(res))

plt.getPlant(376742)
.then(res => console.log(res))
