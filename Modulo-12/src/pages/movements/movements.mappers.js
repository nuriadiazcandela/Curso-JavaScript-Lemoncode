export const mapMovementsApiToVm = (movements, accountId) =>
  Array.isArray(movements)
    ? movements.map((moves) => {
        if (moves.accountId == accountId) {
          return movementsApiToVm(moves);
        }
      })
    : [];

const movementsApiToVm = (moves) => {
  return {
    ...moves,
    transaction: new Date(moves.transaction).toLocaleDateString(),
    realTransaction: new Date(moves.realTransaction).toLocaleDateString(),
    amount: `${moves.amount} €`,
    balance: `${moves.balance} €`,
  };
};

export const mapEmptyAccountVmToApi = (account) => {
  return {
    ...account,
    alias: 'Total',
    iban: 'Todas las cuentas',
  };
};
