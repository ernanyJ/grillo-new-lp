/**
 * JavaScript da página — camada extra. Todo CTA é um <a> real, o FAQ é
 * <details>, as soluções aparecem todas sem script e o formulário envia por
 * POST comum: se este arquivo falhar, a página continua convertendo.
 */
import { iniciarRevelacao } from "./revelacao";
import { iniciarContadores } from "./contadores";
import { iniciarCursor } from "./cursor";
import { iniciarRolagem } from "./rolagem";
import { iniciarSolucoes } from "./solucoes";
import { iniciarFormulario } from "./formulario";
import { iniciarRastreamento } from "./rastreamento";

const calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

iniciarRastreamento();
iniciarRevelacao();
iniciarContadores(calmo);
iniciarRolagem();
iniciarSolucoes();
iniciarFormulario();
if (!calmo) iniciarCursor();
