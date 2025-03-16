import { Injectable } from "@angular/core";

export interface Menu{
    state:string;
    name:string;
    icon:string;
    role:string;
}
const MENUITEMS = [
    { state:'dashboard',name:'Dashboard',icon:'dashboard',role:''},
    { state:'category',name:'Manage Category',icon:'category',role:'admin'},
    { state:'product',name:'Manage Product',icon:'inventory',role:'admin'},
    { state:'order',name:'Manage Order',icon:'list_alt',role:''},
    { state:'bill',name:'View Bill',icon:'import_contacts',role:''},
    { state:'user',name:'View User',icon:'people',role:'admin'},
    { state: 'our-menu', name: 'Our Menu', icon: 'restaurant', role: '' },
    { state: 'contact-us', name: 'Contact Us', icon: 'contact_support', role: '' },
    { state: 'about-us', name: 'About Us', icon: 'info', role: '' },
    
];

@Injectable()
export class MenuItems{
    getMenuitem():Menu[]{
        return MENUITEMS;
    }
}