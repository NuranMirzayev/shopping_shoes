import { Img, ImgUrl, Item, SelectedFilterType, allProducts } from './types'

export const base_url = 'https://63e7a708ac3920ad5be16a86.mockapi.io/api/v1'

export const itemsPerPageDesktop = 8
export const itemsPerPageMobile = 6

export const navItems: Array<Item> = [
	{
		title: 'Home',
		route: 'home',
	},

	{
		title: 'Women',
		route: 'women',
	},
	{
		title: 'Kids',
		route: 'kids',
	},
	{
		title: 'Men',
		route: 'men',
	},
	{
		title: 'Sale',
		route: 'sale',
	},
	{
		title: 'About us',
		route: 'about us',
	},
]

export const images: Array<ImgUrl> = [
	{
		imgUrl: './assets/img_carousel/img_carousel1.png',
	},
	{
		imgUrl: './assets/img_carousel/img_carousel2.png',
	},
	{
		imgUrl: './assets/img_carousel/img_carousel3.png',
	},
	{
		imgUrl: './assets/img_carousel/img_carousel4.png',
	},
	{
		imgUrl: './assets/img_carousel/img_carousel5.png',
	},
]

export const imagesRight: Array<Img> = [
	{
		id: 1,
		imgUrl: './assets/img_right/right_photo1.png',
	},
	{
		id: 2,
		imgUrl: './assets/img_right/right_photo4.png',
	},
	{
		id: 3,
		imgUrl: './assets/img_right/right_photo3.png',
	},
]

