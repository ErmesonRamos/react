import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}) {
    return(
        <>
            <li>{marca} - {ano_lancamento} </li>
        </>
    );
};

// Definindo os tipos e valores padrão dos props
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}

// Definindo os valores padrão dos props caso não seja passado nenhum valor
Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0
}

export default Item;