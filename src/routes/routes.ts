import { lazy } from "react";
import { NoLazy } from '../lazyload/pages/NoLazy';

// simplified the Javascript component element onto the JSXComponent variable for better comprehension
type JSXComponent = () => JSX.Element;

// The route interface will have a unique to string, a unique path string, either a component composed of a 
// lazy react component or a javascript component and a unique string name
interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string;
}

// for each component to behave properly on a lazyload we need to export them as default, therefore we need to
// use the 'export default (component name)' after the component declaration (in this case in each page component)
// for the lazy method to work accordingly
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/ '../lazyload/layout/LazyLayout'));

// the routes array will be 'casted' as Route type and we need to specify it is going to be an array
export const routes: Route[] = [
    {        
        to: '/lazyload/*',
        path: '/lazyload//',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]