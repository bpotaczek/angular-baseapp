import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models';
import { SelectItem } from 'primeng/components/common/selectitem';

@Pipe({ name: 'toSelectItem' })
export class ToSelectItemPipe implements PipeTransform {

   public transform(user: User[]): SelectItem[] {
        if (!user) {
            return undefined;
        }
        return user.map(p => ({ label: `${p.id}: ${p.name}`, value: p.id }));
    }
}
