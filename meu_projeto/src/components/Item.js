import PropTypes from 'prop-types';

function Item({marca, ano_lancamento, dono}) {
    return(
        <>
            <li>{marca} - {ano_lancamento} - {dono} </li>
        </>
    );
};

// Definindo os tipos e valores padrão dos props
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
    dono: PropTypes.string.isRequired
}

// Definindo os valores padrão dos props caso não seja passado nenhum valor
Item.defaultProps = {
    marca: "Adicione uma marca",
    ano_lancamento: 0,
    dono: "Adicione um dono"
}

export default Item;