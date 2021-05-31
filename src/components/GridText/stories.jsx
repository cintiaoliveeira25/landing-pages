import { GridText } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'GridText',
	component: GridText,
	args: {
		children: 'GridText',
	},
	argTypes: {
		children: { type: 'string' },
	},
};

export const Template = (args) => {
	return (
		<div>
			<GridText {...args} />
		</div>
	);
};
