function disjunction(operands, isXor = false) {
  return isXor ? operands.filter(Boolean).length % 2 === 1
  : operands.some(Boolean);
}
