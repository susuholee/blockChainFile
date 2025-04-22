class Main extends React.Component {
    render() {
        return <>
            <h1>안녕 리액트</h1>
        </>
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);