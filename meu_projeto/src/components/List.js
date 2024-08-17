import Item from "./Item";

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2015} dono="Ermeson" />
                <Item marca="Fiat" ano_lancamento={1990}  dono="Felipe" />
                <Item marca="Celta" ano_lancamento={2005} dono="Alessandro" />

                <Item />
            </ul>
        </>
    );
};
export default List;