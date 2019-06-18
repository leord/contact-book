import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[]; 
  currentContact: null;
  searchText: null;

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
     this.getContactList();
  }

  getContactList() {
    this.contactsService
      .getContactList()
      .subscribe(contacts => this.contactList = contacts);
  }

}