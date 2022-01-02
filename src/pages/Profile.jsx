import React from 'react'
import {Backg, Foto, Perf, Text02, Text01, Article, Fila} from './styles'
import Aimg from '../images/avatar.png'

export const Profile=()=>{

    return(
    <Backg>
        <Fila>
            <Perf>
                <Foto src={Aimg} alt='Avatar' />
            </Perf>
        </Fila>
        <Article>
            <Text01>Arturo Reygadas</Text01>
        </Article>
    </Backg>        
    )
}
