import { Footer } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'Footer',
	component: Footer,
	args: {
		footerHtml: `<p><a href="https://github.com/cintiaoliveeira25">Feito com ❤ por Cíntia Oliveira</a></p>`,
	},
};

export const Template = (args) => {
	return (
		<div>
			<Footer {...args} />
		</div>
	);
};
