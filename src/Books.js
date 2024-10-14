import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
query ExampleQuery {
    books {
       title 
       author 
    }
}`;

function Books() {
    const { loading, error, data } = useQuery(GET_BOOKS);
    debugger
    if (loading) return <p>loading ...</p>;
    if (error) return <p>Error</p>;

    return data.books.map((({ title, author }) => (
        <p key={author}>{title}</p>
    )));
}

export default Books;