import React, {Component} from 'react';
// import List from "../list";
class Header extends Component {

    state = {}
    submit = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value, '👌')
            // this.props.addTaskToList(this.state.task)
        }
    }

    render() {
        return (
            <div className='header flex'>
                <input type='text' placeholder="请确认你的任务名称，按回车键确认" onKeyUp={this.submit}/>
            </div>
        );
    }
}

export default Header;
