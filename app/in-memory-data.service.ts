import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cliente } from './clientes/cliente.model';

export class InMemoryDataService implements InMemoryDbService {
    
    createDb() : {} {
        let clientes : Cliente[] = [
            {id:1, nome: 'Jose C Macoratti', email:'macoratti@yahoo.com',telefone: '(21)99876666'},
            {id:2, nome: 'Paulo Lima', email:'paulolima@yahoo.com',telefone: '(31)97873333'},
            {id:3, nome: 'Suzana Ribeiro', email:'suzana@net.com',telefone: '(41)88874444'},
            {id:4, nome: 'Paola Fernandes', email:'paolafernand@hotmail.com',telefone: '(13)89875555'},
            {id:5, nome: 'Amelia Souza', email:'amelia@bol.com.br',telefone: '(11)98087777'}
         ];
         return {
            'clientes1' : clientes
        };
    }
}
