import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'usersfilter',
    pure: false
})
export class UsersFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        let str: string = (''+filter).toLowerCase();
        let splits = str.split(' ');

        if(splits && splits.length === 1) {
            return items.filter(item => item.location.city.toLowerCase().indexOf(str) !== -1 || item.name.title.toLowerCase().indexOf(str) !== -1 || item.name.first.toLowerCase().indexOf(str) !== -1 || item.name.last.toLowerCase().indexOf(str) !== -1);
        }
        else if(splits && splits.length === 2) {
            let first = splits[0].toLowerCase();
            let last = splits[1].toLowerCase();
            return items.filter(item => (item.name.first.toLowerCase().indexOf(first) !== -1 && item.name.last.toLowerCase().indexOf(last) !== -1) ||  (item.name.first.toLowerCase().indexOf(last) !== -1 && item.name.last.toLowerCase().indexOf(first) !== -1));
        }
        else if(splits && splits.length === 3) {
            let first = splits[0].toLowerCase();
            let last = splits[1].toLowerCase();
            let city = splits[2].toLowerCase();
            return items.filter(item => item.name.first.toLowerCase().indexOf(first) !== -1 && item.name.last.toLowerCase().indexOf(last) !== -1 && item.location.city.toLowerCase().indexOf(city) !== -1);
        }
    }
}