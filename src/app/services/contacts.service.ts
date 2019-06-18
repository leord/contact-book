import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from '../model/contact';
import contactList from '../../assets/contact-list.json';

@Injectable()
export class ContactsService {
  contactListCopy: Contact[];

  constructor() {
    this.contactListCopy = [ ...contactList ];
  }

  getContactList(): Observable<Contact[]> {
    return of(this.contactListCopy);
  }

  getContactByName() {
  }

  addNewContact(contact: Contact) {
    this.contactListCopy.push(contact);
  }

}