import type { ProductCardProduct } from '@/components/ProductCard/ProductCard';

const medalAngelUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251044/medal-angel_zaoqc4.jpg';
const medalCrucifixUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251060/medal-crucifix_kfcqzk.jpg';
const medalSacredHeartUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251085/medal-sacred-heart_fszfrw.jpg';
const medalVirginUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251128/medal-virgin_ieaw4q.jpg';
const rosaryUrl =
	'https://res.cloudinary.com/dcpf2yyhe/image/upload/v1777251142/rosary_bdnlrt.jpg';

export const catalogProducts: ProductCardProduct[] = [
	{
		id: 'virgen-guadalupe',
		title: 'Virgen de Guadalupe',
		subtitle: 'Medallas Marianas',
		description:
			'Medalla labrada con la imagen de la Patrona de America, pensada para llevar cerca del corazon.',
		price: 89000,
		image: medalVirginUrl,
		badge: 'Mas elegida',
	},
	{
		id: 'medalla-milagrosa',
		title: 'Medalla Milagrosa',
		subtitle: 'Medallas Marianas',
		description:
			'Iconografia tradicional de Santa Catalina Laboure reinterpretada con delicadeza dorada.',
		price: 65000,
		image: medalVirginUrl,
	},
	{
		id: 'virgen-lujan',
		title: 'Virgen de Lujan',
		subtitle: 'Medallas Marianas',
		description:
			'Patrona de Argentina en una medalla pulida, ideal para acompanar peregrinaciones y promesas.',
		price: 72000,
		image: medalVirginUrl,
	},
	{
		id: 'sagrado-corazon',
		title: 'Sagrado Corazon',
		subtitle: 'Devocionales',
		description:
			'El amor divino en una pieza de lineas clasicas, llamas, espinas y brillo ceremonial.',
		price: 75000,
		image: medalSacredHeartUrl,
	},
	{
		id: 'inmaculado-corazon',
		title: 'Inmaculado Corazon',
		subtitle: 'Devocionales',
		description:
			'Pieza dedicada al corazon de Maria, con corona de rosas grabada a mano y terminacion dorada.',
		price: 82000,
		image: medalSacredHeartUrl,
	},
	{
		id: 'crucifijo-barroco',
		title: 'Crucifijo Barroco',
		subtitle: 'Cruz y Pasion',
		description:
			'Cruz ornamental inspirada en retablos antiguos y joyeria devocional europea.',
		price: 120000,
		image: medalCrucifixUrl,
	},
	{
		id: 'cruz-jerusalen',
		title: 'Cruz de Jerusalen',
		subtitle: 'Cruz y Pasion',
		description:
			'Simbolo de peregrinacion y memoria sagrada, con geometria fuerte y acabado antiguo.',
		price: 110000,
		image: medalCrucifixUrl,
	},
	{
		id: 'cruz-tau',
		title: 'Cruz Tau Franciscana',
		subtitle: 'Cruz y Pasion',
		description:
			'Reinterpretacion contemporanea de la cruz franciscana, en metal patinado y bordes suaves.',
		price: 58000,
		image: medalCrucifixUrl,
	},
	{
		id: 'san-miguel',
		title: 'San Miguel Arcangel',
		subtitle: 'Protectores Celestiales',
		description:
			'Medallon protector con presencia de coleccion, creado para acompanar camino y oracion.',
		price: 95000,
		image: medalAngelUrl,
	},
	{
		id: 'angel-guardian',
		title: 'Angel de la Guarda',
		subtitle: 'Protectores Celestiales',
		description:
			'Una medalla serena para bendecir hogares, viajes y vinculos queridos.',
		price: 70000,
		image: medalAngelUrl,
	},
	{
		id: 'san-rafael',
		title: 'San Rafael Arcangel',
		subtitle: 'Protectores Celestiales',
		description:
			'Pieza dedicada al sanador celestial, lineas sutiles y simbolo del pez en relieve.',
		price: 88000,
		image: medalAngelUrl,
	},
	{
		id: 'rosario-nacar',
		title: 'Rosario de Nacar',
		subtitle: 'Oracion y Meditacion',
		description:
			'Rosario artesanal con cuentas luminosas y terminacion dorada para rituales cotidianos.',
		price: 145000,
		image: rosaryUrl,
		badge: 'Edicion limitada',
	},
	{
		id: 'rosario-madera-olivo',
		title: 'Rosario de Olivo',
		subtitle: 'Oracion y Meditacion',
		description:
			'Cuentas talladas en madera de olivo de Tierra Santa, calidez natural y aroma persistente.',
		price: 92000,
		image: rosaryUrl,
	},
	{
		id: 'rosario-plata',
		title: 'Rosario de Plata 925',
		subtitle: 'Oracion y Meditacion',
		description:
			'Pieza ceremonial con cuentas pulidas de plata pura y crucifijo articulado.',
		price: 235000,
		image: rosaryUrl,
		badge: 'Premium',
	},
	{
		id: 'medalla-san-benito',
		title: 'Medalla de San Benito',
		subtitle: 'Protectores Celestiales',
		description:
			'Iconografia tradicional con inscripciones latinas, pensada como amuleto de proteccion.',
		price: 54000,
		image: medalAngelUrl,
	},
	{
		id: 'corazon-jesus-esmaltado',
		title: 'Sagrado Corazon Esmaltado',
		subtitle: 'Devocionales',
		description:
			'Version premium con esmalte rojo profundo, contornos dorados y reverso grabado.',
		price: 168000,
		image: medalSacredHeartUrl,
		badge: 'Edicion limitada',
	},
];
