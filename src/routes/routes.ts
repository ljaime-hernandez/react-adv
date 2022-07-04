<<<<<<< HEAD
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
=======
import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { LazyPage1 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));



export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
>>>>>>> 5275af36577841944541c291875a9e2db0a84f52
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
<<<<<<< HEAD
    }
]
=======
    },

];
>>>>>>> 5275af36577841944541c291875a9e2db0a84f52
