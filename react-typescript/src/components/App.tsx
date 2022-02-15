import React from 'react';
import { fetchTodos, ToDos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';
import {connect} from 'react-redux';

interface AppProps{
    todos:ToDos[];
    fetchTodos():void;
    deleteTodo(id:number): void;
}

interface AppState{
    fetching:boolean
}


class App extends React.Component<AppProps,AppState>{

    constructor(props:AppProps){
        super(props);
        this.state={fetching:false}
    }

    fetchData=()=>{
        this.setState({fetching:true})
        this.props.fetchTodos();
    }

    componentDidUpdate(prevProps:AppProps):void{
        if(!prevProps.todos.length && this.props.todos.length){
            this.setState({fetching:false})
        }
    }

    rederTodos=():JSX.Element[]=>{
        return this.props.todos.map((todo:ToDos)=>{
            
            return(
                <div key={todo.id} >
                    <span>
                    {todo.title}
                    </span>
                    <span onClick={()=>this.props.deleteTodo(todo.id)}>
                        <b>(Clear)</b>
                    </span>  
                </div>
            )
        })
    }
    render(){            
        return(
            <div>
                <button onClick={this.fetchData}>Fetch</button>
                {
                    this.state.fetching?<div>Loading....</div>:this.rederTodos()
                }
            </div>
        )
    }
}

const mapStateToProps=({todos}:StoreState):{todos:ToDos[]}=>{
    return {todos};
}

const mapDispatchToProps=(dispatch:any)=>({
    fetchTodos:():void=>dispatch(fetchTodos()),
    deleteTodo:(id:number):void=>dispatch(deleteTodo(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App);