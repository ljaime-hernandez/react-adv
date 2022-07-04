// the index will help us out on the import definition on any other file, it is going to make the import from this file instead of
// doing it component by component, ex:
 
// instead of 
// import {LazyPage1} from '../lazyload/pages/LazyPage1'
// import {LazyPage1} from '../lazyload/pages/LazyPage2'
// import {LazyPage1} from '../lazyload/pages/LazyPage3'

// we can simplify it like
// import {LazyPage1, LazyPage2, LazyPage3} from '../lazyload/pages'

export { LazyPage1 } from './LazyPage1';
export { LazyPage2 } from './LazyPage2';
export { LazyPage3 } from './LazyPage3';

