import { getNewId } from "../services/idService";
export default function SelectInput({
  inputValue = "",
  onInputChange = null,
  idInput = getNewId(),
  labelDescription = "label description",
  data = [],
}) {
  function handleChange({ currentTarget }) {
    if (onInputChange) {
      onInputChange(data.find((x) => x.id === currentTarget.value));
    }
  }

  return (
    <div className="flex flex-col my-4 items-center space-y-2">
      <label htmlFor={idInput}>{labelDescription}</label>
      <select
        id={idInput}
        value={inputValue}
        onChange={handleChange}
        className="form-select appearance-none
        block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
        <option></option>
        {data.map((x) => {
          const { id, name } = x;
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
