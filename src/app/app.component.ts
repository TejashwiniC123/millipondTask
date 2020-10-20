import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registerForm: FormGroup;
  name:any;
  email:any;
  phone:any;
  location:any;
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  formDetails= [];
  constructor(private formBuilder: FormBuilder){}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email:[''],
      phone:[''],
      location:['']
  });
}


  
	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

  save(){
   
    
    this.formDetails.push({name:this.name,email:this.email,phone:this.phone.number,location:this.location});
    console.log(this.formDetails);
    this.registerForm.reset();
  }

}
