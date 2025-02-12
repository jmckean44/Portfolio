export enum ProductCategory {
	Projects = 'Projects',
	Websites = 'websites',
}

export interface Product {
	id: number;
	name: string;
	slug: string;
	description: string;
	details: string;
	link: string;
	website: string;
	image: string;
	featured: string;
	category: ProductCategory;
}

export const products: Product[] = [
	{
		id: 1,
		name: 'Marina Resort Cavtat',
		slug: 'mrc',
		description: 'Marina Resort Cavtat is a waterfront resort in the Dubrovnik Riviera area of Croatia with residences including Seaside Villas, Waterfront Apartments, and a Penthouse Collection.',
		details: 'Javascript, PHP, HTML, CSS, Adobe Suite, multi-language, Salesforce',
		link: 'marinaresortcavtat.com',
		website: 'https://marinaresortcavtat.com/',
		featured: '#featured',
		image: '/src/img/sites/mrc.webp',
		category: ProductCategory.Projects,
	},
	{
		id: 2,
		name: 'The Diamond Rentals',
		slug: 'diamond',
		website: 'https://junctionrentals.ca',
		featured: '',
		description: 'The Diamond is an up and coming modern open-concept rental building and future community in the Junction area of Toronto.',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite, MailChimp',
		link: 'junctionrentals.ca',
		image: '/src/img/sites/diamond.webp',
		category: ProductCategory.Projects,
	},
	{
		id: 3,
		name: 'No 7 Rosedale',
		slug: '7dale',
		description: 'No 7 Rosedale is a modern, exclusive residential building located in the Rosedale Valley neighbourhood in Toronto.',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite, MailChimp',
		link: '7dale.com',
		website: 'https://7dale.com',
		featured: '',
		image: '/src/img/sites/no7dale.webp',
		category: ProductCategory.Projects,
	},

	{
		id: 4,
		name: 'Platinum Vista',
		slug: 'platinumVista',
		description: 'Platinum Vista Inc. is a Toronto based real-estate development firm with exclusive resort, residential, and highrise developments across Canada and Europe.',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite',
		link: 'platinumvista.ca',
		website: 'https://platinumvista.ca',
		featured: '',
		image: '/src/img/sites/platinumVista.webp',
		category: ProductCategory.Projects,
	},
	{
		id: 5,
		name: 'Mellema',
		slug: 'mellema',
		description: 'Angelika Mellema is a registered psychotherapist in Toronto.',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite',
		link: 'mellema.ca',
		website: 'https://mellema.ca',
		featured: '',
		image: '/src/img/sites/mellema.webp',
		category: ProductCategory.Projects,
	},
	{
		id: 6,
		name: '260 High Park',
		slug: '260HighPark',
		description: '260 High Park is a modern repurposed landmark church developlment with an adjoining condominium in Toronto.',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite',
		link: '260highpark.com',
		website: 'https://260highpark.com/',
		featured: '',
		image: '/src/img/sites/260HP.webp',
		category: ProductCategory.Projects,
	},
	{
		id: 7,
		name: 'FieldGate Construction',
		slug: 'fieldgate',
		description: 'Fieldgate Homes is a commercial, residential, office, and industrial building developer with properties across Ontario.',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite',
		link: 'fieldgateconstruction.com',
		website: 'https://fieldgateconstruction.com/',
		featured: '',
		image: '/src/img/sites/fieldgate.webp',
		category: ProductCategory.Projects,
	},
	{
		id: 8,
		name: 'Kingsway By The River',
		slug: 'kingsway',
		description:
			'Perfectly situated in the heart of Toronto’s prestigious Kingsway neighbourhood, development partners Urban Capital and Northam Realty Advisors created a classic, internationally styled community on the bank of the Humber River.',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite',
		link: 'kingswaybytheriver.ca',
		website: 'https://kingswaybytheriver.ca/',
		featured: '',
		image: '/src/img/sites/kingsway.webp',
		category: ProductCategory.Projects,
	},
	{
		id: 9,
		name: 'Clean Rooms Plus',
		slug: 'cleanrooms',
		description: 'Clean Rooms Plus builds contaminate-free clean rooms for multiple industries across North America. ',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite, Homepage Video Underlay',
		link: 'cleanroomsplus.ca',
		website: 'https://www.cleanroomsplus.ca/',
		featured: '',
		image: '/src/img/sites/cleanrooms.webp',
		category: ProductCategory.Projects,
	},
	{
		id: 10,
		name: 'Wilkinson Construction',
		slug: 'wilkinson',
		description: 'Wilkinson Construction has been a trusted builder of residential, commercial, industrial, and institutional projects in Central and Western Canada.',
		details: 'jQuery, PHP, HTML, CSS, Adobe Suite',
		link: 'wilkinsonconstruction.ca',
		website: 'https://www.wilkinsonconstruction.ca',
		featured: '',
		image: '/src/img/sites/wilkinson.webp',
		category: ProductCategory.Projects,
	},
];
