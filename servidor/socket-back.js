import 'dotenv/config';
import registrarEventoDocumento from "./registrarEventos/documento.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventoInicio from "./registrarEventos/inicio.js";
import io from "./servidor.js";
import registrarEventosLogin from "./registrarEventos/login.js";

io.on("connection", (socket) => {
  registrarEventoInicio(socket, io);
  registrarEventoDocumento(socket, io);
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
