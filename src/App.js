import React from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList';



class App extends React.Component {
  state = {
    currentUser: "kletherwala",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/80646640?v=4",
      html_url: "https://github.com/kletherwala",
      name: "Kiran Letherwala",
      login: "kletherwala",
      public_repos: 31,
      followers: 1,
    },
    followers: [
      {
        login: "SaltStalactite",
        avatar_url: "https://avatars.githubusercontent.com/u/86366749?v=4",
        html_url: "https://github.com/SaltStalactite"
      }
    ]
  }

  render() {
    return(<div>
      <h1>Github Info</h1>
      <form>
        <input placeholder='Github Handle'/>
        <button>Search</button>
      </form>

      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>
      
    </div>);
  }
}

export default App;