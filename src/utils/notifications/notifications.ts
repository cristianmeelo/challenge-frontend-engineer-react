import { Flip, Id, toast } from 'react-toastify';

export const ToastLoading = (message: string) => {
  return toast.loading(`${message}`, {
    type: toast.TYPE.INFO,
    theme: 'colored',
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
export const ToastSuccessful = (id: Id, message: string) => {
  return toast.update(id, {
    render: `${message}`,
    type: toast.TYPE.SUCCESS,
    autoClose: 1500,
    theme: 'colored',
    icon: true,
    transition: Flip,
    isLoading: false,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    closeButton: true,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
export const ToastError = (id: Id, message: string) => {
  return toast.update(id, {
    render: `${message}`,
    type: toast.TYPE.ERROR,
    autoClose: 1500,
    theme: 'colored',
    icon: true,
    transition: Flip,
    isLoading: false,
    hideProgressBar: false,
    pauseOnHover: true,
    draggable: true,
    closeButton: true,
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};