export const getCriminals = async (country = 'Bolivia', minAge = 0, maxAge = 100, reqType = 1) => {
    const API = 'https://ministeriocrimenes.herokuapp.com/api/criminal';
    /* Request Types
    1. all criminals
    2. criminals filter by country only
    3. criminals filter by age only
    4. criminals filter by country and age
    */
    const url = API;
    const urlByCountry = `${API}/nacionalidad/${country}`
    const urlByAge = `${API}/rangoedad/${minAge}/${maxAge}`
    const urlFull = `${API}/${country}/${minAge}/${maxAge}`
    let res;
    switch (reqType) {
        case 1:
            res = await fetch(url);
            break;
        case 2:
            res = await fetch(urlByCountry);
            break;
        case 3:
            res = await fetch(urlByAge);
            break;
        case 4:
            res = await fetch(urlFull);
            break;
    
        default:
            break;
    }
    const {criminales} = await res.json();

    // const lista = crimenes.map(crimen => {
    //     return { 
    //         id: crimen.id,
    //         tipo : crimen.tipoCrimen,
    //         fecha: crimen.fecha,
    //         zona: crimen.zona,
    //         descripcion: crimen.descripcionCrimen
    //     }
    // })
    return criminales;
}