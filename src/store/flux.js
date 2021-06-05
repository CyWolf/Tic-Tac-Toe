const getState = ({ getStore, setStore, getActions }) => {

    return {
        store: {
            playerOne: {
                name: '',
                symbolSelected: ''
            },

            playerTwo: {
                name: '',
                symbolSelected: ''
            }

        },

        actions: {
            handleChange: (e) => {
                const store = getStore()
                const player = {
                    ...store[e.target.name], name: e.target.value
                }
                setStore({
                    [e.target.name]: player
                })
            },
            //capturar valor de un boton para luego agregarlo al key simbolSelected del player correspondiente
            selectedSymbol: (symbol) => {
                const store = getStore()
                //boton X es igual a X? asignar simbolo a playerOne jajaja a la verga que loco
                let symbolEdited = undefined
                let symbolEdited2 = undefined
                if (symbol === 'X') {
                    symbolEdited = {...store.playerOne, symbolSelected: 'X'}
                    symbolEdited2 = {...store.playerTwo, symbolSelected: 'O'}
                } else {
                    symbolEdited = {...store.playerOne, symbolSelected: 'O'}
                    symbolEdited2 = {...store.playerTwo, symbolSelected: 'X'}
                }
                setStore({
                    playerOne: symbolEdited,
                    playerTwo: symbolEdited2
                })
            }
        }
    }
}
export default getState