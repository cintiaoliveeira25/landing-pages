import { SectionContainer } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'SectionContainer',
	component: SectionContainer,
	args: {
		children: (
			<div>
				<h1>SectionContainer</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis praesentium sapiente eum quod quasi omnis ipsam. Hic, quia illo? Molestiae inventore ipsam cupiditate harum perspiciatis cum pariatur dolorum iure.
				</p>
			</div>
		),
	},
	argTypes: {
		children: { type: '' },
	},
};

export const Template = (args) => {
	return (
		<div>
			<SectionContainer {...args} />
		</div>
	);
};
