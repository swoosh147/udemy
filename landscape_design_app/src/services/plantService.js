export default class PlantService {
    constructor() {
        this._apiBase = 'https://trefle.io/api/v1';
        this._token = 'ZlBkRy8renVwb1YyVW10SXk3R3k4UT09';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}?token=${this._token}`, {mode: 'no-cors'});
    
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

// getAllKingdoms = async () => {

    //     return res
    // }

    // getKingdom = async () => {
        
    //     return res
    // }

    // getAllSubkingdoms = async () => {
                
    //     return res
    // }

    // getSubkingdom = async () => {
                        
    //     return res
    // }

    // getAllDivisions = async () => {
                
    //     return res
    // }

    // getDivision = async () => {
                        
    //     return res
    // }

    // getAllDivisionClasses = async () => {
        
    //     return res
    // }

    // getDivisionClass = async () => {
                
    //     return res
    // }

    // getAllDivisionOrders = async () => {
        
    //     return res
    // }

    // getDivisionOrder = async () => {
                
    //     return res
    // }

    // getAllFamilies = async () => {
        
    //     return res
    // }

    // getFamily = async () => {
                
    //     return res
    // }

    // getAllGenus = async () => {
        
    //     return res
    // }

    // getGen = async () => {
                
    //     return res
    // }

    // getAllSpecies = async () => {
        
    //     return res
    // }

    // getSpecies = async () => {
                
    //     return res
    // }

    // getAllDistributions = async () => {
        
    //     return res
    // }

    // getDistribution = async () => {
                
    //     return res
    // }

}

const plt = new PlantService();

plt.getAllPlants()
.then(res => console.log(res))

plt.getPlant(376742)
.then(res => console.log(res))
