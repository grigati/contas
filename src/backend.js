// Simula as chamadas ao backend

/* Campos da conta:
 * - descricao
 * - responsavel (quem pagou a conta)
 * - valor
 * - data de vencimento
 * - ciclo de repeticao (mensal, semestral ou anual)
 * - número de repetições
 */
export function cadastrarContaAPagar(conta) {
    console.log('Valores recebidos: ', conta);
}

/* Chama o backend para marcar a conta como paga.
 * A data de vencimento deve ser atualizada de acordo com o ciclo
 * e o número de repetições deve ser decrementado em um
 */
export function pagarConta() { }

// Busca lista de próximas contas a pagar
export function buscarContasAPagar() {
    return [
        {
            cicloRepeticao: 1,
            dataVencimento: "2019-06-28",
            descricao: "Aluguel",
            numRepeticoes: 24,
            responsavel: "Otávio Sales",
            valor: 2000
        },
        {
            cicloRepeticao: 6,
            dataVencimento: "2019-07-10",
            descricao: "Serviços de Manutenção",
            numRepeticoes: 4,
            responsavel: "Antônia Gomes",
            valor: 150.28
        },
        {
            cicloRepeticao: 1,
            dataVencimento: "2019-07-15",
            descricao: "Telefone",
            numRepeticoes: 12,
            responsavel: "Emily Santos",
            valor: 250
        }
    ];
}