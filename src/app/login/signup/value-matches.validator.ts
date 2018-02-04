import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[valueMatches][formControlName],[valueMatches][formControl],[valueMatches][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValueMatches), multi: true }
    ]
})
export class ValueMatches implements Validator {
    constructor(
        @Attribute('valueMatches') public valueMatches: string,
        @Attribute('reverse') public reverse: string
    ) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        let v = c.value;
        let isReverse = this.reverse === 'true';

        // control value (e.g. password)
        let e = c.root.get(this.valueMatches);

        // value not equal
        if (e && v !== e.value  && !isReverse) {
            return { valueMatches: false }
        } 

         // value equal and reverse
         if (e && v === e.value && isReverse) {
            delete e.errors['valueMatches'];
            if (!Object.keys(e.errors).length) e.setErrors(null);
        }
        
        // value not equal and reverse
        if (e && v !== e.value && isReverse) {
            e.setErrors({ validateEqual: false });
        }

        return null;
    }
}