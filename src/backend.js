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