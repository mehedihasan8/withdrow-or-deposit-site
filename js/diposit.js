document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmonuntString = depositField.value;
  const depositAmonunt = parseFloat(depositAmonuntString);
  // input theke deposit a amount adding
  const depositTotalAmount = document.getElementById("change-deposit");
  const previousDepositAmountString = depositTotalAmount.innerText;
  const previousDepositAmount = parseFloat(previousDepositAmountString);

  const currentDeposti = previousDepositAmount + depositAmonunt;

  depositTotalAmount.innerText = currentDeposti;

  // input theke balance a ammonunt adding
  const depositTotalBalance = document.getElementById("Balance-deposit");
  const previousTotalBalanceStrign = depositTotalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceStrign);

  const currentBlance = previousTotalBalance + depositAmonunt;
  depositTotalBalance.innerText = currentBlance;

  depositField.value = "";
});

// withdrow javaScript start

document.getElementById("btn-withdrow").addEventListener("click", function () {
  const withdrowField = document.getElementById("withdrow-field");
  const withdrowAmountString = withdrowField.value;
  const withdrowAmount = parseFloat(withdrowAmountString);

  // input theke withdrow te amount adding

  const withdrowTotal = document.getElementById("change-withdrow");
  const withdrowpreviuseTotalString = withdrowTotal.innerText;
  const withdrowPreviuseTotal = parseFloat(withdrowpreviuseTotalString);

  const currentWithdrow = withdrowAmount + withdrowPreviuseTotal;
  withdrowTotal.innerText = currentWithdrow;

  // balance theke withdrow ( - ) kortechi

  const depositTotalBalance = document.getElementById("Balance-deposit");
  const previousTotalBalanceStrign = depositTotalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceStrign);

  const fisnishWithdrow = previousTotalBalance - currentWithdrow;

  depositTotalBalance.innerText = fisnishWithdrow;

  withdrowField.value = "";
});
