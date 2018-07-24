import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AppHeaderBar from "./components/AppHeader";
import HomeContent from "./components/HomeContent";
import BlogContent from "./components/BlogContent";
import AddBlogContent from "./components/AddBlogContent";
import ManageBlogContent from "./components/ManageBlogContent";

class App extends React.Component {
  constructor(props){
      super(props);
      
      this.state = {
          blogitems: [],
          userLoggedIn: false
      }
         
  }
    
  addBlogItem = (a,b) => {
        this.setState({ 
          blogitems: [ a ]
        })
        
  }
    
  render() {
    return (
      <div>
        <AppHeaderBar />

        <Switch>
          <Route exact path="/" component={HomeContent} />

          <Route exact path="/blog" component={BlogContent} />

          <Route exact path="/add-blog" component={AddBlogContent} />
        
          <Route exact path="/add-blog" render={() => <AddBlogContent addBlogItem={this.addBlogItem} />} /> 

          <Route exact path="/manage-blog" component={ManageBlogContent} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
