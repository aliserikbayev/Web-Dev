from models import Animal, Dog, Cat

def main():
    animals = [
        Animal("Generic", 5, "brown"),
        Dog("Rex", 3, "golden", "Golden Retriever"),
        Cat("Whiskers", 2, "black", True),
        Dog("Lucy", 4, "white", "Poodle"),
        Cat("Felix", 1, "orange", False)
    ]
    
    print("=" * 50)
    print("ANIMAL SHELTER DEMO")
    print("=" * 50)
    
    for animal in animals:
        print(f"\n{animal}")
        print(f"Info: {animal.info()}")
        print(f"Sound: {animal.speak()}")
        
        if isinstance(animal, Dog):
            print(f"Dog specific: {animal.fetch()}")
        elif isinstance(animal, Cat):
            print(f"Cat specific: {animal.scratch()}")

if __name__ == "__main__":
    main()
