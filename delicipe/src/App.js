import React, { Component ,Fragment } from 'react';
import { BrowserRouter , Link , Route} from 'react-router-dom'
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'
import './App.css';
import Writers from './Components/Writers'

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      writers: []
    }
  }
  componentWillMount(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title: "Business Website",
        category: "Web Design"
      },
      {
        id:uuid.v4(),
        title: "Social App",
        category: "Mobile Development"
      },
      {
        id:uuid.v4(),
        title: "Ecommerce Shopping Cart",
        category: "Web Development"
      }
    ]});
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  async componentDidMount(){
    const writers = await (await fetch('https://localhost:3004/writers')).json()
    this.setState({ writers })
  }
  render() {
    return <BrowserRouter>
      <Fragment>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
                </li>
              <li>
                <Link to="/writers">
                  Writers
                </Link>
              </li>
            </ul>      
          <hr></hr>
        <Route exact path="/" render={() => <div>Home</div>}/>
        <Route path="/writers" component={Writers}/>     
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
      </Fragment>
    </BrowserRouter>
  }
}

export default App;
