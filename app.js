// TODO
var Bread = () => (
    <li>Bread</li>
);

var Milk = () => (
    <li>Milk</li>
);

var GroceryList = () => (
    <div>
        <h1>GROCERY</h1>
        <ul>
            <Bread />
            <Milk />
        </ul>
    </div>
);
var GroceryListItem = (props) => (
      <ul>
        <li>{props.items[0]}</li>
        <li>{props.items[1]}</li>
        <li>{props.items[2]}</li>
      </ul>
);

var GroceryList2 = () => (
    <div>
        <h1>GROCERY-ver.2</h1>
        <GroceryList2 items={['ham', 'turkey', 'shirmp']}/>
    </div>
);

// class GroceryListItem2 extends React.Component {
//     constructor(props){
//         super (props);
//     }
//     render() {
//         return (
//             <li>{this.props.todos[0]}</li>
//         );
//     }
// }

class GroceryList3 extends React.Component {
    constructor(props){
        super (props);

        this.state = {
            done: false
        };

    }



    onListItemClick(){
        this.setState({
            done: !this.state.done
        });
    }



    render() {

        var style = {
            // fontweight: this.state.done ? 'bold' : 'none'
            fontWeight: this.state.done ? 'bold' : 'none'
        };

        return (
            <div>
                <h1>GROCERY-ver.3</h1>
                <ul>
                   <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.todos[0]}</li>
                   <li>{this.props.todos[1]}</li>
                   <li>{this.props.todos[2]}</li>
                   {/*<li>hi</li>
                   <li>hi</li>
                   <li>hi</li>*/}

                </ul>
            </div>
        );
    }
}
ReactDOM.render(<GroceryList3 todos={['hi', 'hello', 'how are you']}/>, document.getElementById('app'));
//todos={['hi', 'hello', 'how are you']}