class TrieNode {
    constructor() {
        this.children = {}; // Stores children nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // Root of the trie
    }

    // Insert a word into the trie
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Check if any words in the trie start with a given prefix
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // true
console.log(trie.search("appl"));  // false
console.log(trie.startsWith("app")); // true
