import React, {
	Component,
	PropTypes
} from 'react'
import cookie from 'react-cookie'
import LoginWindow from './display-loginWindow.js'
import DialogWindow from '../dialog/display-dialogWindow.js'
import { Dialog } from "../popupDemo";

class LoginInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoginout: false
		}
	}
	handleClickLoginout=()=> {
		const {
			handleLogoutClick
		} = this.props
		handleLogoutClick()
		this.setState({ isLoginout: false })
	}
	render() {
		const {
			userInfo,
			isLogined,
			handleLoginClick,
		} = this.props

		return (
			<div className="login-info">
				<Dialog open={this.state.isLoginout} onClose={() => { this.setState({ isLoginout: false }) }}>
					<div>
						<p>注销</p>
						<div>确认注销吗？</div>
						<div className="ta-r pt8">
							<button
								className="tag-text ptb6 plr16"
								onClick={() => this.setState({ isLoginout: false })}>取消</button>
							<button className="tag-text ptb6 plr16" onClick={()=>this.handleClickLoginout()}>确认</button>
						</div>
					</div>
				</Dialog>
				{
					isLogined ?
						(<button className="btn btn-s btn-hollow b-w c-text-w mr8" onClick={() => { this.setState({ isLoginout: true }) }}>注销</button>) :
						(<button className="btn btn-s btn-hollow b-w c-text-w mr8" onClick={handleLoginClick.bind(this)}>登录</button>)
				}
				<span>{userInfo.msg}</span>
			</div>
		)
	}
}
// LoginInfo.defaultProps = {
// 	userInfo: cookie.load('token') ? JSON.parse(localStorage.getItem("userInfo")) : {
// 		msg: "",
// 		name: ""
// 	}
// }

export default LoginInfo
