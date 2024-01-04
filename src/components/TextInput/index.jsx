import './styles.css'

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input className='input' type="search" onChange={handleChange} value={searchValue} placeholder='Type your search' />
    );
}