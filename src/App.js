import React from 'react';
import TodoListTemplate from './component/js/TodoListTemplate';
import Form from './component/js/Form';
import TodoItemList from './component/js/TodoItemList';


class App extends React.Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList />
      </TodoListTemplate>
    );
  } ;
};

export default App;