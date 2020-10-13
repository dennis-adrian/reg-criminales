import React from 'react'
import { getCriminals } from '../../helpers/getCriminals'
import { useFetchCriminals } from '../../hooks/useFetchCriminals'
import Topbar from '../Molecules/Topbar'

const JudProcesses = () => {

    const {data: crimenes, loading} = useFetchCriminals();

    return (
        <div>
            <Topbar page='Procesos' subpage='Lista de Procesos'/>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}

        </div>
    )
}

export default JudProcesses;
