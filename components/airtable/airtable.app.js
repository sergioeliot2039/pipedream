module.exports = {
  type: "app",
  app: "airtable",
  propDefinitions: {
    filterByFormula: {
      type: "string",
      label: "Filter by Formula",
      description: "Optionally provide a [formula](https://support.airtable.com/hc/en-us/articles/203255215-Formula-Field-Reference) used to filter records. The formula will be evaluated for each record, and if the result is not `0`, `false`, `\"\"`, `NaN`, `[]`, or `#Error!` the record will be included in the response. For example, to only include records where `Name` isn't empty, pass `NOT({Name} = '')`.",
      optional: true,      
    },
    maxRecords: {
      type: "integer",
      label: "Max Records",
      description: "Optionally limit the maximum number of records to return. Leave blank to retrieve all records.",
      optional: true,
    },
    record: {
      type: "object",
      label: "Record",
      description: "Enter the column name for the key and the corresponding column value. You can include all, some, or none of the field values. You may also disable structured mode to pass a JSON object with key/value pairs representing columns and values."
    },
    recordId: {
      type: "string",
      label: "Record ID",
      description: "Enter a [record ID](https://support.airtable.com/hc/en-us/articles/360051564873-Record-ID) (eg. `recxxxxxxx`).",   
    },
    records: {
      type: "string",
      label: "Records",
      description: 'Provide an array of objects. Each object should represent a new record with the column name as the key and the data to insert as the corresponding value (e.g., passing `[{"foo":"bar","id":123},{"foo":"baz","id":456}]` will create two records and with values added to the fields `foo` and `id`). The most common pattern is to reference an array of objects exported by a previous step (e.g., `{{steps.foo.$return_value}}`). You may also enter or construct a string that will `JSON.parse()` to an array of objects.'
    },
    sortDirection: { 
      type: "string", 
      label: "Sort: Direction",
      description: "This field will be ignored if you don't select a field to sort by.",
      options: [
        { label: "Descending", value: "desc", },
        { label: "Ascending", value: "asc" }
      ], 
      default: "desc",
      optional: true
    },
    sortFieldId: { 
      type: "$.airtable.fieldId",
      tableIdProp: "tableId", 
      label: "Sort: Field",
      description: "Optionally select a field to sort results. To sort by multiple fields, use the `Filter by Forumla` field.",
      optional: true,
    },
  }
}
