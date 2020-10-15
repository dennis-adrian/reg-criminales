export const postCriminal = criminal => {
    const url = 'https://ministeriocrimenes.herokuapp.com/api/persona';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(criminal),
    })
        .then(res => res.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}