import { AbstractControl, FormGroup, Validator, Validators } from '@angular/forms';
export class OldPassValidator{
    static match(control: AbstractControl):Promise<Validators | null>
    {
        return new Promise((resolve,result)=>{
            setTimeout(()=>{
                if(control.value !="1234")
                    resolve({ match : true });
                else
                    resolve(null);
            },2000)
        })
    }

    static detect(control:AbstractControl)
    {
        let op=control.get('newpass');
        let np=control.get('conpass');
        if(op.value !== np.value)        
            return {detect:true};
        return null;
    }

}