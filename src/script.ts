import { Produto } from './classes/Produto';
import { menuController } from './Funcoes/menuController';
import { optionController } from './Funcoes/optionController';
import { Option } from './opcao';

try {
  const estoque: Produto[] = [];
  let option: Option;

  do {
    try {
      option = menuController();
      optionController(estoque, option);
    } catch (error) {
      console.log(error.message);
    }
  } while (option != Option.Sair);
} catch (error) {
  console.log(error.message);
}