class TrieNode {
    public TrieNode[] children;
    public boolean isEndOfWord;

    public TrieNode() {
        children = new TrieNode[26]; // Assuming lowercase English letters
        isEndOfWord = false;
    }
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    // Insert a word into the trie
    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the trie
    public boolean search(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return false;
            }
            node = node.children[index];
        }
        return node.isEndOfWord;
    }

    // Check if any words in the trie start with a given prefix
    public boolean startsWith(String prefix) {
        TrieNode node = root;
        for (char c : prefix.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return false;
            }
            node = node.children[index];
        }
        return true;
    }
}

// Example usage
public class Main {
    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("apple");
        trie.insert("app");

        System.out.println(trie.search("apple")); // true
        System.out.println(trie.search("app"));   // true
        System.out.println(trie.search("appl"));  // false
        System.out.println(trie.startsWith("app")); // true
    }
}
