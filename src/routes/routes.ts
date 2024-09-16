import { lazy } from "react";

// simplified the Javascript component element onto the JSXComponent variable for better comprehension
type JSXComponent = () => JSX.Element;

// The route interface will have a unique to string, a unique path string, either a component composed of a 
// lazy react component or a javascript component and a unique string name
interface Route {
    path: string;
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string;
    children?: Route[];
}

// for each component to behave properly on a lazyload we need to export them as default, therefore we need to
// use the 'export default (component name)' after the component declaration (in this case in each page component)
// for the lazy method to work accordingly
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/ '../lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/ '../lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/ '../lazyload/pages/LazyPage3'));
const ShoppingPage = lazy(() => import(/* webpackChunkName: "LazyPage3"*/ '../component-patterns/pages/ShoppingPage'));


// the routes array will be 'casted' as Route type and we need to specify it is going to be an array
export const routes: Route[] = [
    {
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1',
    },
    {
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3'
    },
    {
        to: '/shoppingpage',
        path: 'shoppingpage',
        Component: ShoppingPage,
        name: 'Shopping Page'
    }
]