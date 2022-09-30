import React from "react";
import './TableForm.css'
import { useState } from "react";

export default function TableForm({ filterSubmit, onReset }) {
  const [name, setName] = useState('');
  const [rule, setRule] = useState('');
  const [argument, setArgument] = useState('');
  
  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleRuleChange(e) {
    setRule(e.target.value)
  }

  function handleArgumentChange(e) {
    setArgument(e.target.value)
  }
  
  function onClearFilter() {
    setRule('');
    setName('');
    setArgument('');
    onReset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    filterSubmit({ name, rule, argument});
  }

  return (
  <form className="table-container" onSubmit={handleSubmit}>
      <select name="name" value={name} onChange={handleNameChange} required>
        <option value="">Field</option>
        <option value="name">Caption</option>
        <option value="points">Amout</option>
        <option value="distance">Distance</option>
      </select>
      <select name="rule" value={rule} onChange={handleRuleChange} required>
        <option value="">Condition</option>
        <option value="equal">Equal</option>
        <option value="contain">Contain</option>
        <option value="greater">Greater</option>
        <option value="less">Less than</option>
      </select>

      <input
        name="argument"
        className="table-container__input"
        value={argument}
        onChange={handleArgumentChange}
        type="text"
        placeholder="value"
      />

      <button className="table-container__button-reset" type="reset" onClick={onClearFilter}>
        Reset
      </button>
      <button className="table-container__button-filter" type="submit" >
        Filter
      </button>
  
    </form>
  )
}
