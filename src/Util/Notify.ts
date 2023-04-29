import {toast} from "react-toastify";

const success = (message: string) => {
	toast.success(message, {
		position: "top-right",
		autoClose: 1500,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
	});
}

const error = (message: string) => {
	toast.error(message, {
		position: "top-right",
		autoClose: 4000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
	});
}

const warning = (message: string) => {
	toast.warning(message, {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
	});
}

export const Notify = {success, error, warning}
