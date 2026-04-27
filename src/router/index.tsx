import { createBrowserRouter } from 'react-router-dom';
import { CatalogPage } from '@/pages/Catalog/CatalogPage';
import { HomePage } from '@/pages/Home/HomePage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/catalogo',
		element: <CatalogPage />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
