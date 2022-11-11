import React from 'react';
import '../css/TodoItem.css';
 
class TodoItem extends React.Component {
    render() {
        const {content, isComplete, id, onToggle, onRemove} = this.props;
 
        return (
            //컴포넌트의 최상위 DOM 의 클릭 이벤트에는 onToggle 을 설정하고, x 가 있는 부분에는 onRemove 를 설정해주었다.
            //onRemove → onToggle 순으로 함수가 호출될수 있다.
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="todo-item-remove" onClick={(e) => {
                    // 삭제 부분에 들어간 이벤트가 해당 부모의 이벤트까지 전달되지 않도록 해준다. 
                    // 따라서 onToggle 은 실행되지 않고 onRemove 만 실행된다.
                    e.stopPropagation();    
                    onRemove(id)}
                }>
                    &times;
                </div>
                <div className={`todo-item-content ${isComplete ? 'isComplete' : '' }`}>
                    <div>
                       {content}
                    </div>
                </div>
                {
                    isComplete && (<div className="isComplete-mark">✓</div>)
                }
            </div>
        )
    }
}
 
export default TodoItem;