import React, { useState } from 'react'
import Board from '../board/board'
import './gameview.css'

function GameView() {

    return (

        <div className='container gameview mt-5'>
            <Board/>
        </div>
    )
}

export default GameView

//debo, de alguna manera, comparar todos los botones, por ejemplo:
//cuando haya una fila de tres X o O cuando se encuentren en diagonal, horizontal o verticalmente, declarar un ganador y un perdedor.
//en caso de que no haya alguna fila corrida de cualquiera de los dos signos anteriormente nombrados, declarar un empate.
//tip: flux se usa generalmente cuando hay variables que se usan entre modulos.