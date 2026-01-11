import java.util.ArrayList;

class MaxHeap {
    private ArrayList<Integer> data;

    public MaxHeap() {
        this.data = new ArrayList<>();
    }

    private int getParentIndex(int index) {
        return (index - 1) / 2;
    }

    private int getLeftIndex(int index) {
        return 2 * index + 1;
    }

    private int getRightIndex(int index) {
        return 2 * index + 2;
    }

    private boolean hasParent(int index) {
        return getParentIndex(index) >= 0;
    }

    private boolean hasLeft(int index) {
        return getLeftIndex(index) < data.size();
    }

    private boolean hasRight(int index) {
        return getRightIndex(index) < data.size();
    }

    private void swap(int i, int j) {
        int temp = data.get(i);
        data.set(i, data.get(j));
        data.set(j, temp);
    }

    public void insert(int value) {
        data.add(value);
        heapifyUp();
        System.out.println("Inserted successfully: " + data);
    }

    private void heapifyUp() {
        int index = data.size() - 1;
        while (hasParent(index) && data.get(index) > data.get(getParentIndex(index))) {
            swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    }

    public Integer delete() {
        if (data.size() == 0) return null;
        if (data.size() == 1) return data.remove(0);

        int root = data.get(0);
        data.set(0, data.remove(data.size() - 1));
        heapifyDown();
        System.out.println("Deleted successfully: " + root);
        return root;
    }

    private void heapifyDown() {
        int index = 0;
        int length = data.size();

        while (true) {
            int largest = index;
            int left = getLeftIndex(index);
            int right = getRightIndex(index);

            if (left < length && data.get(left) > data.get(largest)) {
                largest = left;
            }

            if (right < length && data.get(right) > data.get(largest)) {
                largest = right;
            }

            if (largest == index) break;

            swap(index, largest);
            index = largest;
        }
    }

    public void printHeap() {
        System.out.println("Heap: " + data);
    }

    public static void main(String[] args) {
        MaxHeap maxHeap = new MaxHeap();
        maxHeap.insert(10);
        maxHeap.insert(2);
        maxHeap.insert(3);
        maxHeap.insert(7);
        maxHeap.insert(9);
        maxHeap.insert(4);
        maxHeap.insert(0);
        
        maxHeap.printHeap();
        
        maxHeap.delete();
        maxHeap.printHeap();
        
        System.out.println(maxHeap.hasLeft(0));
        System.out.println(maxHeap.hasRight(1));
        
        maxHeap.insert(12);
        maxHeap.printHeap();
    }
}
