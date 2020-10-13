export const getCriminals = async () => {
    const url = 'https://ministeriocrimenes.herokuapp.com/api/criminal';
    const res = await fetch(url);
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