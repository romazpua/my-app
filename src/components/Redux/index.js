import React, {Component} from "react";
import {connect} from "react-redux";
import {getUsers} from "../../actions/usersActions";
import {getPosts} from "../../actions/postsActions"
import Button from "@material-ui/core/Button";
import "./index.scss"

class Redux extends Component {
  // state = {
  //   users:[
  //     {
  //       id: 1,
  //       name: 'Ivan',
  //     },
  //     {
  //       id: 2,
  //       name: 'Petya',
  //     }
  //   ]
  // }
  // change = () => {
  //   this.setState(
  //     {
  //       value: 123,
  //     }
  //   )
  // }
  thumbnailUrl;

  render() {
    const {usersLocal} = this.props
    const {postsLocal} = this.props
    return (
      <div className={'redux_test'}>

        <div className={'redux_test_users'}>
          {usersLocal.length > 0
            ? (
              usersLocal.map(el => (
                <p key={el.id}>{el.name}</p>
              ))
            )
            : (
              <p>No users yet!</p>
            )}
          <Button variant="contained"
                  color="primary"
                  onClick={this.props.getUsers}>
            Получить Юзеров
          </Button>
        </div>
        <div className={'redux_test_pics'}>
          <div className={'redux_test_pics_wrap'}>
          {postsLocal.length > 0
            ? (
              postsLocal.slice(0, 15).map(el => (
                <img key={el.id} src={el.thumbnailUrl} alt=""/>
              ))
            )
            : (
              <p>No posts yet!</p>
            )}
            </div>
          <Button variant="contained"
                  color="secondary"
                  style={{margin: 'auto'}}
                  onClick={this.props.getPosts}>
            Получить Картинки
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  usersLocal: store.usersRoot.usersFromReducer,
  postsLocal: store.postsRoot.postsFromReducer
})

export default connect(mapStateToProps, {getUsers, getPosts})(Redux);


// class Redux extends Component {
//   state = {
//     value: 'value1',
//     value2: 'value2',
//   }
//   change = () => {
//     this.setState(
//       {
//         value: 123,
//         value2: 456,
//       }
//     )
//   }
//   render() {
//     return (
//       <>
//         <p>{this.state.value}</p>
//         <p>{this.state.value2}</p>
//         <button onClick={this.change}>Change</button>
//       </>
//     )
//   }
// }
// export default Redux;

// const Redux = () => {
//   const [number, setNumber] = useState(0)
//   const [test, setTest] = useState('string test')
//   const [values, setValues] = useState({
//     value: 'value1',
//     value2: 'value2',
//   })
//
//   const change = () => {
//     setValues(prevState => ({...prevState, value: 123}))
//   }
//
//   useEffect(() => {
//     console.log('useEffect')
//   }, [number])
//
//   const plusNumber = () => {
//     setNumber(prevState => (prevState + 1))
//   }
//
//   const minusNumber = () => {
//     setNumber(prevState => (prevState - 1))
//   }
//
//   return (
//     <>
//       <div>
//         <p>{number}</p>
//         <button onClick={plusNumber}>+</button>
//         <button onClick={minusNumber}>-</button>
//       </div>
//       <h1>{test}</h1>
//       <p>{values.value}</p>
//       <p>{values.value2}</p>
//       <button onClick={change}>Change</button>
//     </>
//   )
// }
//
// export default Redux;