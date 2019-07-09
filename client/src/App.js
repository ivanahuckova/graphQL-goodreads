import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// import components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Books I enjoyed in 2019</h1>
                <BookList />
                <AddBook />
            </div>
        </ApolloProvider>
    );
}

export default App;
