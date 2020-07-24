export default class PlantService {
    constructor() {
        this._corsProxy = 'https://cors-anywhere.herokuapp.com/';
        this._apiBase = 'https://trefle.io/api/v1';
        this._token = 'ZlBkRy8renVwb1YyVW10SXk3R3k4UT09';
    }


    getResource = async (url) => {
        const res = await fetch(`${this._corsProxy}${this._apiBase}${url}?token=${this._token}`)

        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    // getResource = async (url) => {
    //       const res = await fetch(`https://cors-anywhere.herokuapp.com/${this._apiBase}${url}?token=${this._token}`);
    //       return await res.json();
    // }

    getAllPlants = async () => {
        const res = await this.getResource(`/plants/`);
        return res
    }

    getPlant = async (id) => {
        const res = await this.getResource(`/plants/${id}/`);
        return res
    }

    getAllKingdoms = async () => {
        const res = await this.getResource(``);
        return res
    }

    getKingdom = async () => {
        const res = await this.getResource(``);        
        return res
    }

    getAllSubkingdoms = async () => {
        const res = await this.getResource(``);                
        return res
    }

    getSubkingdom = async () => {
         const res = await this.getResource(``);                       
        return res
    }

    getAllDivisions = async () => {
        const res = await this.getResource(``);                
        return res
    }

    getDivision = async () => {
        const res = await this.getResource(``);                       
        return res
    }

    getAllDivisionClasses = async () => {
        const res = await this.getResource(``);       
        return res
    }

    getDivisionClass = async () => {
        const res = await this.getResource(``);               
        return res
    }

    getAllDivisionOrders = async () => {
        const res = await this.getResource(``);       
        return res
    }

    getDivisionOrder = async () => {
        const res = await this.getResource(``);               
        return res
    }

    getAllFamilies = async () => {
        const res = await this.getResource(``);       
        return res
    }

    getFamily = async () => {
        const res = await this.getResource(``);               
        return res
    }

    getAllGenus = async () => {
        const res = await this.getResource(``);       
        return res
    }

    getGen = async () => {
        const res = await this.getResource(``);               
        return res
    }

    getAllSpecies = async () => {
        const res = await this.getResource(``);       
        return res
    }

    getSpecies = async () => {
        const res = await this.getResource(``);               
        return res
    }

    getAllDistributions = async () => {
        const res = await this.getResource(``);        
        return res
    }

    getDistribution = async () => {
        const res = await this.getResource(``);                
        return res
    }

}

const plt = new PlantService();

plt.getAllPlants()
.then(res => console.log('getAllPlants', res))

plt.getPlant(376742)
.then(res => console.log('getPlant', res))