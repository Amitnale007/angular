import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class UsernameValidators{
    
    static unique(control:AbstractControl) :Promise<Validators |null>
    {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value == "amit")
                    resolve({unique:true});
                else    
                    resolve(null);
            },2000)
        })
        
    }
    
    static cannotcontainspace(control : AbstractControl): ValidationErrors | null
    {
        if((control.value as string).indexOf(" ") >= 0)
            return { cannotcontainspace : true};
        return null;
    }
}