export const AllProducts: Array<allProducts> = [
	{
		mainImg: 'mainImg_1',
		description:
			'Lock in your style with this AJ1. We kept everything you love about the classic design—premium leather, Air cushioning, iconic Wings logo—while adding the Nike FlyEase closure system to make on and off a breeze. Getting out the door is now quicker than ever: just strap and zip.',
		name: 'Air Jordan 1 Low FlyEase',
		price: 599.9,
		firsImg: 'firsImg_1',
		secondImg: 'secondImg_1',
		threeImg: 'threeImg_1',
		category: 'lifeStyle',
		gender: "Men's",
		size: '',
		id: 1,
	},
	{
		mainImg: 'mainImg_2',
		description:
			'Say I do (again) to the shoes you want to wear for the rest of your life. Returning to the original materials and keeping everything you love best—classic leather construction and the perfect amount of hoops style—the Nike Air Force 1 Low Retro celebrates the icon of everyday fashion. Now with a sneaker cleaning brush to keep your look crisp',
		name: 'Nike Air Force 1 Low Retro',
		price: 479.9,
		firsImg: 'firsImg_2',
		secondImg: 'secondImg_2',
		threeImg: 'threeImg_2',
		category: 'sales',
		gender: "Men's" || 'Sales',
		sale: 599.9,

		size: '',
		id: 2,
	},
	{
		mainImg: 'mainImg_3',
		description:
			'Nike Air Monarch IV sets you up for working out with durable leather on top for support. Lightweight foam teams up with Nike Air cushioning for comfort in every stride.',
		name: 'Nike Air Monarch IV',
		price: 299.9,
		firsImg: 'firsImg_3',
		secondImg: 'secondImg_3',
		threeImg: 'threeImg_3',
		category: 'walking',
		gender: "Men's",
		size: '',

		id: 3,
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_4',
		description:
			'Instantly tilt the pitch in the bold design of the Superfly 9 Elite SG-Pro. We added a Zoom Air unit made specifically for football and grippy texture up top for exceptional touch, so you can dominate in the waning minutes of a match—when it matters most. Feel the explosive speed as you race around the pitch, making the critical plays with velocity and pace. ',
		name: 'Nike Zoom Mercurial Superfly 9 Elite SG-Pro Anti-Clog',
		price: 1159.9,
		firsImg: 'firsImg_4',
		secondImg: 'secondImg_4',
		threeImg: 'threeImg_4',
		category: 'football',

		size: '',
		gender: "Men's",
		id: 4,
	},
	{
		mainImg: 'mainImg_5',
		description:
			"Once you take a few strides in the Nike Air Zoom Alphafly NEXT% 2, you'll never look at your favourite pair of old racing shoes the same way again. These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system marries the 2 worlds of comfort and speed in holy running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests",
		name: 'Nike Alphafly 2',
		price: 1179.9,
		firsImg: 'firsImg_5',
		secondImg: 'secondImg_5',
		threeImg: 'threeImg_5',
		category: 'running',
		gender: "Men's",
		size: '',

		id: 5,
	},
	{
		mainImg: 'mainImg_6',
		description:
			"Elena Delle Donne's basketball shoe invites everyone to step in and take a shot at the game. Made for everyone, it has a collapsible heel and a large strap, so you can get in and lock in with 1 hand. Full-length Air cushioning and a forefoot Zoom Air unit give you an optimal blend of bounce and energy return to help you feel fresh all game long. This version honours Elena's artistic pursuits, including her woodworking company of the same name.",
		name: "Nike Air Deldon 'Deldon Designs'",
		price: 469.9,
		firsImg: 'firsImg_6',
		secondImg: 'secondImg_6',
		threeImg: 'threeImg_6',
		category: 'basketball',
		gender: "Men's",
		size: '',

		id: 6,
	},
	{
		mainImg: 'mainImg_7',
		description:
			'Celebrate the love and joy of the game with the Nike Cosmic Unity 2. Made from at least 20% recycled content by weight, it provides enhanced responsiveness and support. This shoe will help keep you fresh and secure without overloading it with extra grams, so that you can focus on locking down the perimeter defensively or starting the fast break after a rebound.',
		name: 'Nike Cosmic Unity 2',
		price: 669.9,
		firsImg: 'firsImg_7',
		secondImg: 'secondImg_7',
		threeImg: 'threeImg_7',
		category: 'basketball',
		gender: "Men's",
		size: '',

		id: 7,
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_8',
		description:
			'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.',
		name: 'Air Jordan 1 Mid',
		price: 529.9,
		firsImg: 'firsImg_8',
		secondImg: 'secondImg_8',
		threeImg: 'threeImg_8',
		category: 'lifeStyle',
		gender: "Men's",
		size: '',

		id: 8,
	},
	{
		mainImg: 'mainImg_9',
		description:
			"The radiance lives on in the Nike Air Force 1 '07. Crossing hardwood comfort with off-court flair, this b-ball original puts a fresh spin on everything you know best about the AF-1: legendary comfort, era-echoing '80s construction and nothing-but-net style. Smooth leather is paired with soft nubuck and shaggy suede to give these kicks a rich mix of texture you have to feel to believe.",
		name: "Nike Air Force 1 '07",
		price: 529.9,
		firsImg: 'firsImg_9',
		secondImg: 'secondImg_9',
		threeImg: 'threeImg_9',
		category: 'lifeStyle',
		gender: "Men's",

		size: '',
		id: 9,
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_11',
		description:
			"Separate yourself from the competition in the AJ7 x Bephies Beauty Supply. Unapologetic, powerful and downright heat for the streets, this is founder Beth Birkett's transgressive take on a beloved hoops icon. The Huarache-inspired heel emblem nods to one of Birkett's fave sneakers, while transparent side vents bring fresh insight into cool. A mesh inner sleeve extends up over the ankle, and a toggle cinch and embroidered accents finish the look. Branding and graphics celebrate women of colour, tapping into Birkett's design ethos of honouring the individual and involving community—a new definition of off-court style.",
		name: 'Air Jordan 7 Retro BBS',
		price: 879.9,
		firsImg: 'firsImg_11',
		secondImg: 'secondImg_11',
		threeImg: 'threeImg_11',
		category: 'lifeStyle',
		gender: "Women's",
		size: '',

		id: 11,
	},
	{
		mainImg: 'mainImg_13',
		description:
			"The Nike Juniper Trail delivers a consistent ride for your off-road runs.It's built for rocky trails, helping you stay focused on the path ahead.Tough traction mixes with a lightweight design so you can keep moving when tackling challenging terrain.",
		name: 'Nike Juniper Trail',
		price: 319.9,
		firsImg: 'firsImg_13',
		secondImg: 'secondImg_13',
		threeImg: 'threeImg_13',
		category: 'walking',
		gender: "Women's",
		size: '',

		id: 13,
	},
	{
		mainImg: 'mainImg_12',
		description:
			'Rooted in sporty athletics DNA, the Air Max Dawn is thoughtfully made from at least 20% recycled materials by weight. Graphic lines and material blocking bring a fresh update inspired by the jogakbo, or patchwork, techniques often used in the traditional Korean textile art of bojagi. Soft synthetic suede, airy textiles and Max Air units in the heels keep these kicks true to their vintage running roots. Step into them and experience a new dawn.',
		name: 'Nike Air Max Dawn',
		price: 309.9,
		firsImg: 'firsImg_12',
		secondImg: 'secondImg_12',
		threeImg: 'threeImg_12',
		category: 'sales',
		gender: "Women's" || 'Sales',
		sale: 509.9,
		size: '',

		id: 12,
	},
	{
		mainImg: 'mainImg_14',
		description:
			"Celebrate the game's biggest competition in a design ignited by the science of connectivity and gravity that the world stage inspires. Featuring a stunning futuristic look made for the globe's greatest players, this boot has raised textures backed by soft foam pods for precise dribbling, passing and scoring in 1 of our lightest Tiempos to date. This version has Anti-Clog Traction on the soleplate, which helps prevent mud from sticking.",
		name: 'Nike Tiempo Legend 9 Elite SG-Pro Anti-Clog Traction',
		price: 959.9,
		firsImg: 'firsImg_14',
		secondImg: 'secondImg_14',
		threeImg: 'threeImg_14',
		category: 'football',

		size: '',
		gender: "Women's",
		id: 14,
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_15',
		description:
			"Stay on your feet in a design that's made to help keep you healthy while catering to your individualistic tastes in the Nike React Infinity Run 3 By You. You're the creator with the final say, painting and picking from an extensive pallet of colours and exterior details that suite your distinctive style. Customise it to your liking and feel hopeful about endless possibilities when you hit the open road.",
		name: 'Nike React Infinity 3 By You',
		price: 799.9,
		firsImg: 'firsImg_15',
		secondImg: 'secondImg_15',
		threeImg: 'threeImg_15',
		category: 'running',
		size: '',
		gender: "Women's",

		id: 15,
	},
	{
		mainImg: 'mainImg_16',
		description:
			"Designed for No. 77 and made for every athlete craving speed and efficiency, Luka's debut delivers the goods. The first shoe with full-length Formula 23 foam, it has an ultra-supportive fit crafted with the step-back in mind. Meanwhile, strong and lightweight Flight Wire cables keep you feeling contained, whether you're playing indoors or out. This is the assist you've been waiting for—get out there and make your shot.",
		name: "Luka 1'",
		price: 429.9,
		firsImg: 'firsImg_16',
		secondImg: 'secondImg_16',
		threeImg: 'threeImg_16',
		category: 'basketball',
		size: '',
		gender: "Women's",

		id: 16,
	},
	{
		mainImg: 'mainImg_17',
		description:
			"Elena Delle Donne's debut basketball shoe invites everyone to step in and take a shot at the game. Made for all athletes of all abilities, it has a collapsible heel and a large strap, so you can get in and lock in with one hand. Full-length Nike Air cushioning plus a forefoot Zoom Air unit give you an optimal blend of bounce and energy return to help you feel fresh all game long. ",
		name: "Nike Air Deldon 'Legacy'",
		price: 469.9,
		firsImg: 'firsImg_17',
		secondImg: 'secondImg_17',
		threeImg: 'threeImg_17',
		category: 'basketball',
		gender: "Women's",
		size: '',

		id: 17,
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_18',
		description:
			'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.',
		name: 'Air Jordan 1 Mid',
		price: 529.9,
		firsImg: 'firsImg_18',
		secondImg: 'secondImg_18',
		threeImg: 'threeImg_18',
		category: 'lifeStyle',
		gender: "Women's",
		size: '',

		id: 18,
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_19',
		description:
			'Celebrate heritage with an updated version of the Dunk High, recrafted to reflect the original from 1985. Matching the shape, look and feel that started it all, it delivers true vintage style while keeping the familiar comfort you love.',
		name: 'Nike Dunk High 1985',
		price: 559.9,
		firsImg: 'firsImg_19',
		secondImg: 'secondImg_19',
		threeImg: 'threeImg_19',
		category: 'lifeStyle',
		gender: "Women's",
		size: '',

		id: 19,
	},
	{
		mainImg: 'mainImg_21',
		description:
			"Make your stride iconic with the Air Jordan 1. Classic Medium Grey leather pairs with pony hair detailing throughout, while crafted details like the Metallic Silver Wings logo hardware add a premium boost to any 'fit. The finishing touch? Air cushioning underfoot lets you keep pace in comfort, so nothing holds you back from showing off your legendary look.",
		name: 'Medium Grey',
		price: 699.9,
		firsImg: 'firsImg_21',
		secondImg: 'secondImg_21',
		threeImg: 'threeImg_21',
		category: 'lifeStyle',
		gender: "Kids'",
		size: '',

		id: 21,
	},
	{
		mainImg: 'mainImg_23',
		description:
			"How fly is too fly? Your child might get close in these kicks inspired by decades of Jordan design. Mesh and leather uppers give plenty of stability without the worry of weighing 'em down. Plus, hook-and-loop closures keep their sneaks snug (and makes put-on and take-off easy).",
		name: 'Jordan Stay Loyal 2',
		price: 319.9,
		firsImg: 'firsImg_23',
		secondImg: 'secondImg_23',
		threeImg: 'threeImg_23',
		category: 'basketball',
		gender: "Kids'",

		id: 23,
		size: '',
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_22',
		description:
			'These kicks are designed for up-and-coming sneakerheads with big ideas. A bold mix of colours and materials makes a splash, while the see-through Max Air unit embraces futuristic design. Use the handy pull tabs to get your shoes on without missing a beat and zip through your day in comfort.',
		name: 'Jordan Air 200E',
		price: 249.9,
		firsImg: 'firsImg_22',
		secondImg: 'secondImg_22',
		threeImg: 'threeImg_22',
		category: 'sales',
		gender: "Kids'" || 'Sales',
		sale: 409.9,
		size: '',

		id: 22,
	},
	{
		mainImg: 'mainImg_24',
		description:
			"Learning the skills, the game and all the drills? Show how far you've come while rocking the Nike Jr. football boots. Designed for versatility from artificial-grass to real-grass surfaces, they have the traction you need to run and cut on different types of pitches. The durable design will hold up when your schedule is all about training during the week and matches on the weekends.",
		name: 'Nike Jr. Mercurial Superfly 9 Club FG/MG',
		price: 219.9,
		firsImg: 'firsImg_24',
		secondImg: 'secondImg_24',
		threeImg: 'threeImg_24',
		category: 'football ',

		size: '',
		gender: "Kids' ",
		id: 24,
	},
	{
		mainImg: 'mainImg_25',
		description:
			"What's Omni, you ask? It means universal, inclusive and all. Playtime is about freedom and imagination. As the ultimate play shoe, there are no limits when your kid pulls these Nikes on. They're durable for any indoor court surface and lightweight to help make play comfortable.",
		name: 'Nike Omni Multi-Court',
		price: 169.9,
		firsImg: 'firsImg_25',
		secondImg: 'secondImg_25',
		threeImg: 'threeImg_25',
		category: 'running || sales',
		gender: "Kids' || 'Sales",
		size: '',
		sale: 339.9,
		id: 25,
	},
	{
		mainImg: 'mainImg_26',
		description:
			'Gear up in Jordan heritage. With details drawn from decades of shoes, the Stay Loyal 2 is a collage of cool. Mesh and leather upper gives you stability without the worry of weighing you down. Air in the heel keeps you cushioned. Get out and play!',
		name: 'Jordan Stay Loyal 22',
		price: 349.9,
		firsImg: 'firsImg_26',
		secondImg: 'secondImg_26',
		threeImg: 'threeImg_26',
		category: 'basketball',
		gender: "Kids'",
		size: '',

		id: 26,
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_27',
		description:
			"Let your child rep the legendary career of 'His Airness' with the Jordan 6 Rings. Incorporating key features of each shoe worn during MJ's championship series, it has details that pop and comfy cushioning for growing feet.",
		name: 'Jordan 6 Rings',
		price: 319.9,
		firsImg: 'firsImg_27',
		secondImg: 'secondImg_27',
		threeImg: 'threeImg_27',
		category: 'basketball',
		gender: "Kids'",
		size: '',

		id: 27,
	},
	{
		mainImg: 'mainImg_28',
		description:
			"Even MJ was a kid once! Inspired by Mike's backyard battles with his older brother Larry, the Jordan Series references their legendary sibling rivalry throughout the design. Look for the hidden reminder to 'Swing for the Fence', a direct quote from Larry to his little bro.",
		name: 'Jordan Series ES ALT',
		price: 529.9,
		firsImg: 'firsImg_28',
		secondImg: 'secondImg_28',
		threeImg: 'threeImg_28',
		category: 'lifeStyle',
		gender: "Kids'",
		// size: "",

		id: 28,
		newArrivals: 'new',
	},
	{
		mainImg: 'mainImg_29',
		description:
			'Simple, comfortable and cushioned with Air—the Nike Air Max SC is an easy yes. The mixture of textures creates a durable and lightweight design you can rock all day, any day.',
		name: 'Nike Air Max SC',
		price: 219.9,
		firsImg: 'firsImg_29',
		secondImg: 'secondImg_29',
		threeImg: 'threeImg_29',
		category: 'lifeStyle',
		gender: "Kids'",
		sizeMain: [],

		id: 29,
	},
]

export const SelectedFilter: Array<SelectedFilterType> = [
	{
		titleOption: 'A-z',
		selectOption: 'caseOne',
		value: 1,
	},
	{
		titleOption: 'Z-a',
		selectOption: 'caseTwo',
		value: 2,
	},
	{
		titleOption: 'Low to High',
		selectOption: 'caseThree',
		value: 3,
	},
	{
		titleOption: 'High to Low',
		selectOption: 'caseFour',
		value: 4,
	},
]
