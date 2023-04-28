const conexoesDocumentos = [];

function adicionarConexao(conexao){
    conexoesDocumentos.push(conexao);
    console.log(conexoesDocumentos)
}

function obterUsuariosDocumento(nomeDocumento){
    return conexoesDocumentos
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

export {adicionarConexao, obterUsuariosDocumento}