function AddTodo(updateList) {

    const [inputText, setInputText] = useState('');
    return (
        <div>

            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Add your next Todo..."
            />
            <button onClick={() => {
                updateList(inputText);
                setInputText('');
            }}> Add Todo </button>

        </div>
    )
}

export default AddTodo