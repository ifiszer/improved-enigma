// Define the Person interface
interface Person {
  name: string;
}

// Define the PersonRepository class
class PersonRepository {
    private static instance: PersonRepository;
    private persons: Person[] = [];
  
    private constructor() {}
  
    static getInstance(): PersonRepository {
      if (!PersonRepository.instance) {
        PersonRepository.instance = new PersonRepository();
      }
      return PersonRepository.instance;
    }

    findPeople(name?: string): Person[] {
        if (name) {
          return this.persons.filter(person => person.name.includes(name));
        }
        return this.persons;
      }
  
    addPerson(person: Person) {
      this.persons.push(person);
    }
  
    getPerson(name: string): Person | undefined {
      return this.persons.find(person => person.name === name);
    }
  
    removePerson(name: string): void {
      this.persons = this.persons.filter(person => person.name !== name);
    }
  }