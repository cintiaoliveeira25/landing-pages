import P from 'prop-types';
import * as Styled from './styles';

export const GridText = ({ children }) => {
	return (
		<Styled.Container>
			<h1>{children}</h1>
		</Styled.Container>
	);
};

GridText.propTypes = {
	children: P.node.isRequired,
};
