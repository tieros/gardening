import { toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    mode: 'success' | 'error' | 'info' | 'warning';
    content: React.ReactNode;
};

const Toast = ({ mode, content }: Props) => {
    const config = {
        position: 'bottom-left' as ToastPosition,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    };

    switch (mode) {
        case 'success':
            toast.success(content, config);
            break;
        case 'error':
            toast.error(content, config);
            break;
        case 'info':
            toast.info(content, config);
            break;
        case 'warning':
            toast.warning(content, config);
            break;
        default:
            toast.info(content, config);
            break;
    }
};

export default Toast;
