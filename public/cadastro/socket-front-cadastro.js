const socket = io();

function emitirCadastrarUsuario(dados){
    socket.emit('cadastrar_usuario', dados)
}

socket.on('cadastro_sucesso', () => alert('Cadastro finalizado com sucesso'));
socket.on('cadastro_erro', () => alert('Cadastro não finalizado'));
socket.on('cadastro_ja_existente', () => alert('Usuario já existe'))

export {emitirCadastrarUsuario} 