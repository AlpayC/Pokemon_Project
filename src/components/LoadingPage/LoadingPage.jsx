import { useContext, useEffect } from "react";
import Pokeball from "../../assets/svg/Pokeball";
import { LoaderContext } from "../../context/Context";
import "./LoadingPage.css";

const LoadingPage = () => {
	const { isLoading, setIsLoading } = useContext(LoaderContext);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2500);
	});
	return (
		<section className='loading-section'>
			<Pokeball />
		</section>
	);
};

export default LoadingPage;
