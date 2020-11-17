import React from 'react';

export function Age() {
    const [year, setYear] = React.useState("");
    const y = parseInt(year, 10);
    return (
        <>
            {(isNaN(y)) && <p>Veuillez entrer votre annee de naissance</p>}
            {(!isNaN(y) && y > 1920) && <p>{`Vous avez ${2020-y} ans`}</p>}
            {(!isNaN(y) && y <= 1920) && <p>Veuillez entrer une annee valide</p>}
            <input type="text" style={{padding: 10, borderRadius: 5, border: "solid 1px #DDDDDD"}} role={"year"} value={year} onChange={(evt) => setYear(evt.target.value)}/>
        </>
    );
}
