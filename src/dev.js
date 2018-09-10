import './dev.scss';
import ReactKindeditor from './main';

/*===example start===*/

// install: npm install afeiship/react-kindeditor --save
// import : import ReactKindeditor from 'react-kindeditor'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-kindeditor">
        <ReactKindeditor ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
