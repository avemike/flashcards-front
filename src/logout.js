import history from "./history"

export const Logout = () => {
	localStorage.removeItem("userKey");
	localStorage.removeItem("email");
	history.push('/home')
} 