import history from "./history"

export const Logout = () => {
	localStorage.removeItem("userKey");
	history.push('/home')
} 