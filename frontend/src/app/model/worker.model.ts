import { Contact } from './contact';
import { Review } from './review.model';

export class Worker {
    name: string
    professions: string[]
    stars: number
    contact: Contact
    reviews: Review[]
}