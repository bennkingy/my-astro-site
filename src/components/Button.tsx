const Button = ({ children }) => {
	const handleClick = () => {
		window.alert('Clicked');
	};
	return <button onClick={handleClick}>{children}</button>;
};

export default Button;
