import React from 'react';
import { fetchTodos, ToDos } from '../actions';
import { StoreState } from '../reducers';
import {connect} from 'react-redux';

interface AppProps{
    todos:ToDos[];
    fetchTodos():any;
}



class App extends React.Component<AppProps>{
    rederTodos=():JSX.Element[]=>{
        return this.props.todos.map((todo:ToDos)=>{
            
            return(
                <div key={todo.id}>{todo.title}</div>
            )
        })
    }
    render(){            
        return(
            <div>
                <button onClick={this.props.fetchTodos}>Fetch</button>
                {this.rederTodos()}
            </div>
        )
    }
}

const mapStateToProps=({todos}:StoreState):{todos:ToDos[]}=>{
    return {todos};
}

const mapDispatchToProps=(dispatch:any)=>({
    fetchTodos:():void=>dispatch(fetchTodos())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);