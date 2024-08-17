function Form() {
    function cadastraUser(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        const nome = document.getElementById("name").value; // Pega o valor do input
        console.log(nome);
        console.log("Cadastro o usuario!");
    }
    return(

        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastraUser}>
                <div>
                    <input id="name" type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
};

export default Form;