import Button from '@mui/material/Button';

const ButtonMUI = ({ children }) => {
	const handleClick = () => {
		window.alert('Clicked');
	};
	return <Button>{children}</Button>;
};

export default Button;
