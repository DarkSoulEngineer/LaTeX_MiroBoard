const Toggle = ({value, onChange}) => {
  return (
    <label className="toggle">
    	<input 
        type="checkbox" 
        tabIndex="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span></span>
    </label>
  )
}

export default Toggle;

