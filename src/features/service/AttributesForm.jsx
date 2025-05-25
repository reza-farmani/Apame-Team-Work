 function AttributesForm({ attributes, control }) {
  if (!attributes) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">جزئیات</h3>
      
      {Array.isArray(attributes) ? (
        attributes.map((attr, idx) => (
          <div key={idx}>
            <label>{attr.name}:</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded"
              {...control.register(`attributes.${attr.name}`)}
              defaultValue={attr.value}
            />
          </div>
        ))
      ) : (
        Object.entries(attributes).map(([key, value]) => (
          <div key={key}>
            <label>{key}:</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded"
              {...control.register(`attributes.${key}`)}
              defaultValue={value}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default AttributesForm;