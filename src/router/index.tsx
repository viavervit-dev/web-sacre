import { createBrowserRouter } from 'react-router-dom';
import { CatalogPage } from '@/pages/Catalog/CatalogPage';
import { HomePage } from '@/pages/Home/HomePage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';
import { RootPage } from '@/pages/Root/RootPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'catalogo',
				element: <CatalogPage />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);
