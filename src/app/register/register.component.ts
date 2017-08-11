import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { RegisterService } from './register.service';
import { IUser } from './register';


// import {ICustomer} from './customer';
// import {CustomerService} from './customer.service';


@Component({
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {
    @ViewChild('modal')
    modal: ModalComponent;

    pageTitle: string = 'Register Page';
    showError: boolean = false;
    email: string;
    password: string;
    confirmPassword: string;
    errorMessage: string;
    

    constructor(private _registerService: RegisterService, private router: Router) {

    }

    onClick(): void {
        this.router.navigate(['/login']);
    }

    getUser(): IUser {
        // Return an initialized object
        return {
            Email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
    }

    register(): void {

        let p = this.getUser();
        this._registerService.addUser(p)
            .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
            );
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        //this.productForm.reset();
        this.open();
        //this.router.navigate(['/products']);
    }


    ngOnInit(): void {
    }

    close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }

}