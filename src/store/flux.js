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
                if (symbol === 'x') {
                    symbolEdited = {...store.playerOne, symbolSelected: 'x'}
                    symbolEdited2 = {...store.playerTwo, symbolSelected: 'o'}
                } else {
                    symbolEdited = {...store.playerOne, symbolSelected: 'o'}
                    symbolEdited2 = {...store.playerTwo, symbolSelected: 'x'}
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