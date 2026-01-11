import java.util.LinkedList;

class HashTable {
    private int size;
    private LinkedList<Entry>[] table;

    // Constructor
    public HashTable(int size) {
        this.size = size;
        table = new LinkedList[size];
        for (int i = 0; i < size; i++) {
            table[i] = new LinkedList<>();
        }
    }

    // Hash function to calculate index
    private int hash(String key) {
        int hash = 0;
        for (int i = 0; i < key.length(); i++) {
            hash += key.charAt(i);
        }
        return hash % size;
    }

    // Insert key-value pair
    public void set(String key, int value) {
        int index = hash(key);
        for (Entry entry : table[index]) {
            if (entry.key.equals(key)) {
                entry.value = value; // Update existing key
                return;
            }
        }
        table[index].add(new Entry(key, value)); // Add new key-value pair
    }

    // Retrieve value by key
    public Integer get(String key) {
        int index = hash(key);
        for (Entry entry : table[index]) {
            if (entry.key.equals(key)) {
                return entry.value;
            }
        }
        return null;
    }

    // Delete key-value pair
    public void remove(String key) {
        int index = hash(key);
        table[index].removeIf(entry -> entry.key.equals(key));
    }

    // Display Hash Table
    public void display() {
        for (int i = 0; i < size; i++) {
            if (!table[i].isEmpty()) {
                System.out.print(i + " -> ");
                for (Entry entry : table[i]) {
                    System.out.print("(" + entry.key + ", " + entry.value + ") ");
                }
                System.out.println();
            }
        }
    }

    // Entry class to hold key-value pairs
    static class Entry {
        String key;
        int value;

        public Entry(String key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    // Example usage
    public static void main(String[] args) {
        HashTable hashTable = new HashTable(10);
        hashTable.set("apple", 10);
        hashTable.set("grape", 15);
        hashTable.set("banana", 25);
        hashTable.display();

        System.out.println("Value for 'banana': " + hashTable.get("banana"));
        hashTable.remove("banana");
        System.out.println("Value for 'banana' after removal: " + hashTable.get("banana"));
    }
}
