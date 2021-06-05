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

//<div className='div-main-view container'>
  //              <div className="border-row">
    //                <button id='button1' type="button" className="btn btn-outline-danger">XO</button>
      //              <button id='button2' type="button" className="btn btn-outline-danger">XO</button>
        //            <button id='button3' type="button" className="btn btn-outline-danger">XO</button>
          //      </div>
            //    <div className="border-row">
              //      <button id='button4' type="button" className="btn btn-outline-danger">XO</button>
                //    <button id='button5' type="button" className="btn btn-outline-danger">XO</button>
                  //  <button id='button6' type="button" className="btn btn-outline-danger">XO</button>
                //</div>
                //<div className="border-row">
                  //  <button id='button7' type="button" className="btn btn-outline-danger">XO</button>
                    //<button id='button8' type="button" className="btn btn-outline-danger">XO</button>
                    //<button id='button9' type="button" className="btn btn-outline-danger">XO</button>
                //</div>
                //<hr />
                //<h5>Player one</h5>
                //<p>Won:</p>
                //<p>Losses:</p>

                //<h5>Player two</h5>
                //<p>Won:</p>
                //<p>Losses:</p>

                //<Link to='/win-view'>
                  //  <button>Win View</button>
                //</Link>
            //</div>