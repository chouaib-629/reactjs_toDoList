import Card from "./Card";

export default function List(props) {
    const { todos, editedIndex } = props;

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => (
                <Card
                    {...props}
                    key={todoIndex}
                    index={todoIndex}
                    todo={todo}
                    editMode={todoIndex === editedIndex}
                />
            ))}
        </ul>
    );
}
