import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div className="outer-cover-data">
      <div class="input-group mb-3">

      <input type="number"  class="form-control" className="input" value={amount} placeholder="Amount" onChange={onChangeAmount} />
      </div>

      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>


      
 

    </div>
  )
}
