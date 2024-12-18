import { StyledCounter, StyledMagnitude, StyledTopic } from './counter.styles';

const Counter = ({ topic, magnitude }) => {
	return (
		<StyledCounter>
			<StyledTopic>{topic}</StyledTopic>
			<StyledMagnitude>{magnitude}</StyledMagnitude>
		</StyledCounter>
	);
};

export default Counter;
