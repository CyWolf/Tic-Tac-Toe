const getState = ({ getStore, setStore, getActions }) => {

    return {
        store: {
            player: 'luis',





        },

        actions: {
            changePlayer: () => {
                setStore({player: 'douglas'})
            },





        }
    }
}
export default getState