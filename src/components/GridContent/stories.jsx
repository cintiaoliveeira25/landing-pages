import { GridContent } from '.';

import mock from './mock';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'GridContent',
	component: GridContent,
	args: mock,
};

export const Template = (args) => {
	return (
		<div>
			<GridContent {...args} />
		</div>
	);
};
